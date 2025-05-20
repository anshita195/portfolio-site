import { NextResponse } from 'next/server'
import * as SibApiV3Sdk from '@getbrevo/brevo'

// Initialize Brevo client
const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi()
apiInstance.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY!)

// Simple in-memory rate limiting
const rateLimit = new Map<string, { count: number; resetTime: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const windowMs = Number(process.env.RATE_LIMIT_WINDOW_MS) || 3600000 // 1 hour
  const maxRequests = Number(process.env.RATE_LIMIT_MAX) || 5

  const userLimit = rateLimit.get(ip)
  if (!userLimit) {
    rateLimit.set(ip, { count: 1, resetTime: now + windowMs })
    return false
  }

  if (now > userLimit.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + windowMs })
    return false
  }

  if (userLimit.count >= maxRequests) {
    return true
  }

  userLimit.count++
  return false
}

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown'
    
    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const { name, email, message, honeypot } = await request.json()

    // Validate honeypot
    if (honeypot) {
      return NextResponse.json(
        { error: 'Invalid form submission' },
        { status: 400 }
      )
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Log environment variables (without sensitive data)
    console.log('Environment check:', {
      hasApiKey: !!process.env.BREVO_API_KEY,
      fromEmail: process.env.BREVO_FROM_EMAIL,
      toEmail: process.env.BREVO_TO_EMAIL,
    })

    // Prepare email content
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail()
    sendSmtpEmail.to = [{ email: process.env.BREVO_TO_EMAIL! }]
    sendSmtpEmail.replyTo = { email, name }
    sendSmtpEmail.sender = { 
      email: process.env.BREVO_FROM_EMAIL!,
      name: 'Portfolio Contact Form'
    }
    sendSmtpEmail.subject = `Portfolio Contact: Message from ${name}`
    sendSmtpEmail.textContent = `
Name: ${name}
Email: ${email}

Message:
${message}
    `
    sendSmtpEmail.htmlContent = `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
    `

    // Send email
    try {
      const data = await apiInstance.sendTransacEmail(sendSmtpEmail)
      console.log('Email sent successfully:', data)
      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 }
      )
    } catch (error: any) {
      console.error('Brevo error:', error)
      if (error.response) {
        console.error('Brevo response:', error.response.body)
      }
      throw error
    }
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
} 
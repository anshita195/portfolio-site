# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- 🌙 Dark mode support
- ⚡ Fast and optimized
- 📝 Contact form with email notifications
- 🔒 Spam protection
- 🔍 SEO friendly
- 🚀 Easy deployment

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Nodemailer
- React Intersection Observer

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-site.git
   cd portfolio-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your SMTP configuration:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=465
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-specific-password
   ```

   Note: For Gmail, you'll need to use an App Password. [Learn how to create one](https://support.google.com/accounts/answer/185833).

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy!

## Customization

1. Update the content in the components:
   - `src/components/sections/Hero.tsx`
   - `src/components/sections/About.tsx`
   - `src/components/sections/Projects.tsx`
   - `src/components/sections/Skills.tsx`

2. Modify the theme colors in `tailwind.config.js`

3. Update the metadata in `src/app/layout.tsx`

## Contributing

Feel free to submit issues and pull requests.

## License

MIT License - feel free to use this template for your own portfolio!

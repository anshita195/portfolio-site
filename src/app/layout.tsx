import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://anshitajain.vercel.app'),
  title: {
    default: "Anshita Jain - Portfolio",
    template: "%s | Anshita Jain's Portfolio"
  },
  description: "Full-stack developer and software engineer portfolio showcasing projects and skills",
  openGraph: {
    title: "Anshita Jain - Portfolio",
    description: "Full-stack developer and software engineer portfolio showcasing projects and skills",
    type: "website",
    locale: "en_US",
    siteName: "Anshita Jain's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anshita Jain - Portfolio",
    description: "Full-stack developer and software engineer portfolio showcasing projects and skills",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

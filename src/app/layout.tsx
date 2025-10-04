import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Inter} from 'next/font/google'
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ThemeScript } from "@/components/providers/ThemeScript";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const inter = Inter({subsets: ['latin'], display: 'swap', variable: '--font-inter'})

export const metadata: Metadata = {
  title: "Hyper Nexium Technologies",
  description: "Powering Smart Enterprises Beyond Limits",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <ThemeScript/>
      </head>
      <body
        className='antialiased'
      >
        <ThemeProvider defaultTheme="system" enableSystem >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

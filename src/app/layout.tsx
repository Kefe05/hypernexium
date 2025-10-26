import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";

import { Assistant } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ThemeScript } from "@/components/providers/ThemeScript";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const roboto_condensed = Assistant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Hyper Nexium Technologies",
  description: "Powering Smart Enterprises Beyond Limits",
  openGraph: {
    title: "Hyper Nexium Technologies",
    description: "Powering Smart Enterprises Beyond Limits",
    url: "https://hypernexium.com",
    siteName: "Hyper Nexium Technologies",
    images: [
      {
        url: "https://res.cloudinary.com/djmhfdvp5/image/upload/v1761361435/openGraph_pfkwg4.png",
        width: 1200,
        height: 630,
        alt: "Hyper Nexium Technologies",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyper Nexium Technologies",
    description: "Powering Smart Enterprises Beyond Limits",
    images: ["https://res.cloudinary.com/djmhfdvp5/image/upload/v1761361435/openGraph_pfkwg4.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={roboto_condensed.variable}>
      <head>
        <ThemeScript />
      </head>
      <body className="antialiased   w-screen overflow-x-hidden ">
        <ThemeProvider defaultTheme="system" enableSystem>
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

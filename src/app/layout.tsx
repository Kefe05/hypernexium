import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Assistant } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ThemeScript } from "@/components/providers/ThemeScript";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";


const roboto_condensed = Assistant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});






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

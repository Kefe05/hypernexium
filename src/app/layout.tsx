import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Assistant, Mochiy_Pop_P_One, Noto_Sans, Noto_Serif, Nunito, Poppins, Roboto, Roboto_Condensed, Roboto_Flex, Roboto_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ThemeScript } from "@/components/providers/ThemeScript";
import Nav from "@/components/Nav";


const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});
const roboto_condensed = Assistant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

const noto = Noto_Sans({
   subsets: ["latin"],
   weight: ["300", "400", "500", "700"],
   display: "swap",
   variable: "--font-roboto",
});

// const nunito = Nunito


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
      <body className="antialiased   w-screen ">
        <ThemeProvider defaultTheme="system" enableSystem>
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

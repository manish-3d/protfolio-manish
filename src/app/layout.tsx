import type { Metadata } from "next";
import { Suspense } from "react";
import { Pixelify_Sans, Inter, Geist_Mono } from "next/font/google";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import "./globals.css";

const pixelify = Pixelify_Sans({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manish Kumar | The Builder's World (Minecraft Developer Portfolio)",
  description: "B.Tech CSE (IoT) student at NIET. Building real projects, learning in public, and exploring AI, Web, and Embedded Systems.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${pixelify.variable} ${inter.variable} ${geistMono.variable} dark`}>
      <body className="min-h-screen bg-[#101e37] text-[#f4f0e8] flex flex-col antialiased selection:bg-[#36c653] selection:text-[#141312]">
        <Suspense fallback={<div className="h-16 w-full" />}>
          <Navbar />
        </Suspense>
        <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

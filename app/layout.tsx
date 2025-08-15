import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SursaKit",
  description: "SursaKit is the new AI powered cloud based IDE",
  icons:{
    icon:"https://sursakit.com/logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://analytics.apps.sursatech.com/script.js"
          strategy="afterInteractive"
          data-website-id="9982447e-3490-4dd1-96b5-3490c34d354e"
        />
        <Toaster/>
        {children}
      </body>
    </html>
  );
}

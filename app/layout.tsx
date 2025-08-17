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
  keywords: ["AI", "IDE", "Cloud", "Development", "Code Editor", "SursaKit"],
  authors: [{ name: "SursaTech" }],
  creator: "SursaTech",
  publisher: "SursaTech",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sursakit.com",
    siteName: "SursaKit",
    title: "SursaKit - AI Powered Cloud IDE",
    description: "SursaKit is the new AI powered cloud based IDE",
    images: [
      {
        url: "/logo-512.svg",
        width: 512,
        height: 512,
        alt: "SursaKit Logo",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SursaKit - AI Powered Cloud IDE",
    description: "SursaKit is the new AI powered cloud based IDE",
    images: ["/logo-512.svg"],
    creator: "@SursaTech",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/logo.svg",
    other: [
      {
        rel: "apple-touch-icon",
        url: "/logo.svg",
        sizes: "32x32",
        type: "image/svg+xml",
      },
      {
        rel: "icon",
        url: "/logo.svg",
        sizes: "32x32",
        type: "image/svg+xml",
      },
      {
        rel: "icon",
        url: "/logo-512.svg",
        sizes: "512x512",
        type: "image/svg+xml",
      },
    ],
  },
  manifest: "/manifest.json",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#FFE230",
  colorScheme: "light dark",
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
        <link rel="manifest" href="/manifest.json" />
        <Toaster/>
        {children}
      </body>
    </html>
  );
}

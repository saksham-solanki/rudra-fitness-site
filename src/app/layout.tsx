import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rudra Lifts Iron | Fitness Coach & Transformation Expert | Chandigarh",
  description:
    "Transform your body with Rudra — Chandigarh's raw fitness coach. Custom diet charts, personal training, and 1-on-1 coaching. No shortcuts, just iron discipline.",
  keywords: [
    "fitness coach Chandigarh",
    "personal trainer India",
    "diet chart India",
    "body transformation",
    "online fitness coaching",
    "Rudra lifts iron",
    "gym Chandigarh",
    "muscle building India",
    "fat loss program",
    "fitness influencer India",
  ],
  openGraph: {
    title: "Rudra Lifts Iron | Transform Your Body",
    description:
      "Custom diet plans, personal training & body transformations. Chandigarh's raw fitness coach.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudra Lifts Iron | Fitness Coach",
    description: "Transform your body with iron discipline.",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  );
}

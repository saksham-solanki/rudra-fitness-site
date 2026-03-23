import type { Metadata, Viewport } from "next";
import "./globals.css";

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
  alternates: {
    canonical: "https://rudralifts.com",
  },
  openGraph: {
    title: "Rudra Lifts Iron | Transform Your Body",
    description:
      "Custom diet plans, personal training & body transformations. Chandigarh's raw fitness coach.",
    type: "website",
    locale: "en_IN",
    url: "https://rudralifts.com",
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
  themeColor: "#080c18",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Rudra Lifts Iron",
  description:
    "Chandigarh-based fitness coach offering custom diet plans, personal training, and 1-on-1 body transformation coaching.",
  url: "https://rudralifts.com",
  telephone: "+91-XXXXXXXXXX",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chandigarh",
    addressRegion: "CH",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.7333,
    longitude: 76.7794,
  },
  image: "https://rudralifts.com/og-image.jpg",
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "06:00",
    closes: "21:00",
  },
  sameAs: [
    "https://www.instagram.com/rudra.lifts.iron",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://rudralifts.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#080c18] text-slate-200 font-body">
        {children}
      </body>
    </html>
  );
}

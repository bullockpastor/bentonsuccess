import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Timothy Bullock",
  alternateName: "Bos",
  url: "https://bentonsuccess.com",
  image: "https://bentonsuccess.com/assets/og-preview.jpg",
  jobTitle: "Music Producer, Composer",
  description:
    "Timothy 'Bos' Bullock — multi-platinum music producer and founder of Ivy League Productions. Credits include Beyoncé, Britney Spears, Justin Bieber, Young Jeezy, and more.",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Morehouse College",
  },
  birthPlace: {
    "@type": "Place",
    name: "Detroit, Michigan",
  },
  worksFor: {
    "@type": "Organization",
    name: "Ivy League Productions",
    url: "https://bentonsuccess.com",
  },
  sameAs: [
    "https://credits.muso.ai/profile/6d850e12-97ba-4bfe-9fb5-4c44a3d95909/credits",
    "https://www.elationent.com/",
    "https://torchatl.com/",
  ],
  knowsAbout: [
    "Music Production",
    "Beat Production",
    "Mixing and Mastering",
    "Film Scoring",
    "Artist Development",
    "R&B",
    "Pop",
    "Hip-Hop",
    "K-Pop",
  ],
};

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification: {
    google: "ip3bRdWJSf2YgIFHhsW8y0LG-XMQBvH12zm9f0Mqw2I",
  },
  title: "Bos | Multi-Platinum Music Producer",
  description: "Timothy 'Bos' Bullock — founder of Ivy League Productions. Multi-platinum producer behind Beyoncé, Britney Spears, Justin Bieber, and more.",
  icons: {
    icon: [{ url: "/assets/favicon-512.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/assets/favicon-512.png", type: "image/png", sizes: "512x512" }],
  },
  openGraph: {
    title: "Bos | Multi-Platinum Music Producer",
    description: "Timothy 'Bos' Bullock — founder of Ivy League Productions. Multi-platinum producer behind Beyoncé, Britney Spears, Justin Bieber, and more.",
    url: "https://bentonsuccess.com",
    siteName: "Bent On Success",
    images: [{ url: "/assets/og-preview.jpg", width: 1200, height: 1200, alt: "Bos | Ivy League Productions" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bos | Multi-Platinum Music Producer",
    description: "Timothy 'Bos' Bullock — founder of Ivy League Productions. Multi-platinum producer behind Beyoncé, Britney Spears, Justin Bieber, and more.",
    images: ["/assets/og-preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

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
    icon: [{ url: "/assets/bos-logo-black.png", type: "image/png", sizes: "any" }],
    apple: [{ url: "/assets/bos-logo-black.png", type: "image/png" }],
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
      <body className="min-h-full flex flex-col bg-black text-white">{children}</body>
    </html>
  );
}

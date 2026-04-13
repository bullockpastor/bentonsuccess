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
    google: "YTA7_uy3kF8VeycIhcEfFwWQLznRKCywcVWlmTxmnbk",
  },
  title: "Bos | Multi-Platinum Music Producer",
  description: "Timothy 'Bos' Bullock — founder of Ivy League Productions. Multi-platinum producer behind Beyoncé, Britney Spears, Justin Bieber, and more.",
  icons: {
    icon: "/assets/bos-logo-black.png",
    apple: "/assets/bos-logo-black.png",
  },
  openGraph: {
    title: "Bos | Multi-Platinum Music Producer",
    description: "Timothy 'Bos' Bullock — founder of Ivy League Productions. Multi-platinum producer behind Beyoncé, Britney Spears, Justin Bieber, and more.",
    url: "https://bentonsuccess.com",
    siteName: "Bent On Success",
    images: [{ url: "/assets/bos-logo-white.png", width: 380, height: 190, alt: "Bent On Success" }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Bos | Multi-Platinum Music Producer",
    description: "Timothy 'Bos' Bullock — founder of Ivy League Productions. Multi-platinum producer behind Beyoncé, Britney Spears, Justin Bieber, and more.",
    images: ["/assets/bos-logo-white.png"],
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

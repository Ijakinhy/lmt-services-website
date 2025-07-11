
import { Figtree, Inter, Libre_Caslon_Text } from "next/font/google";

import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import NavBar from "@/components/Navbar";
import type { Metadata } from "next";
import type React from "react";
import "./globals.css";


const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-figtree',
});

const libreCaslon = Libre_Caslon_Text({
  subsets: ['latin'],
  weight: ['400', "700"],
  display: 'swap',
  variable: '--font-libre-caslon',
});

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://luckymotech.com"),
  title: "Luckymotech Services Limited | Innovative, Customer-Centric Solutions",
  description:
    "Luckymotech Services Limited is a trusted service provider founded in 2023, delivering high-quality, customer-first solutions with a focus on innovation, integrity, and excellence.",
  openGraph: {
    title: "Luckymotech Services Limited | Innovative, Customer-Centric Solutions",
    description:
      "Luckymotech Services Limited is a trusted service provider founded in 2023, delivering high-quality, customer-first solutions with a focus on innovation, integrity, and excellence.",
    url: "https://luckymotech.com",
    siteName: "Luckymotech Services Limited",
    images: [
      {
        url: "/Hero-bg.webp",
        width: 1200,
        height: 600,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luckymotech Services Limited | Innovative, Customer-Centric Solutions",
    description:
      "Luckymotech Services Limited is a trusted service provider founded in 2023, delivering high-quality, customer-first solutions with a focus on innovation, integrity, and excellence.",
    images: ["/Hero-bg.webp"],
    creator: "@luckymotech",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${figtree.variable} ${libreCaslon.variable} ${inter.className} antialiased overflow-auto flex flex-col relative min-h-screen bg-white dark:bg-black transition-colors duration-300`}
      >
        <div className="relative min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-grow">
            {children}
          </main>
          <ContactSection />
          <Footer />
        </div>
      </body>

    </html>
  )
}

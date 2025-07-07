
import { Geist, Geist_Mono, Figtree, Libre_Caslon_Text, Libre_Caslon_Display, Inter } from "next/font/google";

import NavBar from "@/components/Navbar";
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
import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Marketing Agency",
  description: "Award winning marketing agency with top notch services",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${figtree.variable} ${libreCaslon.variable} ${inter.className} antialiased overflow-auto flex flex-col relative min-h-screen bg-white dark:bg-black transition-colors duration-300  `}
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

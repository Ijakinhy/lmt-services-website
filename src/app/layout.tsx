import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree, Libre_Caslon_Text, Libre_Caslon_Display, Inter } from "next/font/google";

import NavBar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] })

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
    <html lang="en">
      <body
        className={`${figtree.variable} ${libreCaslon.variable} antialiased overflow-auto`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  )
}

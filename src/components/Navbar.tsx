"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { animate, hover, motion } from "framer-motion"
import TextSlideUpDown from "./text-slide-up-down"

const menuLinks = [
    {
        label: "HOME",
        href: "/"
    },
    {
        label: "ABOUT US",
        href: "/about"
    },
    {
        label: "SERVICES",
        href: "/services"
    },
    {
        label: "BLOG",
        href: "/blog"
    },
    {
        label: "PRICING",
        href: "/pricing"
    }
]

const MotionLink = motion(Link);
export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <div className="w-full py-6 px-4 md:px-32 absolute inset-0 z-50">
                <div className="container mx-auto flex items-center justify-between ">
                    {/* Logo */}
                    <Link id="link" href="/" className="flex items-center  bg-white rounded-full">
                        <Image src="/logo.png" alt="LMT Services Limited" width={120} height={60} className="h-12 w-auto" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center relative gap-[59px]">
                        {menuLinks.map(item => <TextSlideUpDown label={item.label} href={item.href} key={item.label} className="text-white text-[16px] font-light tracking-wide h-[24px]" />)}
                    </nav>
                    {/* Right Side */}
                    <div className="flex items-center justify-center space-x-4">


                        <div className="bg-white text-[#03080d] py-2 px-9 text-[16px] rounded-full leading-[110%] font-medium tracking-tighter">
                            <TextSlideUpDown href="/" label="CONNECT" className=" h-[24px]  flex items-center justify-center  " />
                        </div>

                        {/* Mobile Menu Button */}
                        <button onClick={toggleMenu} className="md:hidden text-white p-2" aria-label="Toggle menu">
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black/95 z-50 md:hidden">
                    <div className="flex flex-col h-full">
                        {/* Mobile Header */}
                        <div className="flex items-center justify-between p-4">
                            <Link id="link" href="/" onClick={toggleMenu}>
                                <Image
                                    src="/logo.png"
                                    alt="LMT Services Limited"
                                    width={120}
                                    height={60}
                                    className="h-12 w-auto"
                                />
                            </Link>
                            <div className="flex items-center space-x-4">
                                <Button
                                    variant="outline"
                                    className="bg-white text-black hidden lg:block hover:bg-white/90 rounded-full text-sm px-4 py-2"
                                >
                                    CONNECT
                                </Button>
                                <button onClick={toggleMenu} className="text-white p-2" aria-label="Close menu">
                                    <X className="h-6 w-6" />
                                </button>
                            </div>
                        </div>

                        {/* Mobile Navigation */}
                        <nav className="flex-1 flex flex-col px-4 py-8">
                            <Link
                                href="/"
                                className="text-white text-xl py-4 border-b border-gray-800 hover:text-white/80 transition-colors flex items-center justify-between"
                                onClick={toggleMenu}
                            >
                                HOME
                                <ChevronDown className="h-5 w-5 rotate-[-90deg]" />
                            </Link>
                            <Link
                                href="/about"
                                className="text-white text-xl py-4 border-b border-gray-800 hover:text-white/80 transition-colors flex items-center justify-between"
                                onClick={toggleMenu}
                            >
                                ABOUT US
                                <ChevronDown className="h-5 w-5 rotate-[-90deg]" />
                            </Link>

                            <Link
                                href="/services"
                                className="text-white text-xl py-4 border-b border-gray-800 hover:text-white/80 transition-colors flex items-center justify-between"
                                onClick={toggleMenu}
                            >
                                SERVICES
                                <ChevronDown className="h-5 w-5 rotate-[-90deg]" />
                            </Link>
                            <Link
                                href="/blog"
                                className="text-white text-xl py-4 border-b border-gray-800 hover:text-white/80 transition-colors flex items-center justify-between"
                                onClick={toggleMenu}
                            >
                                BLOG
                                <ChevronDown className="h-5 w-5 rotate-[-90deg]" />
                            </Link>
                            <Link
                                href="/pricing"
                                className="text-white text-xl py-4 border-b border-gray-800 hover:text-white/80 transition-colors flex items-center justify-between"
                                onClick={toggleMenu}
                            >
                                PRICING
                                <ChevronDown className="h-5 w-5 rotate-[-90deg]" />
                            </Link>

                        </nav>
                    </div>
                </div>
            )}
        </>
    )
}



// <TextSlideUpDown href="/" label="CONNECT" className="text-center bg-white text-[#03080d] h-[46px] w-[8.5rem]  flex items-center justify-center  text-[16px] rounded-full leading-[110%] font-medium tracking-tighter " />
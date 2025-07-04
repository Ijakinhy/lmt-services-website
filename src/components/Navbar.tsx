"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRightIcon, ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { animate, hover, motion } from "framer-motion"
import TextSlideUpDown from "./text-slide-up-down"
import useScrollDirection from "@/app/hooks/useScrollDirection"
import { ThemeToggle } from "./theme-toggle"

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

    const { scrollDirection, scrollY } = useScrollDirection()

    return (
        <>
            <div
                className={`fixed top-0 left-0 w-full h-24 py-6 px-4 md:px-6  lg:px-32 z-50 transition-colors duration-300 ${scrollY !== 0 ? "md:bg-[#03080d]" : "md:bg-transparent"
                    }`}
            >
                <div className="container mx-auto flex items-center justify-between ">
                    {/* Logo */}
                    <Link id="link" href="/" className="flex items-center  bg-white rounded-full">
                        <Image src="/logo.png" alt="LMT Services Limited" width={120} height={60} className="h-12 w-auto" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center relative  md:gap-[30px] lg:gap-[59px]">
                        {menuLinks.map(item => <TextSlideUpDown href={item.href} key={item.label} className="text-white text-[16px] font-light tracking-wide h-[24px]" label={item.label} />)}
                    </nav>                    <div className="flex items-center justify-center space-x-4">

                        <div className="bg-white text-[#03080d] py-2 px-9 text-[16px] rounded-full leading-[110%] font-medium tracking-tighter">
                            <TextSlideUpDown href="/" className=" h-[24px]  flex items-center justify-center  " label="CONNECT" />

                        </div>
                        <ThemeToggle />


                        {/* Mobile Menu Button */}
                        <button onClick={toggleMenu} className="md:hidden text-white p-2" aria-label="Toggle menu">
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}

            <div
                className={`fixed inset-0 bg-black transform transition-transform duration-300 ease-in-out z-50 md:hidden ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >

                <div className="flex flex-col h-full">
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
                            <TextSlideUpDown href="/" className=" h-[24px]  flex items-center justify-center  " label="CONNECT" />

                            <button onClick={toggleMenu} className="text-white p-2" aria-label="Close menu">
                                <X className="h-6 w-6" />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <nav className="flex-1 flex flex-col px-4 py-8">
                        <div
                            className="text-white text-xl mt-3.5 py-4 border-b border-gray-800  transition-colors flex items-center "
                            onClick={toggleMenu}
                        >
                            <TextSlideUpDown href="/" className="text-white flex-1 bg-  h-[24px]" label="Home" />

                            <ArrowUpRightIcon className="h-5 w-5 " />
                        </div>
                        <div
                            className="text-white text-xl mt-3.5 py-4 border-b border-gray-800  transition-colors flex items-center justify-between"
                            onClick={toggleMenu}
                        >
                            <TextSlideUpDown href="/" className="text-white  h-[24px]" label="ABOUT US" />
                            <ArrowUpRightIcon className="h-5 w-5 " />
                        </div>

                        <div
                            className="text-white text-xl mt-3.5 py-4 border-b border-gray-800  transition-colors flex items-center justify-between"
                            onClick={toggleMenu}
                        >
                            <TextSlideUpDown href="/" className="text-white  h-[24px]" label="BLOG" />
                            <ArrowUpRightIcon className="h-5 w-5 " />
                        </div>
                        <div
                            className="text-white text-xl mt-3.5 py-4 border-b border-gray-800  transition-colors flex items-center justify-between"
                            onClick={toggleMenu}
                        >
                            <TextSlideUpDown href="/" className="text-white  h-[24px]" label="BLOG" />
                            <ArrowUpRightIcon className="h-5 w-5 " />
                        </div>
                        <div
                            className="text-white text-xl mt-3.5 py-4 border-b border-gray-800  transition-colors flex items-center justify-between"
                            onClick={toggleMenu}
                        >
                            <TextSlideUpDown href="/" className="text-white  h-[24px]" label="PRICING" />
                            <ArrowUpRightIcon className="h-5 w-5 " />
                        </div>

                    </nav>
                </div>
            </div>

        </>
    )
}
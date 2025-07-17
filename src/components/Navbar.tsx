"use client"

import useScrollDirection from "@/app/hooks/useScrollDirection"
import { ArrowUpRightIcon, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import TextSlideUpDown from "./text-slide-up-down"
import { ThemeToggle } from "./theme-toggle"

const menuLinks = [
    {
        label: "HOME",
        href: "/"
    },
    {
        label: "SERVICES",
        href: "/services"
    },
    {
        label: "ABOUT US",
        href: "/about"
    },
    {
        label: "BLOG",
        href: "https://lmt-blog.hashnode.dev"
    },
]

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()
    const isHomePage = pathname === "/"
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const { scrollY } = useScrollDirection()

    return (
        <>

            {/*on Home page */}

            <div
                className={` ${isHomePage ? `fixed top-0 left-0 ${scrollY !== 0 ? "bg-[#03080d]" : "bg-transparent"
                    }` : "sticky top-0 bg-[#03080d] "} w-full h-24 py-6 px-4 md:px-6  lg:px-32 z-50 transition-colors duration-300 `}
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

                        <div className="bg-white hidden md:block text-[#03080d] py-2 px-9 text-[16px] rounded-full leading-[110%] font-medium tracking-tighter">
                            <TextSlideUpDown href="/contact" className=" h-[24px] flex items-center justify-center  " label="CONTACT US" />

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
                            <TextSlideUpDown href="/" className="text-white flex-1 bg-  h-[24px]" label="HOME" />

                            <ArrowUpRightIcon className="h-5 w-5 " />
                        </div>
                        <div
                            className="text-white text-xl mt-3.5 py-4 border-b border-gray-800  transition-colors flex items-center justify-between"
                            onClick={toggleMenu}
                        >
                            <TextSlideUpDown href="/services" className="text-white  h-[24px]" label="SERVICES" />
                            <ArrowUpRightIcon className="h-5 w-5 " />
                        </div>
                        <div
                            className="text-white text-xl mt-3.5 py-4 border-b border-gray-800  transition-colors flex items-center justify-between"
                            onClick={toggleMenu}
                        >
                            <TextSlideUpDown href="/about" className="text-white  h-[24px]" label="ABOUT US" />
                            <ArrowUpRightIcon className="h-5 w-5 " />
                        </div>
                        <div
                            className="text-white text-xl mt-3.5 py-4 border-b border-gray-800  transition-colors flex items-center justify-between"
                            onClick={toggleMenu}
                        >
                            <TextSlideUpDown href="https://lmt-blog.hashnode.dev/about-lmt-services" className="text-white  h-[24px]" label="BLOG" />
                            <ArrowUpRightIcon className="h-5 w-5 " />
                        </div>
                        <div
                            className="text-white text-xl mt-3.5 py-4 border-b border-gray-800  transition-colors flex items-center justify-between"
                            onClick={toggleMenu}
                        >
                            <TextSlideUpDown href="/contact" className="text-white  h-[24px]" label="CONTACT US" />
                            <ArrowUpRightIcon className="h-5 w-5 " />
                        </div>
                    </nav>
                </div>
            </div>

        </>
    )
}
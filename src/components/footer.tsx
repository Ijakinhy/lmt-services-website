"use client"

import { ArrowUp, Facebook, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./icon";

export default function Footer() {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > document.documentElement.scrollHeight / 2) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-gray-50 text-gray-800 dark:bg-black dark:text-white">
            <div className="max-w-7xl mx-auto px-6 py-12 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-8 ml-5 md:ml-0">
                    <div>
                        <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">ONSITE</h2>
                        <h3 className="text-xl font-bold mb-4">JOIN OUR NEWSLETTER</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm leading-relaxed max-w-sm">
                            Sign up to our mailing list below and be the first to know about new updates
                        </p>
                        <div className="flex max-w-md">
                            <input
                                type="email"
                                placeholder="Your email address..."
                                className="flex-1 bg-white border border-gray-300 rounded-l-full px-6 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:bg-gray-900 dark:border-0 dark:text-white dark:placeholder-gray-500 dark:focus:ring-white"
                            />
                            <button className="bg-black text-white px-8 py-3 rounded-r-full font-bold hover:bg-gray-800 transition-colors dark:bg-white dark:text-black dark:hover:bg-gray-100">
                                SEND
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col mt-10 md:mt-0 md:justify-end ml-0 md:ml-auto gap-10">
                        {/* Discover Links */}
                        <h3 className="text-sm font-bold mb-6 text-gray-500 dark:text-gray-300">DISCOVER</h3>
                        <ul className="space-y-4 flex gap-4">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors text-sm">
                                    HOME
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors text-sm">
                                    ABOUT
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors text-sm">
                                    SERVICES
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors text-sm">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors text-sm">
                                    PRICING
                                </a>
                            </li>
                        </ul>

                        <div className="flex gap-5 space-y-3">
                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300 hover:text-black transition-colors dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                            >
                                <WhatsAppIcon className="size-[18px]" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300 hover:text-black transition-colors dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                            >
                                <Twitter size={18} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors dark:bg-gray-800 dark:hover:bg-gray-700"
                            >
                                <div className="w-4 h-4 bg-black text-white rounded-sm flex items-center justify-center dark:bg-white dark:text-black">
                                    <span className="text-xs font-bold">Be</span>
                                </div>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300 hover:text-black transition-colors dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                            >
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>
                </div>
                <button
                    onClick={handleScrollToTop}
                    className={`fixed bottom-10 right-10 flex items-center space-x-2 bg-[#03080d] dark:bg-white/90 py-2 px-4 rounded-md text-white/90 dark:text-[#03080d] text-xs font-bold transition-opacity duration-300 ease-in-out ${showScrollButton ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                >
                    <span>Back to top</span>
                    <ArrowUp size={14} />
                </button>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
                        <div className="text-gray-500 text-xs">
                            © Copyright 2025 | Design & Developed By{" "}
                            <span className="font-semibold text-black hover:underline dark:text-white">
                                jakin & Mezieuzor
                            </span>{" "}
                            | All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

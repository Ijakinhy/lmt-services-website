"use client"


import { motion } from "framer-motion";
import { Lobster } from "next/font/google";
import Image from "next/image";
import TextSlideUpDown from "./text-slide-up-down";

const libreCaslon = Lobster({
    subsets: ['latin'],
    weight: ['400',],
    display: 'swap',
});

export default function HeroSection() {
    return (
        <div className="relative  w-full overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image src="/Hero-bg.webp" alt="Background gradient" fill priority className="object-cover" />
            </div>

            <div
                className="relative z-10 flex flex-col min-h-screen"
            >
                <div className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-6 py-12 mt-24 md:py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.1,
                            ease: [0.42, 0, 0.58, 1]
                        }}
                        viewport={{ once: true, amount: 0.3 }}>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-4">
                            ELEVATING BRANDS
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: [0.42, 0, 0.58, 1]
                        }}
                        viewport={{ once: true, amount: 0.3 }}>

                        <p className={`text-3xl md:text-5xl ${libreCaslon.className} lg:text-[77px] font-extralight text-white mb-12`}>
                            with creative marketing
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.3,
                            ease: [0.42, 0, 0.58, 1]
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="mt-20 bg-white text-[#03080d] font-medium tracking-tighter leading-tight rounded-full px-[36px] py-[15px] text-[16px]"
                    >

                        <TextSlideUpDown href="/contact" label="CONTACT US" className=" h-[24px]  flex items-center justify-center  " />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

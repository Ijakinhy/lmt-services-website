"use client"
import { motion } from "framer-motion";
import TextSlideUpDown from "./text-slide-up-down";


export default function ContactSection() {
    return (
        <section className="relative min-h-[423.31px] flex items-center justify-center px-4 py-16 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/CTA-Bg.webp')",
                }}
            ></div>
            <div className="absolute inset-0 bg-black/20"></div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
                <motion.h1 initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.2,
                        ease: [0.42, 0, 0.58, 1]
                    }}
                    viewport={{ once: true, amount: 0.3 }} className="text-[36px] md:text-[45px] lg:text-[52px] leading-[110%] tracking-tight font-bold text-white">READY TO CONNECT?</motion.h1>

                <motion.h2 initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.2,
                        ease: [0.42, 0, 0.58, 1]
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-4xl md:text-6xl lg:text-7xl text-white   italic leading-[111%] tracking-[-2.88px] font-normal "
                    style={{ fontFamily: "serif" }}
                >
                    send us an email today
                </motion.h2>

                <motion.p initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        delay: 0.2,
                        ease: [0.42, 0, 0.58, 1]
                    }}
                    viewport={{ once: true, amount: 0.3 }} className="text-white/90 text-[16px] lg:text-[20px] mb-12 max-w-3xl mx-auto tracking-[0.4px] leading-[160%] font-normal">
                    Our team combines creativity, strategy, and industry expertise to help brands grow and connect with their
                    audience
                </motion.p>


                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: [0.42, 0, 0.58, 1]
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="mt-20 bg-white text-[#03080d] font-medium tracking-tighter leading-tight rounded-full px-[36px] py-[15px] text-[16px]  max-w-[174px] mx-auto"
                >

                    <TextSlideUpDown href="/" label="Send Email" className=" h-[24px]  flex items-center justify-center  " />
                </motion.div>
            </div>
        </section>
    )
}

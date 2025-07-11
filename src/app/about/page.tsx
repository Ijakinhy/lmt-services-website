"use client";


import ScrollZoomImage from "@/components/ScrollZoomImage";
import AboutUs from "@/components/ui/about-us";
import { motion } from "framer-motion";
import { Asterisk, Diamond, Hexagon, Plus, Sparkles, Star } from "lucide-react";
import { Lobster } from "next/font/google";

const coreValues = [
    {
        id: 1,
        icon: Sparkles,
        title: "DEVELOPMENT",
        description: "Our growth work process is designed to ensure sustainable and measurable",
    },
    {
        id: 2,
        icon: Hexagon,
        title: "TEAM WORK",
        description: "Our Team work process is designed to ensure sustainable and measurable",
    },
    {
        id: 3,
        icon: Plus,
        title: "INNOVATION",
        description: "Our Innovation process is designed to ensure sustainable and measurable success",
    },
    {
        id: 4,
        icon: Diamond,
        title: "PRECISOIN",
        description: "Our Precision process is designed to ensure sustainable and measurable",
    },
    {
        id: 5,
        icon: Asterisk,
        title: "ADAPTABILITY",
        description: "Our Adaptability process is designed to ensure sustainable and measurable",
    },
    {
        id: 6,
        icon: Star,
        title: "EXECUTION",
        description: "Our Execution is designed to ensure sustainable and measurable success",
    },
]


const libreCaslon = Lobster({
    subsets: ['latin'],
    weight: ['400',],
    display: 'swap',
});
export default function AboutPage() {

    return (
        <section className="w-full  bg-white text-gray-800 dark:bg-black dark:text-gray-100 transition-colors duration-300">
            <div className="w-full flex items-center justify-center flex-col gap-10 mt-20">
                <div className="max-w-5xl mx-auto h-[80vh] flex flex-col justify-center items-center text-center space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.1,
                            ease: [0.42, 0, 0.58, 1]
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-[40px] md:text-[52px] font-bold tracking-tight leading-tight">
                        Reimagining Service Excellence
                    </motion.h2>

                    <motion.h5 initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2,
                            ease: [0.42, 0, 0.58, 1]
                        }}
                        viewport={{ once: true, amount: 0.3 }} className={`text-5xl md:text-[72px] ${libreCaslon.className} text-gray-600 dark:text-gray-300 font-medium`}>
                        Your Partner in Innovation, Quality, and Growth
                    </motion.h5>

                    <motion.p initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.3,
                            ease: [0.42, 0, 0.58, 1]
                        }}
                        viewport={{ once: true, amount: 0.3 }} className="text-lg md:text-xl mt-5 text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                        At LuckyMotech, we are not just a service provider; we are your partners in
                        innovation. Our mission is to transform the way businesses operate by
                        delivering cutting-edge solutions that drive efficiency and growth.
                    </motion.p>

                    <div className="h-[1.5px] w-24 bg-gray-300 dark:bg-gray-700 mx-auto my-6"></div>
                </div>
            </div>
            <div id="insight" className="min-w-full">
                <ScrollZoomImage />

            </div>
            <div
                className={`mt-24 max-w-7xl mx-auto `}
            >
                <motion.p initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.1,
                        ease: [0.42, 0, 0.58, 1]
                    }}
                    viewport={{ once: true, amount: 0.3 }} className="text-sm font-medium text-slate-800 dark:text-white/90 mb-4 sm:mb-6 tracking-wider">
                    /Our Mission
                </motion.p>
                <div className="p-6 sm:p-8 lg:p-12 rounded-lg shadow-lg">
                    <motion.h1 initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2,
                            ease: [0.42, 0, 0.58, 1]
                        }}
                        viewport={{ once: true, amount: 0.3 }} className="text-3xl lg:text-[40px]  font-bold tracking-tight leading-tight">
                        To be a trusted leader in service excellence,
                    </motion.h1>
                    <motion.h2 initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2,
                            ease: [0.42, 0, 0.58, 1]
                        }}
                        viewport={{ once: true, amount: 0.3 }} className="text-xl lg:text-[30px]  font-light italic leading-tight">
                        value, and customer satisfaction.
                    </motion.h2>
                </div>
            </div>
            <AboutUs />
            <div className="max-w-7xl mx-4 md:mx-auto  py-20">
                <div className="mb-16 sm:mb-20">
                    <p className="text-gray-400 text-sm sm:text-base mb-4 tracking-wider">/ABOUT WORK</p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">WHAT ARE OUR</h1>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light italic leading-tight">core values</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {coreValues.map((value, index) => {
                        const IconComponent = value.icon
                        return (
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.1 * index,
                                    ease: [0.42, 0, 0.58, 1]
                                }}
                                viewport={{ once: true, amount: 0.3 }}
                                key={value.id} className="group">
                                <div className="mb-6">
                                    <IconComponent
                                        size={32}
                                        className="text-white group-hover:text-gray-300 transition-colors duration-300"
                                    />
                                </div>

                                <div className="w-full h-px bg-gray-600 mb-6"></div>

                                <h3 className="text-xl sm:text-2xl font-bold mb-4 tracking-wide">{value.title}</h3>

                                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{value.description}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>


        </section>
    );
}
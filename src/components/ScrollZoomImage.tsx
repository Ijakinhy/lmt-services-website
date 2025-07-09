"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
const ScrollZoomImage = () => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1.0, 0.9]);
    return (
        <div ref={ref} className="mx-auto  relative h-[620px] max-w-[86.5vw] max-sm:h-[300px] max-sm:max-w-[33rem] max-md:h-[400px] max-md:max-w-[43rem]  max-lg:h-[400px] max-lg:max-w-[50rem] ">
            <motion.div style={{ scale }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full h-full ">
                <Image
                    src="/about-image.jpeg"
                    alt="about image"
                    fill
                    priority
                    className=" object-cover  w-full  h-full rounded-[40px]"
                />
            </motion.div>


        </div>
    );
};

export default ScrollZoomImage;

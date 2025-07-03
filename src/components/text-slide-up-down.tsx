'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface TextSlideUpDownProps {
    href: string;
    label: string;
    className?: string; // Optional className to customize styles
}

export default function TextSlideUpDown({ href, label, className }: TextSlideUpDownProps) {
    return (
        <Link
            href={href}
            className={`relative  inline-block overflow-hidden ${className || ''}`}
        >
            <motion.div
                initial={false}
                whileHover="hover"
                className="flex flex-col"
                variants={{ hover: {} }}
            >
                <motion.span
                    variants={{ hover: { y: '-100%' }, initial: { y: '0%' } }}
                    transition={{ duration: 0.3 }}
                    className={className}
                >
                    {label}
                </motion.span>

                <motion.span
                    variants={{ hover: { y: '-100%' }, initial: { y: '10%' } }}
                    transition={{ duration: 0.3 }}
                    className={className}
                >
                    {label}
                </motion.span>
            </motion.div>
        </Link>
    );
}

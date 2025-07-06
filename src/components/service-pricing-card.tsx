"use client";

import { type ServicePricingCard } from "@/lib/services";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function ServicePricingCard({ service, isAnimate }: { service: ServicePricingCard[], isAnimate?: boolean }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.map((plan, index) => (
                <motion.div initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: isAnimate ? 0.1 * index : 0,
                        ease: [0.42, 0, 0.58, 1]
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    key={index}
                    className={`bg-gray-900 rounded-2xl p-8 ${index % 2 === 1 ? "ring-2 ring-blue-500 scale-105" : ""}`}
                >
                    <h4 className="text-xl font-bold mb-4">{plan.plan}</h4>
                    <div className="text-3xl font-bold mb-6 text-blue-400">{plan.price}</div>
                    <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                                <span className="text-sm text-gray-300">{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <Button
                        className={`w-full ${index % 2 === 1 ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-700 hover:bg-gray-600"
                            } transition-colors duration-200`}
                    >
                        Choose Plan
                    </Button>
                </motion.div>
            ))}
        </div >
    )
}
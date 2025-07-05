"use client";

import { servicesData } from "@/lib/services";
import { Button } from "./ui/button";
import ServicePricingCard from "./service-pricing-card";
import { useState } from "react";


export default function HomePricingSection() {
    const [changePlan, setChangePlan] = useState("monthly");

    const handlePlanChange = (plan: string) => {
        setChangePlan(plan);
    };

    return (
        <section className="bg-white dark:bg-black text-gray-900 dark:text-white py-12 sm:py-16  transition-colors duration-300 max-w-7xl mx-auto">
            <div className="flex flex-col gap-10 mb-20 ">

                <div
                    className={`mb-24 `}
                >
                    <div className="text-sm font-medium text-slate-800 dark:text-white/90 mb-4 sm:mb-6 tracking-wider">
                        /PRICING PLAN
                    </div>
                    <div className="">
                        <h1 className="text-5xl lg:text-[52px]  font-bold tracking-tight leading-tight">
                            Affordable
                        </h1>
                        <h2 className="text-5xl lg:text-[72px]  font-light italic leading-tight">
                            pricing plan
                        </h2>
                    </div>
                </div>
                <div
                    className={`flex items-center justify-center gap-5`}
                >
                    <button
                        onClick={() => handlePlanChange("monthly")}
                        className={`${changePlan === "monthly" ? " bg-gray-900 dark:bg-white/90 dark:text-[#03080d] text-white/90" : "dark:bg-transparent bg-white/90 text-[#03080d] dark:text-white/90"}  rounded-full  py-[1.8rem] lg:py-[1.1rem] px-[32px] lg:px-[45px] text-[18px] lg:text-[20px] font-bold cursor-pointer `}
                    >
                        Monthly
                    </button>
                    <button
                        className={`${changePlan === "annually" ? " bg-gray-900 dark:bg-white/90 dark:text-[#03080d] text-white/90" : "dark:bg-transparent bg-white/90 text-[#03080d] dark:text-white/90"}  rounded-full  py-[1.8rem] lg:py-[1.1rem] relative px-[32px] lg:px-[45px] text-[18px] lg:text-[20px] font-bold cursor-pointer`}
                        onClick={() => handlePlanChange("annually")}
                    >
                        Annually
                        <span className={`${changePlan === "annually" ? "text-[#03080d] dark:bg-gray-900 bg-white/90 dark:text-white/90 " : "bg-gray-900 dark:bg-white/90 text-white/90 dark:text-[#03080d] "} text-[14px] py-[5px] px-1 rounded-full ml-2 font-light leading-0 tracking-tighter  `}>
                            (-20% off)
                        </span>
                    </button>
                </div>
            </div>
            <div className="px-8 sm:px-6 md:px-4 lg:px-0">
                <ServicePricingCard service={servicesData["property-management"].pricing} />
            </div>
        </section>
    )
}
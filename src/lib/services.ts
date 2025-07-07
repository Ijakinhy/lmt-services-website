export interface ServiceData {
    title: string
    description: string
    longDescription: string
    features: string[]
    benefits: string[]
    process: { step: string; description: string }[]
    pricing: { plan: string; price: string; features: string[] }[]
}

export type ServicePricingCard = {
    plan: string;
    price: string;
    features: string[];
}



export const servicesData: Record<string, ServiceData> = {
    "property-management": {
        title: "Property Management",
        description: "Comprehensive digital marketing solutions for SaaS companies",
        longDescription:
            "Our Property Management services are designed to help companies scale and manage their user equipments, improve retention, and maximize lifetime value. We understand the unique challenges of property management based on products and provide tailored strategies that drive sustainable growth.",
        features: [
            "Search Engine Optimization (SEO)",
            "Content Marketing Strategy",
            "Pay-Per-Click (PPC) Advertising",
            "Email Marketing Automation",
            "Conversion Rate Optimization",
            "Analytics & Performance Tracking",
        ],
        benefits: [
            "Increased organic traffic and visibility",
            "Higher conversion rates and lead quality",
            "Reduced customer acquisition costs",
            "Improved customer lifetime value",
            "Data-driven marketing decisions",
            "Scalable growth strategies",
        ],
        process: [
            {
                step: "Discovery & Analysis",
                description: "We analyze your current marketing efforts, target audience, and competitive landscape.",
            },
            {
                step: "Strategy Development",
                description: "Create a comprehensive marketing strategy tailored to your SaaS business goals.",
            },
            {
                step: "Implementation",
                description: "Execute campaigns across multiple channels with continuous monitoring and optimization.",
            },
            {
                step: "Optimization & Scaling",
                description: "Analyze performance data and scale successful campaigns while optimizing underperforming ones.",
            },
        ],
        pricing: [
            {
                plan: "Starter",
                price: "$2,500/month",
                features: ["SEO Optimization", "Content Marketing", "Basic Analytics", "Email Support"],
            },
            {
                plan: "Growth",
                price: "$5,000/month",
                features: ["Everything in Starter", "PPC Campaigns", "Advanced Analytics", "Dedicated Manager"],
            },
            {
                plan: "Enterprise",
                price: "Custom",
                features: ["Everything in Growth", "Custom Integrations", "Priority Support", "Strategic Consulting"],
            },

        ],
    },
    "social-ads": {
        title: "Social Media Advertising",
        description: "Targeted social media advertising campaigns that drive results",
        longDescription:
            "Our social media advertising services help businesses reach their ideal customers across all major social platforms. We create compelling ad campaigns that not only capture attention but drive meaningful engagement and conversions.",
        features: [
            "Facebook & Instagram Advertising",
            "LinkedIn B2B Campaigns",
            "Twitter/X Advertising",
            "TikTok Marketing",
            "Creative Design & Copywriting",
            "Audience Targeting & Segmentation",
        ],
        benefits: [
            "Precise audience targeting",
            "Increased brand awareness",
            "Higher engagement rates",
            "Improved ROI on ad spend",
            "Real-time campaign optimization",
            "Cross-platform consistency",
        ],
        process: [
            {
                step: "Audience Research",
                description: "Identify and analyze your target audience across different social platforms.",
            },
            {
                step: "Creative Development",
                description: "Design compelling ad creatives and copy that resonate with your audience.",
            },
            {
                step: "Campaign Launch",
                description: "Launch targeted campaigns with proper tracking and monitoring systems in place.",
            },
            {
                step: "Performance Optimization",
                description: "Continuously optimize campaigns based on performance data and audience feedback.",
            },
        ],
        pricing: [
            {
                plan: "Basic",
                price: "$1,500/month",
                features: ["2 Platforms", "Basic Targeting", "Monthly Reports", "Email Support"],
            },
            {
                plan: "Professional",
                price: "$3,500/month",
                features: ["4 Platforms", "Advanced Targeting", "Weekly Reports", "Phone Support"],
            },
            {
                plan: "Premium",
                price: "$6,500/month",
                features: ["All Platforms", "Custom Audiences", "Daily Reports", "Dedicated Account Manager"],
            },

        ],
    },
}
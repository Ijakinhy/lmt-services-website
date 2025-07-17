"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Facebook, Linkedin, Instagram, Twitter, MapPin, Mail, Phone } from "lucide-react"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        phoneNumber: "",
        message: "",
        agreeToPrivacy: false,
    })

    const handleInputChange = (field: string, value: string | boolean) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
    }

    return (
        <div className="min-h-screen bg-background p-4 md:p-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                    <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                        <CardContent className="p-8 md:p-12">
                            <h1 className="mb-8 text-3xl font-bold md:text-4xl">Get in touch</h1>

                            <div className="mb-8">
                                <div className="mb-2 flex items-center gap-3">
                                    <MapPin className="h-5 w-5" />
                                    <h2 className="text-xl font-semibold">Visit us</h2>
                                </div>
                                <p className="mb-2 text-blue-100">Come say hello at our office HQ.</p>
                                <p className="text-blue-100">123 Victoria Island, Lagos State, Nigeria</p>
                            </div>

                            <div className="mb-8">
                                <div className="mb-2 flex items-center gap-3">
                                    <Mail className="h-5 w-5" />
                                    <h2 className="text-xl font-semibold">Chat to us</h2>
                                </div>
                                <p className="mb-2 text-blue-100">Our friendly team is here to help.</p>
                                <p className="text-blue-100">hello@company.com</p>
                            </div>

                            <div className="mb-8">
                                <div className="mb-2 flex items-center gap-3">
                                    <Phone className="h-5 w-5" />
                                    <h2 className="text-xl font-semibold">Call us</h2>
                                </div>
                                <p className="mb-2 text-blue-100">Mon-Fri from 8am to 5pm</p>
                                <p className="text-blue-100">+234 123 456 7890</p>
                            </div>

                            <div>
                                <h2 className="mb-4 text-xl font-semibold">Social media</h2>
                                <div className="flex gap-4">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-10 w-10 rounded-full bg-white/20 text-white hover:bg-white/30"
                                    >
                                        <Facebook className="h-5 w-5" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-10 w-10 rounded-full bg-white/20 text-white hover:bg-white/30"
                                    >
                                        <Linkedin className="h-5 w-5" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-10 w-10 rounded-full bg-white/20 text-white hover:bg-white/30"
                                    >
                                        <Instagram className="h-5 w-5" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-10 w-10 rounded-full bg-white/20 text-white hover:bg-white/30"
                                    >
                                        <Twitter className="h-5 w-5" />
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="space-y-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName" className="text-sm font-medium">
                                        First Name
                                    </Label>
                                    <Input
                                        id="firstName"
                                        placeholder="First name"
                                        value={formData.firstName}
                                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                                        className="bg-background"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName" className="text-sm font-medium">
                                        Last Name
                                    </Label>
                                    <Input
                                        id="lastName"
                                        placeholder="Last name"
                                        value={formData.lastName}
                                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                                        className="bg-background"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="companyName" className="text-sm font-medium">
                                    Company Name
                                </Label>
                                <Input
                                    id="companyName"
                                    placeholder="Company name"
                                    value={formData.companyName}
                                    onChange={(e) => handleInputChange("companyName", e.target.value)}
                                    className="bg-background"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-medium">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="you@company.com or youremail@.com"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange("email", e.target.value)}
                                    className="bg-background"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phoneNumber" className="text-sm font-medium">
                                    Phone Number
                                </Label>
                                <div className="flex">
                                    <Select defaultValue="+234">
                                        <SelectTrigger className="w-20 rounded-r-none border-r-0">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="+234">
                                                <div className="flex items-center gap-2">
                                                    <div className="h-4 w-6 rounded-sm bg-green-500 relative">
                                                        <div className="absolute left-0 top-0 h-full w-1/3 bg-green-500"></div>
                                                        <div className="absolute left-1/3 top-0 h-full w-1/3 bg-white"></div>
                                                        <div className="absolute right-0 top-0 h-full w-1/3 bg-green-600"></div>
                                                    </div>
                                                    +234
                                                </div>
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Input
                                        id="phoneNumber"
                                        placeholder="123 456 7890"
                                        value={formData.phoneNumber}
                                        onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                                        className="rounded-l-none bg-background"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-sm font-medium">
                                    Message
                                </Label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell us what we can help you with"
                                    value={formData.message}
                                    onChange={(e) => handleInputChange("message", e.target.value)}
                                    className="min-h-32 bg-background"
                                />
                            </div>

                            <div className="flex items-start space-x-2">
                                <Checkbox
                                    id="privacy"
                                    checked={formData.agreeToPrivacy}
                                    onCheckedChange={(checked) => handleInputChange("agreeToPrivacy", checked as boolean)}
                                />
                                <Label htmlFor="privacy" className="text-sm inline  leading-relaxed">
                                    {"I'd like to receive more information about company. I understand and agree to the "}
                                    <a href="#" className="text-blue-600 hover:underline inline dark:text-blue-400">
                                        Privacy Policy
                                    </a>
                                </Label>
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                                disabled={!formData.agreeToPrivacy}
                            >
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

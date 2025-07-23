import { ContactFormData } from "@/lib/utils";
import { NextResponse } from "next/server";
import { Resend } from "resend";






export async function POST(req: Request) {
    const body = await req.json()
    const { firstName, lastName, companyName, visitorEmail, phoneNumber, message }: ContactFormData = body
    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
        console.error("Missing RESEND_API_KEY environment variable");
        return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }
    const resend = new Resend(resendApiKey)
    try {

        await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: process.env.COMPANY_EMAIL!,
            subject: 'New Contact Form Submission',
            text: `
                New message from contact form:

                Name: ${firstName} ${lastName}
                Email: ${visitorEmail}
                Phone: ${phoneNumber}
                ComponyName:${companyName}
                Message:
                ${message}
      `,
        });
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "failed to send the email" }, { status: 500 })


    }

}
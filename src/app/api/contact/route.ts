import { ContactFormData } from "@/lib/utils";
import { NextResponse } from "next/server";
import { Resend } from "resend";


const resend = new Resend(process.env.VITE_RESEND_API_KEY)


export async function POST(req: Request) {
    const body = await req.json()
    const { firstName, lastName, companyName, visitorEmail, phoneNumber, message }: ContactFormData = body
    try {

        await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>', // or your verified domain later
            to: process.env.VITE_COMPANY_EMAIL!,
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
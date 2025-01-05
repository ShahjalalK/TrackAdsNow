import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request : Request) {
  try {
    const body = await request.json();

    if(!body.email && !body.message) return

    // Nodemailer transporter সেটআপ
    const transporter = nodemailer.createTransport({
      service: "gmail", // Gmail ব্যবহার করলে
      auth: {
        user: process.env.EMAIL_USER, // আপনার ইমেইল
        pass: process.env.EMAIL_PASS, // অ্যাপ পাসওয়ার্ড
      },
    });

    // মেইল অপশন সেটআপ
    const mailOptions = {
      from: body.email, // ফর্মের ইমেইল
      to: process.env.EMAIL_USER, // যেই ইমেইলে মেসেজ পাঠাতে চান
      subject: ` ${body.subject ? body.subject : `New Message from ${body.name}` } `,
      html: ` <p>Client Name : <span style="color : 'blue'"> ${body.name}</span> </p> <p>Client Email : ${body.email} </p><p><b>Client Message :-</b> ${body.message}</p> `,
       
    };

    // মেইল পাঠানো
    const info = await transporter.sendMail(mailOptions);

    return  NextResponse.json({message : "Message Is SuccessFull Send", status : 200})
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email", status:500 })
  }
}
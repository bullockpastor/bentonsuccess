import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, label, address, artist, projectDetails, anrManager, budget, deadline } = body;

  try {
    await transporter.sendMail({
      from: `"Bent On Success" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone / Call Back Number:</strong> ${phone || "N/A"}</p>
        <p><strong>Label / Production Company:</strong> ${label || "N/A"}</p>
        <p><strong>Address:</strong> ${address || "N/A"}</p>
        <p><strong>Artist / Group:</strong> ${artist || "N/A"}</p>
        <p><strong>A&R / Manager Details:</strong> ${anrManager || "N/A"}</p>
        <p><strong>Project Details:</strong> ${projectDetails || "N/A"}</p>
        <p><strong>Budget:</strong> ${budget || "N/A"}</p>
        <p><strong>Deadline:</strong> ${deadline || "N/A"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}

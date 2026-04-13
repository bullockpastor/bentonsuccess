import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, label, address, artist, projectDetails, anrManager, budget, deadline } = body;

  try {
    await resend.emails.send({
      from: "Bent On Success <onboarding@resend.dev>",
      to: "info@bentonsuccess.com",
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
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
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, company, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // Configure SMTP transport
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '465');
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    // Fallback for development if credentials are not yet defined in environment variables
    if (!smtpUser || !smtpPass) {
      console.warn("SMTP credentials not configured. Printing email to console instead:");
      console.log(`=========================================`);
      console.log(`To: dheerajkumar8179@gmail.com`);
      console.log(`Subject: New Enquiry Recieved from my Website`);
      console.log(`From: ${name} <${email}>`);
      console.log(`Company: ${company || 'N/A'}`);
      console.log(`Phone: ${phone || 'N/A'}`);
      console.log(`Message: ${message}`);
      console.log(`=========================================`);
      
      return NextResponse.json({ 
        message: "Message received (dev simulation mode. Configure SMTP_USER and SMTP_PASS env variables to send actual emails)." 
      }, { status: 200 });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for port 465, false for 587 / other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"${name}" <${smtpUser}>`, // Send from authenticated user to prevent spoofing blockers
      replyTo: email,
      to: 'dheerajkumar8179@gmail.com',
      subject: 'New Enquiry Recieved from my Website',
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send email", error: error.message }, { status: 500 });
  }
}

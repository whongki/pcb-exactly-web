"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendQuote(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = (formData.get("company") as string) || "N/A";
  const phone = (formData.get("phone") as string) || "N/A";
  const pcbType = (formData.get("pcbType") as string) || "N/A";
  const layers = (formData.get("layers") as string) || "N/A";
  const quantity = (formData.get("quantity") as string) || "N/A";
  const boardSize = (formData.get("boardSize") as string) || "N/A";
  const requirements = (formData.get("requirements") as string) || "N/A";

  if (!name || !email) {
    return { success: false, error: "Name and email are required." };
  }

  try {
    await resend.emails.send({
      from: "PCB Exactly <onboarding@resend.dev>",
      to: "pcbexactly@gmail.com",
      replyTo: email,
      subject: `New PCB Quote Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0f172a, #1e3a5f); padding: 24px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">New PCB Quote Request</h1>
          </div>
          <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 140px;">Name</td>
                <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Email</td>
                <td style="padding: 8px 0; color: #0f172a; font-size: 14px;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Company</td>
                <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${company}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Phone / WhatsApp</td>
                <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${phone}</td>
              </tr>
              <tr><td colspan="2" style="border-top: 1px solid #e2e8f0; padding-top: 12px;"></td></tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 14px;">PCB Type</td>
                <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${pcbType}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Layers</td>
                <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${layers}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Quantity</td>
                <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${quantity}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Board Size</td>
                <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${boardSize}</td>
              </tr>
              <tr><td colspan="2" style="border-top: 1px solid #e2e8f0; padding-top: 12px;"></td></tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 14px; vertical-align: top;">Requirements</td>
                <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${requirements}</td>
              </tr>
            </table>
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch {
    return {
      success: false,
      error: "Failed to send email. Please contact us directly at pcbexactly@gmail.com",
    };
  }
}

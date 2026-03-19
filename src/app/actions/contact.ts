"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactState = {
  success: boolean;
  error: string | null;
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const message = formData.get("message") as string;

  if (!name || !email) {
    return { success: false, error: "Name and email are required." };
  }

  try {
    await resend.emails.send({
      from: "Reifio Form <onboarding@resend.dev>",
      to: "hello@reifio.com",
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` at ${company}` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : null,
        message ? `\nMessage:\n${message}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return { success: true, error: null };
  } catch {
    return { success: false, error: "Something went wrong. Try emailing hello@reifio.com directly." };
  }
}

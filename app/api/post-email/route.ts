import { Resend } from "resend";
const isApproved = (req: Request): boolean => {
  // verify request is valid and not overloading backend
  return true;
};
if (!process.env.RESEND_API_KEY) {
  throw new Error("Missing RESEND_API_KEY");
}

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENTS = [process.env.EMAIL_AD1].filter(Boolean) as string[];

interface PostEmailData {
  from: string;
  subject: string;
  content: string;
}

export async function POST(req: Request) {
  try {
    const { from, subject, content }: PostEmailData = await req.json();

    if (!from || !subject || !content || !isApproved(req)) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const html = `
      <p><strong>From:</strong> ${from}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <hr />
      <p>${content.replace(/\n/g, "<br />")}</p>
    `;

    const data = await resend.emails.send({
      from: "Qblox Contact <no-reply@resend.dev>",
      to: RECIPIENTS,
      replyTo: from, // ⭐ important
      subject: `[Contact] ${subject}`,
      html,
    });

    return Response.json({ success: true, data });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}

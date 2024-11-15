import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  try {
    // First email - to the specified recipient
    const data1 = await resend.emails.send({
      from: "submission2025@artpublicspace.de",
      to: "submission2025@artpublicspace.de",
      subject: "New Form Submission",
      html: `<p>Name entered: ${name}<br>Email: ${email}</p>`,
    });

    // Second email - to the email provided in the form
    const data2 = await resend.emails.send({
      from: "submission2025@artpublicspace.de",
      to: email,
      subject: "Thank you for your submission",
      html: `<p>Dear ${name},<br><br>Thank you for your submission. We have received your information. Please click here for the <a href="https://forms.gle/1DfYWpqGaLc4DXup7">Submission Form</a>.<br><br>Best regards,<br>Your Team</p>`,
    });

    return res
      .status(200)
      .json({ success: true, data: { recipient: data1, submitter: data2 } });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({
      success: false,
      error: "An error occurred while sending the email",
    });
  }
}

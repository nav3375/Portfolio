import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
      user: process.env.BREVO_SMTP_USER, // = 9331a0001@smtp-brevo.com
      pass: process.env.BREVO_SMTP_PASS, // = your SMTP key
    },
  });

  const mailOptions = {
    from: `"Navpreet Singh" <navpreetsingh@iammanpreetsingh.com>`, // ✅ MUST be your verified Brevo sender
    to: "navpreets425@gmail.com", // ✅ You’ll receive this
    replyTo: email, // ✅ Replies go to form sender
    subject: "Important - Portfolio Submission Form Received",
    text: `You received a submission form from your website:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({ message: "Failed to send email", error });
  }
}

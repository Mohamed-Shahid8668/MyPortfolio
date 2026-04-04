const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Email Transporter (use ENV in production)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // your gmail
    pass: process.env.EMAIL_PASS  // app password
  }
});

// 📩 Contact Route (EMAIL ONLY)
app.post("/contact", async (req, res) => {
  console.log("BODY:", req.body);

  const { name, email, subject, message } = req.body;

  // ✅ Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).send("All fields are required");
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // receive email
      subject: `New Message: ${subject}`,
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b> ${message}</p>
      `
    });

    console.log("✅ Email Sent");
    res.send("✅ Message sent successfully!");
  } catch (error) {
    console.error("❌ EMAIL ERROR:", error);
    res.status(500).send("Email failed");
  }
});

// Test route
app.get("/", (req, res) => {
  res.send("API Running...");
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
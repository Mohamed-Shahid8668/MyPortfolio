const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 🔐 Set SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// 📩 Contact Route
app.post("/contact", async (req, res) => {
  console.log("BODY:", req.body);

  const { name, email, subject, message } = req.body;

  // ✅ Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).send("All fields are required");
  }

  const msg = {
    to: process.env.EMAIL_USER, // your email
    from: process.env.EMAIL_USER,
    name: "Mohamed Sahid", // MUST be verified in SendGrid
    subject: `New Message: ${subject}`,
    html: `
  <div style="font-family: Arial; padding: 10px;">
    <h2 style="color:#2563eb;">📩 New Contact Message</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <hr/>
    <p>${message}</p>
  </div>
    `,
  };

  try {
    await sgMail.send(msg);
    console.log("✅ Email Sent via SendGrid");
    res.send("✅ Message sent successfully!");
  } catch (error) {
  console.error("SENDGRID FULL ERROR:", error.response?.body || error.message);
  res.status(500).send(
    error.response?.body?.errors?.[0]?.message || error.message
  );
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
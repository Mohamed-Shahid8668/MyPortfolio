const express = require("express");
const cors = require("cors");
const db = require("./db"); // ✅ import DB

const app = express();
app.use(cors());
app.use(express.json());

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sahidhussain1703@gmail.com",
    pass: "xidnyewmpmqnsoyv"
  }
});

app.post("/contact", (req, res) => {
  const { name, email, subject, message } = req.body;

  // Save to DB
  const sql = `
    INSERT INTO contact_messages (name, email, subject, message)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [name, email, subject, message], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("DB Error");
    }

    // ✉️ Send Email
    const mailOptions = {
      from: email,
      to: "sahidhussain1703@gmail.com", // YOUR EMAIL
      subject: `New Message: ${subject}`,
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b> ${message}</p>
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Email Error:", error);
      } else {
        console.log("Email Sent:", info.response);
      }
    });

    res.send("✅ Message saved & email sent!");
  });
});

// API Route
app.post("/contact", (req, res) => {
  const { name, email, subject, message } = req.body;

  // 🔥 Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).send("All fields are required");
  }

  const sql = `
    INSERT INTO contact_messages (name, email, subject, message)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [name, email, subject, message], (err, result) => {
    if (err) {
      console.error("❌ Insert Error:", err);
      return res.status(500).send("Error saving message");
    }

    res.send("✅ Message saved successfully");
  });
});

// Test route (optional)
app.get("/", (req, res) => {
  res.send("API Running...");
});

app.get("/messages", (req, res) => {
  const sql = "SELECT * FROM contact_messages ORDER BY created_at DESC";

  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error fetching messages");
    }
    res.json(result);
  });
});

app.delete("/messages/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM contact_messages WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error deleting message");
    }
    res.send("Message deleted");
  });
});

app.get("/messages", (req, res) => {
  const sql = "SELECT * FROM contact_messages ORDER BY created_at DESC";

  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error fetching messages");
    }
    res.json(result);
  });
});

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
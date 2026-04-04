import React, { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCopy,
} from "react-icons/fa";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied: " + text);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("https://portfolio-backend-1dxj.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.text();
    setSuccess("✅ Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  } catch (error) {
    setSuccess("❌ Failed to send message");
  }
};

  return (
    <section id="contact" className="contact">

      {/* CONTACT CARD */}
      <div className="contact-card">
        <h2>Contact Information</h2>

        <div className="contact-item">
          <FaEnvelope className="icon" />
          <div className="contact-text">
            <p>Email</p>
            <a href="mailto:sahidhussain1703@gmail.com">
              sahidhussain1703@gmail.com
            </a>
          </div>
          <FaCopy
            className="copy-icon"
            onClick={() => copyText("sahidhussain1703@gmail.com")}
          />
        </div>

        <hr />

        <div className="contact-item">
          <FaGithub className="icon" />
          <div className="contact-text">
            <p>GitHub</p>
            <a href="https://github.com/Mohamed-Shahid8668" target="_blank" rel="noopener noreferrer" >
              github.com/Mohamed-Shahid8668
            </a>
          </div>
        </div>

        <hr />

        <div className="contact-item">
          <FaLinkedin className="icon" />
          <div className="contact-text">
            <p>LinkedIn</p>
            <a href="https://www.linkedin.com/in/shahid-m-mohamed8668" target="_blank" rel="noopener noreferrer"  >
              linkedin.com/in/shahid-m-mohamed8668
            </a>
          </div>
        </div>

        <hr />

        <div className="contact-item">
          <FaInstagram className="icon" />
          <div className="contact-text">
            <p>Instagram</p>
            <a href="https://www.instagram.com/shahidmohamed8668/" target="_blank" rel="noopener noreferrer">
              instagram.com/shahidmohamed8668
            </a>
          </div>
        </div>
      </div>

      {/* CONTACT FORM */}
      <div className="contact-form">
        <h2>Send a Message</h2>
        <p>I’ll reply within 24 hours.</p>

        {success && <div className="success-msg">{success}</div>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

    </section>
  );
}

export default Contact;
import React, { useState } from "react";
import { MapPin, Mail, Phone, Globe, Facebook, Instagram, Twitter } from "lucide-react";
import FAQPage from "../components/Faq";
import "../styles/Contact.css";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("http://localhost:5000/send-mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      setStatus("success");
      setForm({ name: "", company: "", phone: "", email: "", subject: "", message: "" });
    } else {
      setStatus("error");
    }
  }

  return (
    <div className="page-container">

      {/* HERO */}
      <section className="he-section">
        <div className="contact-overlay">
          <h1>Contact Us</h1>
          <p>We're here to help you find your perfect property, one that fits your dreams and your budget.</p>
        </div>
      </section>

      {/* CONTACT BOX */}
      <section className="contact-box">
        <div className="contactInfoCon">
          <div className="contactBoxItem">
            <h2>Get in touch</h2>
            <p>If you have questions about buying, selling, or renting, we're ready to help.</p>
          </div>
        
          <div className="contactInfo">
            <MapPin className="icon" size={50}/>
            <div>
              <h3>Head Office</h3>
              <p>123 Property Lane, New York, USA</p>
            </div>
          </div>

          <div className="contactInfo">
            <Mail className="icon" size={50}/>
            <div>
              <h3>Email Us</h3>
              <p>info@realestateco.com</p>
            </div>
          </div>

          <div className="contactInfo">
            <Phone className="icon" size={50}/>
            <div>
              <h3>Call Us</h3>
              <p>+1 555 123 4567</p>
            </div>
          </div>

          <div className="socials">
            <h3>Follow us</h3>
            <div className="social-icons">
              <a href=""> <Globe size={30}/></a>
              <a href=""> <Facebook size={30}/></a>
              <a href=""><Instagram size={30}/></a>
              <a href=""><Twitter size={30}/></a>
            </div>
          </div>
        </div>
   

        {/* FORM */}
        <form className="contactForm" onSubmit={handleSubmit}>
          <div className="two-col">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
            <input name="company" value={form.company} onChange={handleChange} placeholder="Company" />
          </div>

          <div className="two-col">
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" required />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
          </div>

          <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" required />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required />

          <button type="submit">
            {status === "sending" ? "Sending..." : "Send"}
          </button>

          {status === "success" && <p className="success-msg">Message sent successfully!</p>}
          {status === "error" && <p className="error-msg">Failed to send message.</p>}
        </form>
      </section>

      {/* MAP */}
      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?..."
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        />
      </section>

      <FAQPage />
    </div>
  );
}

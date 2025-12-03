import React, { useState } from "react";
import "../styles/ContactAgent.css";

const ContactAgent = ({ propertyName }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can send the message to Supabase, email, or API
    console.log({
      property: propertyName,
      name,
      email,
      message,
    });

    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-agent-container">
      <h2>Contact Agent</h2>
      {submitted && <p className="success-msg">Message sent successfully!</p>}
      <form onSubmit={handleSubmit} className="contact-agent-form">
        <label>
          Name:
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Message:
          <textarea
            value={message}
            required
            placeholder={`Hi, I am interested in ${propertyName}`}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </label>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactAgent;

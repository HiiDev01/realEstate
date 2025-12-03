import React, { useState } from "react";
import "../styles/Faq.css";

const faqData = [
  {
    question: "How do I start the process of buying a property?",
    answer:
      "You can start by contacting our agents, browsing available listings, or scheduling a consultation so we can understand your needs and budget.",
  },
  {
    question: "Do you offer property valuation services?",
    answer:
      "Yes. Our experts provide professional valuation services to help you understand a property's market value before buying or selling.",
  },
  {
    question: "Is it possible to get assistance with mortgage applications?",
    answer:
      "Absolutely. We work with multiple financial institutions and can guide you through mortgage pre‑approval and application.",
  },
  {
    question: "Can you help manage my rental property?",
    answer:
      "Yes, we offer full property management services including tenant screening, rent collection, and maintenance coordination.",
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <div className="faq-left">
        <span className="tag">Frequently asked questions</span>
        <h1>
          Real Estate <span className="highlight">FAQs</span>
        </h1>
        <p>
          Find answers to the most common questions about buying, selling, or
          renting properties. We're here to guide you every step of the way.
        </p>
      </div>

      <div className="faq-right">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-card ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-header">
              <h3>{item.question}</h3>
              <div className={`arrow ${activeIndex === index ? "rotate" : ""}`}>
                ▼
              </div>
            </div>

            {activeIndex === index && (
              <p className="faq-answer">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

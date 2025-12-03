import React from "react";
import {  Home,  Activity,  BarChart3,  Users,  Cog,} from "lucide-react";
import "../styles/Service.css";

const services = [
  {
    icon: <Home size={32} />,
    title: "Estate Development",
    text: "Developing modern residential and commercial estates that redefine comfort and luxury.",
  },
  {
    icon: <Activity size={32} />,
    title: "Property Valuation & Consulting",
    text: "Expert guidance to help clients make informed real estate decisions.",
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Sales of Luxury Homes & Lands",
    text: "Connecting clients to premium properties that suit their lifestyle and investment goals.",
  },
  {
    icon: <Users size={32} />,
    title: "Investment Advisory",
    text: "Tailored real estate investment opportunities with guaranteed returns.",
  },
  {
    icon: <Cog size={32} />,
    title: "Property Management",
    text: "Ensuring your assets are well-maintained and yield maximum value.",
  },
];

const Service = () => {
  return (
    <section className="services-container">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">
        We provide a wide range of real estate services designed to help you
        achieve your property goals with confidence and ease.
      </p>

      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </div>
        ))}

        {/* Special CTA Column */}
        <div className="service-cta">
          <h3>Ready to Work With Us?</h3>
          <p>
            Let’s help you find the perfect real estate solution or start your
            investment journey today.
          </p>
          <button className="cta-btn">Get in Touch</button>
        </div>
      </div>
    </section>
  );
};

export default Service;

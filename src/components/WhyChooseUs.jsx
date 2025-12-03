import React from "react";
import {ShieldCheck,Building2,Users,Smile,BadgeDollarSign,PhoneCall,} from "lucide-react";
import "../styles/WhyChooseUs.css";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <ShieldCheck size={35} />,
      title: "Trusted & Secure",
      text: "We provide reliable services with full transparency.",
    },
    {
      icon: <Building2 size={35} />,
      title: "Wide Range of Properties",
      text: "From luxury villas to affordable apartments, we have it all.",
    },
    {
      icon: <Users size={35} />,
      title: "Expert Agents",
      text: "Our experienced agents are always ready to guide you.",
    },
    {
      icon: <Smile size={35} />,
      title: "Customer Satisfaction",
      text: "We prioritize your happiness and long-term investment.",
    },
    {
      icon: <BadgeDollarSign size={35} />,
      title: "Best Market Value",
      text: "Get the best deals with high ROI guaranteed.",
    },
    {
      icon: <PhoneCall size={35} />,
      title: "24/7 Support",
      text: "We are available anytime you need assistance.",
    },
  ];

  return (
    <section className="whyChooseSection">
      <h2>Why Choose Us</h2>
      <p className="whySubText">
        We make property investment simple, transparent, and rewarding.
      </p>

      <div className="whyGrid">
        {features.map((item, index) => (
          <div className="whyCard" key={index}>
            <div className="whyIcon">{item.icon}</div>
            <div className="whyIconDet">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;

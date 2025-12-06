import React from "react";
import "../styles/About.css";
import bg3 from '../assets/bg3.jpg'

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="AboutHero">
        <h1 >About US</h1>
      </div>
      

      <section className="about-section">
        <div className="about-left">
          <button className="tagSpan">Who We Are</button>
          <p>
            UrbanHaven Homes is committed to delivering premium real estate
            services, offering our clients trusted investment opportunities
            across prime locations.
          </p>

          <button className="tagSpan">Our Mission</button>
          <p>
            To make property ownership seamless by providing transparent,
            innovative, and customer-first solutions that build wealth and
            security for generations.
          </p>
        </div>

        <div className="about-right">
          <img
            src={bg3}
            alt="luxury-home"
            className="about-img"
          />
        </div>
      </section>

      
      <section className="about-section reverse">
        <div className="about-right">
          <img
            src={bg3}
            alt="luxury-home"
            className="about-img"
          />
        </div>

        <div className="about-left">
          <button className="tagSpan">Our Vision</button>
          <p>
            To be the most trusted real estate partner in Africa, known for
            transforming lives through innovative housing solutions and
            sustainable communities.
          </p>

          <button className="tagSpan">Our Values</button>
          <ul className="values-list">
            <li><strong>Integrity –</strong> We uphold honesty and transparency in every transaction.</li>
            <li><strong>Excellence –</strong> We strive for superior quality in our projects.</li>
            <li><strong>Innovation –</strong> We embrace modern solutions in property development.</li>
            <li><strong>Customer-Centricity –</strong> We prioritize client satisfaction.</li>
            <li><strong>Value Creation –</strong> We focus on building assets that appreciate over time.</li>
          </ul>
        </div>
      </section>

      {/* MD SECTION */}
      <section className="md-section">
        <div className="md-card">
          <img src={bg3} alt="Managing Director" className="md-img" />
          <div className="md-tag">
            <p>Dr. Hisaac Brown</p>
            <span>Managing Director</span>
          </div>
        </div>

        <div className="md-text">
          <h2>Meet Our Visionary MD</h2>
          <p>
            With over 20 years of experience in real estate development, John Doe
            has built a company that prioritizes innovation, trust, and
            excellence. His vision is to redefine modern living and create
            sustainable communities for the future.
          </p>

          <blockquote>“Building homes, creating dreams.”</blockquote>

          <div className="md-buttons">
            <a href="#" className="btn md-linkedin">Connect on LinkedIn</a>
            <a href="#" className="btn md-read">Read More</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;

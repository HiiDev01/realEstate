import React from "react";
import '../styles/Footer.css'
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from "lucide-react";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* CONTACT SECTION */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p>Office Address: Block A1-305/306, GOLDEN Shopping Complex,<br />
            general paint, Ajah, Lekki, Eti-Osa, Lagos</p>
          <p>Email: info@urbanhavenhomes.com</p>
          <p>Phone: +234 800 123 4567</p>
        </div>

        {/* UPTOWN MARKET LINKS */}
        <div className="footer-col">
          <h3>UrbanHaven</h3>
          <a href="#">Properties</a>
          <a href="#">Agents</a>
          <a href="#">Blog</a>
          <a href="#">About Us</a>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
          <a href="#">FAQ</a>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-col">
          <h3>Newsletter</h3>

          <input
            type="text"
            placeholder="Enter your name"
            className="footer-input"
          />

          <input
            type="email"
            placeholder="Enter your email"
            className="footer-input"
          />

          <button className="footer-btn">SUBSCRIBE</button>
        </div>

      </div>

      {/* SOCIAL + COPYRIGHT */}
      <div className="footer-bottom">
        <p>© 2025 UrbanHaven Homes Ltd. All rights reserved.</p>

        <div className="footer-social">
        <FacebookIcon size={20} />
        <TwitterIcon size={20} />
        <InstagramIcon size={20} />
        <LinkedinIcon size={20} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

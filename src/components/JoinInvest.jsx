import React from "react";
import { Users, ShoppingCart } from "lucide-react";
import "../styles/JoinInvest.css";
import bg from "../assets/bg3.jpg"; // <-- replace with your actual background

const JoinInvest = () => {
  return (
    <section
      className="joininvest-section"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="joininvest-wrapper">

        {/* CARD 1 */}
        <div className="joininvest-card">
          <div className="joininvest-icon"><Users size={26} /></div>
          <div>
            <h3>Join Our Community</h3>
            <p>
              Connect with like-minded investors and homeowners to discover the
              best opportunities.
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="joininvest-card">
          <div className="joininvest-icon"><ShoppingCart size={26} /></div>
          <div>
            <h3>Invest Smartly</h3>
            <p>
              Explore curated properties with high returns and low risks for your
              investment portfolio.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default JoinInvest;

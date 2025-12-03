import React from "react";
import "../styles/Categories.css";

const categories = [
  { title: "Townhome", count: "19 Properties", img: "/bg3.jpg", size: "wide" },
  { title: "Apartment", count: "25 Properties", img: "/bg3.jpg", size: "wide" },
  { title: "Duplex", count: "9 Properties", img: "/bg3.jpg", size: "small" },
  { title: "Mansion", count: "5 Properties", img: "/bg3.jpg", size: "small" },
  { title: "Villa", count: "12 Properties", img: "/bg3.jpg", size: "tall" },
];

const Categories = () => {
  return (
    <section className="categories-section">
      <h2 className="categories-title">Explore Categories</h2>

      <div className="categories-grid">
        {categories.map((cat, idx) => (
          <div className={`category-card ${cat.size}`} key={idx}>
            <img src={cat.img} alt={cat.title} />
            <div className="category-info">
              <h3>{cat.title}</h3>
              <p>{cat.count}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;

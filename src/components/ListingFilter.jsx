import React, { useState } from "react";
import "../styles/ListingFilter.css";

export default function ListingFilter({ onFilter }) {
  const [category, setCategory] = useState("All Categories");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    onFilter({ category, location });
  };

  return (
    <div className="listings-wrapper">


      <div className="search-container">
        <select
          className="category-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All Categories</option>
          <option>Apartment</option>
          <option>Bungalow</option>
          <option>Detached Duplex</option>
        </select>

        <input
          type="text"
          className="location-input"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Search by location..."
        />

        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}

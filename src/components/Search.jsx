import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Search.css";

const Search = () => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("Any Type");
  const [priceRange, setPriceRange] = useState("Any Price");

  const navigate = useNavigate();

  const handleSearch = () => {
    // Encode the search parameters in the URL
    const query = new URLSearchParams({
      location,
      propertyType,
      priceRange,
    }).toString();

    navigate(`/listing?${query}`); // Go to Listing page with query params
  };

  return (
    <div className="searchFilterContainer">
      <div className="filterItem">
        <label>Location</label>
        <input
          type="text"
          placeholder="e.g. 'Beverly Hills'"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className="filterItem">
        <label>Property Type</label>
        <select
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
        >
          <option>Any Type</option>
          <option>Apartment</option>
          <option>House</option>
          <option>Villa</option>
          <option>Office</option>
        </select>
      </div>

      <div className="filterItem">
        <label>Price Range</label>
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <option>Any Price</option>
          <option>0 - ₦50 Million</option>
          <option>₦50 Million - ₦100 Million</option>
          <option>₦100 Million - ₦500 Million</option>
          <option>₦500+ Million</option>
        </select>
      </div>

      <button className="searchBtn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;

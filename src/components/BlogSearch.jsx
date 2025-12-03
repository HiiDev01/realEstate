import React from "react";
import "../styles/BlogSearch.css";

const BlogSearch = ({ onSearch }) => {
  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Search categories"
        className="search-input"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default BlogSearch;

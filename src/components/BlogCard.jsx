import React from "react";
import "../styles/BlogCard.css";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blog/${blog.id}`}>
      <div className="blog-card">
        <img src={blog.image} alt="Blog cover" className="blog-img" />
  
        <div className="blog-meta">
          <span>{blog.author}</span>
          <span>•</span>
          <span>{blog.date}</span>
        </div>
  
        <h2 className="blog-title">{blog.title}</h2>
  
        <p className="blog-excerpt">{blog.excerpt}</p>
  
        <div className="blog-tags">
          {blog.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

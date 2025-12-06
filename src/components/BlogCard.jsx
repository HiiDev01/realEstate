import React from "react";
import "../styles/BlogCard.css";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <>
      <Link to={`/blog/${blog.id}`} className="blogLink">
        <div className="blog-card">
          <div className="blogCardImg">
            <img src={blog.images[0]} alt={blog.name} className="blog-img" />
          </div>
    
          <div className="blog-meta">
            <span>{blog.author}</span>
            <span>•</span>
            <span>{blog.date}</span>
          </div>
    
          <h2 className="blog-title">{blog.title}</h2>
          <p className="blog-para">
            {blog.content[0].length > 120 ? 
               blog.content[0].slice(0, 120) + "..." : 
               blog.content[0]
            }
          </p>
    
          <div className="blog-tags">
            {blog.tags.map((tag) => (
              <span key={tag} className="gat">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;

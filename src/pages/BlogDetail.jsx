import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../supabaseclient/SupabaseClient";
import "../styles/BlogDetail.css";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("id", id)
        .single(); // get single blog by id

      if (error) {
        console.error("Error fetching blog:", error);
      } else {
        setBlog(data);
      }
      setLoading(false);
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return (
      <div className="blog-detail-container">
        <h2>Blog Not Found</h2>
        <Link to="/" className="back-link">Go back</Link>
      </div>
    );
  }

  return (
    <div className="blog-detail-container">

      <div className="sgblognav">
        <Link to="/" className="back-link">Home</Link>/
        <Link to="/blog" className="back-link">Blog</Link>/
        <p>{blog.title}</p>
      </div>

      <img src={blog.images[0]} alt={blog.title} className="detail-img" />

      <h1 className="detail-title">{blog.title}</h1>

      <div className="detail-meta">
        <span>{blog.author}</span>
        <span>•</span>
        <span>{blog.date}</span>
      </div>

      <div className="detail-content">
        {blog.content.map((section, i) =>
          section.split("\n").map((line, j) => (
            <p key={`${i}-${j}`}>{line}</p>
          ))
        )}
      </div>

      <div className="detail-tags">
        {Array.isArray(blog.tags) && blog.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default BlogDetail;

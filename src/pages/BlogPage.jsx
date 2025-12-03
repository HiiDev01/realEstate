import React, { useEffect, useState } from "react";
import BlogSearch from "../components/BlogSearch";
import BlogCard from "../components/BlogCard";
import Pagination from "../components/Pagination";
import "../styles/BlogPage.css"
import { supabase } from "../supabaseclient/SupabaseClient";

const BlogPage = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  const [blogs, setBlogs] = useState([])

  const handleFetchBlog = async() =>{
    try {
    const {data, error} = await supabase
    .from("blogs")
    .select("*")
    if(error){
      throw new Error("can not fetch blogs")
    }
    setBlogs(data)
    } catch (error) {
      console.log('error fecting blogs')
    }
  }
  useEffect(()=>{
    handleFetchBlog()
  },[])

  // ----- SEARCH LOGIC -----
  const filteredBlogs = blogs.filter((blog) => {
    const text = search.toLowerCase();

    return (
        blog.title?.toLowerCase().includes(text) ||
        blog.author?.toLowerCase().includes(text) ||
        blog.category?.toLowerCase().includes(text) ||
        (Array.isArray(blog.tags) 
          ? blog.tags.some((tag) => tag.toLowerCase().includes(text))
          : blog.tags?.toLowerCase().includes(text))
      );
  });

  // ----- PAGINATION LOGIC -----
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  return (
    <>
      <div className="listings-wrapper">
        <h1>Our Blog</h1>
      </div>
      <div className="blog-container">
        <div>
          <div className="blog-left">
            {currentBlogs.length > 0 ? (
              currentBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
            ) : (
              <p>No matching posts found.</p>
            )}
            
          </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
        </div>
  
        <div className="blog-right">
          <BlogSearch onSearch={(value)=>{
            setSearch(value);
            setCurrentPage(1); 
          }} />
  
          <div className="categories">
            <h4>Categories</h4>
            <p>Real Estate</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;

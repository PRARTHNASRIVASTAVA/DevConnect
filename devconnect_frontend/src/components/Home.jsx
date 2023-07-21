import React, { useEffect, useState } from 'react';
import './HomePage.css'; // Make sure to create and adjust the path to your CSS file
import { Link } from 'react-router-dom';

const HomePage = () => {

  const [blogList, setBlogList] = useState([]);

  const fetchBlogsData = async () => {
    const res = await fetch('http://localhost:8000/blog/getall');
    const data = await res.json();  
    console.log(data);
    setBlogList(data);
  } 

  useEffect(() => {
    fetchBlogsData();
  }, []);

  const displayBlogs = () => {
    return blogList.map((blog) => (
      <div className="blog-post">
          <img
            src={'http://localhost:8000/'+blog.image}
            alt="Blog Post"
            className="blog-post-image"
          />
          <div className="blog-post-content">
            <h2 className="blog-post-title">{blog.title}</h2>
            <p className="blog-post-date">{new Date(blog.createdAt).toLocaleDateString()} {new Date(blog.createdAt).toLocaleTimeString()}</p>
            <p className="blog-post-description">
              {blog.description}
            </p>
            <Link to={"/viewblog/"+blog._id}>Read More</Link>
          </div>
        </div>
    ))
  }
  

  return (
    <div className="home-container">
      <header className="header">
       
      </header>

      <div className="hero-section">
        <h1>Welcome to Our Blog</h1>
        <p>Discover exciting articles and stories from our writers.</p>
        <a href="/viewblog">Explore Now</a>
      </div>

      <section className="featured-posts">
        {displayBlogs()}
      </section>

    

      <footer className="footer">
        {/* Footer content goes here */}
        <p>&copy; {new Date().getFullYear()} DevConnect. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

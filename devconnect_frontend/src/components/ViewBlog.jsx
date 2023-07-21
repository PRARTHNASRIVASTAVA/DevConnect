import React, { useEffect, useState } from 'react';
import './ViewBlogPage.css'; // Make sure to adju
import MDEditor from '@uiw/react-md-editor';
import { useParams } from 'react-router-dom';

const ViewBlogPage = () => {

  const { id } = useParams();
  const [blogDetails, setBlogDetails] = useState(null);

  const fetchBlogData = async () => {
    const res = await fetch('http://localhost:8000/blog/getbyid/' + id);
    const data = await res.json();
    console.log(data);
    setBlogDetails(data);
  }

  useEffect(() => {
    fetchBlogData();
  }, [])


  const displayBlogData = () => {
    if (blogDetails !== null) {
      return <div className='container'>
        <img className='img-fluid' src={'http://localhost:8000/' + blogDetails.image} />
        <h2>{blogDetails.title}</h2>
        <p>{blogDetails.description}</p>
        <div className="p-4">
          <MDEditor.Markdown source={blogDetails.data} />
        </div>
      </div>
    }
  }

  return (
    <div className="d-flex flex-wrap w-100 container view-blog-container">
      {displayBlogData()}
    </div>
  );
};

export default ViewBlogPage;

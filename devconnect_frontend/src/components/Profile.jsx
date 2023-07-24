import React from 'react';
import './BloggerProfilePage.css'; // Make sure to adjust the path to your CSS file

const BloggerProfilePage = () => {
  // Sample blogger profile data (replace with your actual data)
  const blogger = {
    name: "Prarthna Srivastava",
    username: "@prarthna4041",
    bio: "Learn at every step of life!",
    profileImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaCUyMGJsb2dpbmd8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60",
    followers: 1093,
    following: 980,
  };

  return (
    <div className="blogger-profile-container">
      <div className="blogger-profile-header">
        <img src={blogger.profileImage} alt="Blogger Profile" className="profile-image" />
        <h1 className="blogger-name">{blogger.name}</h1>
        <p className="blogger-username">{blogger.username}</p>
        <p className="blogger-bio">{blogger.bio}</p>
      </div>

      <div className="blogger-profile-stats">
        <p>{blogger.followers} Followers</p>
        <p>{blogger.following} Following</p>
      </div>
    </div>
  );
};

export default BloggerProfilePage;

import React from "react";
import { Link } from "react-router-dom";
import "../Components/css/Home.css"

const HomePage = ({ posts }) => {
  return (
    <div className="home-container">
      <h2>Latest Blog Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="post-card"> 
            <Link to={`/post/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

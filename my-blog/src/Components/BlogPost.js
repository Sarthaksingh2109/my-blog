
import React from "react";
import { Link, useParams } from "react-router-dom";
import "../Components/css/BlogPost.css"

const BlogPost = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find(post => post.id === parseInt(id));

  return (
    <div className="container">
      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <Link to="/">Go Back</Link>
        </div>
      ) : (
        <div>Post not found!</div>
      )}
    </div>
  );
};

export default BlogPost;

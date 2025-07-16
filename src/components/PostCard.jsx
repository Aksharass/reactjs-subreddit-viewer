import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div className="card">
      <h2 className="card-title">{post.title}</h2>
      {post.selftext_html && (
        <div
          className="card-body"
          dangerouslySetInnerHTML={{ __html: post.selftext_html }}
        />
      )}
      <a href={post.url} target="_blank" rel="noreferrer" className="card-link">
        View Post
      </a>
      <div className="card-footer">Score: {post.score}</div>
    </div>
  );
};

export default PostCard;

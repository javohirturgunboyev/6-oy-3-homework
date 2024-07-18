import React, { useState } from 'react';
import './SocialMediaPost.css';

function SocialMediaPost() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div className="post-container">
      <h2 className="post-title">Ijtimoiy Media Posti</h2>
      <p className="post-content">
        Bu ijtimoiy media posti misoli. Siz ushbu posti yoqtirishingiz yoki yoqtirmasligingiz mumkin.
      </p>
      <div className="post-actions">
        <button className="like-button" onClick={handleLike}>
          Like {likes}
        </button>
        <button className="dislike-button" onClick={handleDislike}>
          Dislike {dislikes}
        </button>
      </div>
    </div>
  );
}

export default SocialMediaPost;

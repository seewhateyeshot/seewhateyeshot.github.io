// src/components/ShareButtons.jsx
import React from 'react';
import './ShareButtons.css';

export default function ShareButtons({ url, title }) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="share-buttons">
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Twitter"
      >
        <i className="fab fa-twitter"></i>
      </a>

      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
      >
        <i className="fab fa-facebook-f"></i>
      </a>

      <a
        href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share by Email"
      >
        <i className="fas fa-envelope"></i>
      </a>
    </div>
  );
}
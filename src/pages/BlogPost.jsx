// src/pages/BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <div className="text-center mt-20 text-gray-500">Blog post not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-8">Posted on {post.date || 'unknown date'}</p>
      {post.content.split('\n\n').map((paragraph, idx) => (
        <p key={idx} className="mb-6 leading-7 text-lg text-gray-800">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
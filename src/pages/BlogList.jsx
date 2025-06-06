import React from 'react';
import { blogPosts } from '../data/blogPosts';
import { Link } from 'react-router-dom';
import './BlogList.css';

export default function BlogList() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <ul className="space-y-6">
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <Link
              to={`/blog/${post.slug}`}
              className="text-2xl font-semibold text-blue hover:underline"
            >
              <span className="blog-title underline hover:text-blue">
                {post.title}
              </span>
            </Link>
            <p className="text-gray-600 mt-1">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
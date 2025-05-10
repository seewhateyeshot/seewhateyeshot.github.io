import React, { useState } from 'react';

export default function ImageWithLoader({ src, alt, className = '', onClick }) {
  const [loaded, setLoaded] = useState(false);

  const testId = src.replace(/[^\w-]/g, '_');

  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-zinc-800"
          data-testid={`image-spinner-${testId}`}
        >
          <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        data-testid={`lazy-image-${testId}`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onClick={onClick}
        className={`transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      />
    </div>
  );
}
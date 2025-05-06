import React, { useState, useEffect, useRef } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import './PortraitReel.css';

export default function PortraitReel({ title, images, caption, orientation = 'portrait' }) {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const reelRef = useRef(null);
  const isLandscape = orientation === 'landscape';

  // useEffect(() => {
  //   const originalTheme = document.documentElement.getAttribute('data-theme');
  //   const metaTheme = document.querySelector('meta[name="theme-color"]');

  //   if (lightboxIndex >= 0) {
  //     document.documentElement.setAttribute('data-theme', 'dark');
  //   } else {
  //     document.documentElement.setAttribute('data-theme', originalTheme || 'light');
  //   }
  // }, [lightboxIndex]);

  return (
    <div className="portrait-reel-wrapper">
      <h2 className="portrait-reel-title">{title}</h2>
      <div className={`portrait-reel ${isLandscape ? 'landscape' : 'portrait'}`} ref={reelRef}>
        {images.map((src, index) => (
          <div
            key={index}
            className={`relative group inline-block flex-shrink-0 ${isLandscape ? 'w-64 sm:w-80' : 'w-36 sm:w-40'}`}
          >
            <div className="relative">
              <img
                src={src}
                alt={`portrait-${index}`}
                loading="lazy"
                className={`portrait-img w-full rounded object-cover cursor-pointer transition-opacity duration-300 group-hover:opacity-90 ${isLandscape ? 'h-auto aspect-[3/2]' : 'h-56 aspect-[2/3]'}`}
                onClick={() => setLightboxIndex(index)}
              />
              <button
                onClick={() => setLightboxIndex(index)}
                className="absolute cursor-pointer top-2 right-2 bg-black bg-opacity-20 text-white w-6 h-6 flex items-center justify-center rounded transition-opacity duration-300 opacity-70 md:opacity-0 md:group-hover:opacity-100"
                aria-label="View full screen"
              >
                ⛶
              </button>
            </div>
          </div>
        ))}
      </div>
      {caption && <p className="portrait-reel-caption mx-auto max-w-3xl px-4">{caption}</p>}

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={images.map(src => ({ src }))}
        plugins={[Zoom]}
      />
    </div>
  );
}
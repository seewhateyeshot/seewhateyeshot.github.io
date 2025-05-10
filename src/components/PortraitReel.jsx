import React, { useState, useEffect, useRef } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import './PortraitReel.css';
import ImageWithLoader from './ImageWithLoader';

export default function PortraitReel({ title, images, caption, orientation = 'portrait' }) {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const reelRef = useRef(null);
  const isLandscape = orientation === 'landscape';

  useEffect(() => {
    const el = reelRef.current;
    if (!el) return;

    let scrollAmount = 0;
    const maxScroll = el.scrollWidth - el.clientWidth;
    let direction = 1;
    let stopped = false;

    const scroll = () => {
      if (stopped) return;

      scrollAmount += direction * 3;

      if (scrollAmount >= maxScroll || scrollAmount <= 0) {
        direction *= -1;
      }

      el.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    };

    const interval = setInterval(scroll, 60);

    // Optional: pause when hovered
    const handleEnter = () => (stopped = true);
    const handleLeave = () => (stopped = false);

    el.addEventListener('mouseenter', handleEnter);
    el.addEventListener('mouseleave', handleLeave);

    return () => {
      clearInterval(interval);
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <div className="portrait-reel-wrapper">
      <h2 className="portrait-reel-title">{title}</h2>
      <div className="reel-band-wrapper py-4 px-0">

        <div className={`portrait-reel flex overflow-x-auto snap-x snap-mandatory scrollbar-hide touch-auto ${isLandscape ? 'landscape' : 'portrait'}`} ref={reelRef}>
          {images.map((src, index) => (
            <div
              key={index}
              className={`relative group inline-block flex-shrink-0 ${isLandscape ? 'w-64 sm:w-80' : 'w-36 sm:w-40'}`}
            >
              <div className="relative">
                <ImageWithLoader
                  src={src}
                  alt={`portrait-${index}`}
                  onClick={() => setLightboxIndex(index)}
                  className={`portrait-img w-full rounded object-cover cursor-pointer transition-opacity duration-300 group-hover:opacity-90 ${isLandscape ? 'h-auto aspect-[3/2]' : 'h-56 aspect-[2/3]'}`}
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
      </div>
      {caption && <p className="portrait-reel-caption mx-auto max-w-3xl">{caption}</p>}

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
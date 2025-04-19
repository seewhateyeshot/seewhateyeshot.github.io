import React, { useState, useRef, useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import './PortraitReel.css';

export default function PortraitReel({ title, images }) {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const reelRef = useRef(null);

  return (
    <div className="portrait-reel-wrapper">
      <h2 className="portrait-reel-title">{title}</h2>
      <div className="portrait-reel" ref={reelRef}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`portrait-${index}`}
            className="portrait-img"
            onClick={() => setLightboxIndex(index)}
          />
        ))}
      </div>

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
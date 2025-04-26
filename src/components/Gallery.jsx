import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export default function Gallery({ project }) {
  const { title, intro, imageCount, prefix } = project;
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const slides = Array.from({ length: imageCount }, (_, i) => {
    const filename = `${prefix}-${(i + 1).toString().padStart(2, '0')}.jpg`;
    return {
      src: `${import.meta.env.BASE_URL}images/${prefix}/${filename}`,
    };
  });

  return (
    <div className="photo-column">
      <h1>{title}</h1>
      <p className="intro">{intro}</p>

      <div className="gallery-column">
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide.src}
            alt={`Slide ${i + 1}`}
            loading="lazy"
            className="essay-img"
            onClick={() => setLightboxIndex(i)}
          />
        ))}
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        slides={slides}
        index={lightboxIndex}
      />
    </div>
  );
}
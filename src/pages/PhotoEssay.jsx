import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import ShareButtons from '../components/ShareButtons';
import essayContent from '../data/pattayaEssayBlocks';
import './PhotoEssay.css';


export default function PhotoEssay() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const images = [
    { src: './images/pattaya/pattaya-01.jpg' }, // cover image
    ...essayContent.filter(b => b.type === 'image').map(b => ({ src: b.src }))
  ];

  let imageCount = 1;

  return (

    <div className="photo-essay">
      <div className="photo-essay-header">
        <center>
          <h1 className="essay-title">Soi 6</h1>
          <p className="essay-subtitle">A documentary series from Pattaya, Thailand</p>
          <p className="essay-author">by Çağdaş</p>
          <div className="share-buttons" style={{ display: 'flex', justifyContent: 'center' }}>
            <ShareButtons
              url="https://seewhateyeshot.github.io/projects/pattaya"
              title="A Photo Essay on Pattaya’s Soi 6"
            />
          </div>
        </center>
        {/* optional share buttons */}
      </div>
      <div className="essay-image cover">
        <img src="./images/pattaya/pattaya-01.jpg" alt="cover" onClick={() => setLightboxIndex(0)} />
        <p className="image-caption">Start of a working day</p>
      </div>

      {
        essayContent.map((block, i) => {
          if (block.type === 'text') {
            return <p key={i} className="essay-text">{block.content}</p>;
          }
          if (block.type === 'image') {
            const currentIndex = imageCount;
            imageCount++;

            return (
              <div className="essay-image" key={i}>
                <img
                  src={block.src}
                  alt={block.alt || ''}
                  onClick={() => setLightboxIndex(currentIndex)}
                />
                {block.caption && <p className="image-caption">{block.caption}</p>}
              </div>
            );
          }
          return null;
        })
      }

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        slides={images}
        index={lightboxIndex}
      />
    </div >
  );
}
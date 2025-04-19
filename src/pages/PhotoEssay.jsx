import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import ShareButtons from '../components/ShareButtons';
import { useParams } from 'react-router-dom';
import pattayaEssayBlocks from '../data/pattayaEssayBlocks';
import sihanoukvilleEssayBlocks from '../data/sihanoukvilleEssayBlocks';
import './PhotoEssay.css';

export default function PhotoEssay() {
  const { id } = useParams();

  const projectMap = {
    pattaya: {
      title: 'Soi 6',
      subtitle: 'A documentary series from Pattaya, Thailand',
      cover: {
        src: './images/pattaya/pattaya-01.jpg',
        caption: 'Start of a working day',
      },
      essay: pattayaEssayBlocks,
      shareUrl: 'https://seewhateyeshot.github.io/projects/pattaya',
      shareTitle: 'A Photo Essay on Pattaya’s Soi 6',
    },
    sihanoukville: {
      title: 'Sihanoukville',
      subtitle: 'A documentary series from Cambodia',
      cover: {
        src: './images/sihanoukville/sihanoukville-01.jpg',
        caption: 'Morning in the new city',
      },
      essay: sihanoukvilleEssayBlocks,
      shareUrl: 'https://seewhateyeshot.github.io/projects/sihanoukville',
      shareTitle: 'A Photo Essay on Sihanoukville',
    },
  };

  const project = projectMap[id];
  const essayContent = project.essay;

  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const images = [
    { src: project.cover.src },
    ...essayContent.filter(b => b.type === 'image').map(b => ({ src: b.src }))
  ];

  let imageCount = 1;

  return (
    <div className="photo-essay">
      <div className="photo-essay-header">
        <center>
          <h1 className="essay-title">{project.title}</h1>
          <p className="essay-subtitle">{project.subtitle}</p>
          <p className="essay-author">by Çağdaş</p>
          <div className="share-buttons" style={{ display: 'flex', justifyContent: 'center' }}>
            <ShareButtons url={project.shareUrl} title={project.shareTitle} />
          </div>
        </center>
      </div>

      <div className="essay-image cover">
        <img
          src={project.cover.src}
          alt="cover"
          onClick={() => setLightboxIndex(0)}
        />
        <p className="image-caption">{project.cover.caption}</p>
      </div>

      {essayContent.map((block, i) => {
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

        if (block.type === 'component' && typeof block.render === 'function') {
          return <div key={i} className="essay-component">{block.render()}</div>;
        }

        return null;
      })}

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        slides={images}
        index={lightboxIndex}
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 2, // default is 2 — increase for deeper zoom
          zoomInMultiplier: 1.5,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
        }}
      />
    </div>
  );
}

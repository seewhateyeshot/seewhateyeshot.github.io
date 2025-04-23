import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import NotFound from "../components/NotFound";
import ShareButtons from '../components/ShareButtons';
import { useParams } from 'react-router-dom';
import bikingHomeEssayBlocks from '../data/bikingHomeEssayBlocks.js';
import soi6EssayBlocks from '../data/soi6EssayBlocks.jsx';
import sihanoukvilleEssayBlocks from '../data/sihanoukvilleEssayBlocks';
import songkranEssayBlocks from '../data/songkranEssayBlocks';
import './PhotoEssay.css';

export default function PhotoEssay() {
  const { id } = useParams();

  const projectMap = {
    biking_home: {
      title: 'Biking Home',
      subtitle: 'I cycled from Sweden to home in my parents across Europe.',
      cover: {
        src: './images/biking/biking.jpg',
        caption: 'August 2024.',
      },
      essay: bikingHomeEssayBlocks,
      shareUrl: 'https://cagdasraw.github.io/projects/biking_home',
      shareTitle: 'A Photo Essay on Pattaya’s Soi 6',
    },
    soi6: {
      title: 'Soi 6',
      subtitle: 'For seven weeks, I photographed a bar street in Pattaya, Thailand',
      cover: {
        src: './images/pattaya/soi6-01.jpg',
        caption: 'Start of a working day. June 2024.',
      },
      essay: soi6EssayBlocks,
      shareUrl: 'https://cagdasraw.github.io/projects/soi6',
      shareTitle: 'A Photo Essay on Pattaya’s Soi 6',
    },
    sihanoukville: {
      title: 'Sihanoukville',
      subtitle: 'One day in a Cambodian city in rapid transformation',
      cover: {
        src: './images/sihanoukville/sihanoukville-01.jpg',
        caption: 'Morning in the city.',
      },
      essay: sihanoukvilleEssayBlocks,
      shareUrl: 'https://cagdasraw.github.io/brief/sihanoukville',
      shareTitle: 'A Photo Series on Sihanoukville',
    },
    songkran: {
      title: 'Songkran',
      subtitle: 'Thailand\'s wettest day',
      cover: {
        src: './images/songkran/songkran-01.jpg',
        caption: 'Buckets of water and smiles.',
      },
      essay: songkranEssayBlocks,
      shareUrl: 'https://cagdasraw.github.io/brief/songkran',
      shareTitle: 'A Photo Series on Songkran',
    },
  };

  const project = projectMap[id];

  if (!project) {
    return (
      <NotFound
        title="404 – Project Not Found"
        message="Sorry, we couldn’t find the photo essay you’re looking for."
      />
    );
  }

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
          <h1 className="essay-title text-4xl font-bold mt-6 mb-2"
            data-testid="essay-title">
            {project.title}
          </h1>
          <p className="text-lg text-gray-700 italic">{project.subtitle}</p>
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

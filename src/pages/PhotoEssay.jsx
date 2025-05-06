import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import NotFound from "../components/NotFound";
import ShareButtons from '../components/ShareButtons';
import { useParams } from 'react-router-dom';
import bikingHomeEssayBlocks from '../data/bikingHomeEssayBlocks.js';
import soi6EssayBlocks from '../data/soi6EssayBlocks.jsx';
import samosEssayBlocks from '../data/samosEssayBlocks';
import sihanoukvilleEssayBlocks from '../data/sihanoukvilleEssayBlocks.jsx';
import songkranEssayBlocks from '../data/songkranEssayBlocks';
import './PhotoEssay.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

function ColoredTextBlock({ content, color = 'black' }) {
  return (
    <p style={{ color, padding: '1rem 0' }} className="essay-text">
      {content.split('\n').map((line, i) => (
        <span key={i}>
          {line}
          <br />
        </span>
      ))}
    </p>
  );
}

function EssayHeading({ id, text, setActiveId, collapsedSections, setCollapsedSections }) {
  const [ref, inView] = useInView({ threshold: 0.6 });

  useEffect(() => {
    if (inView) setActiveId(id);
  }, [inView]);

  return (
    <div id={id} className="relative">
      <div ref={ref} className="max-w-2xl mx-auto px-4 pt-10 -mb-2">
        <div className="flex cursor-pointer justify-between items-center"
          onClick={() => setCollapsedSections(prev => ({
            ...prev,
            [id]: !prev[id],
          }))}>
          <h2 className="text-2xl font-bold">{text}</h2>
          <button
            className="text-sm "

          >
            {collapsedSections[id] ? '▼' : '▲'}
          </button>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default function PhotoEssay() {
  const { id } = useParams();

  const projectMap = {
    biking_home: {
      title: 'Biking Home',
      subtitle: 'I cycled from Sweden to home in my parents across Europe.',
      cover: {
        src: '/images/biking/biking.jpg',
        caption: 'August 2024.',
      },
      published: false,
      essay: bikingHomeEssayBlocks,
      shareUrl: 'https://seewhateyeshot.github.io/projects/biking_home',
      shareTitle: 'A Photo Essay on Pattaya’s Soi 6',
    },
    soi6: {
      title: 'Soi 6 — ซอยหก',
      subtitle: 'For seven weeks, I photographed a bar street in Pattaya, Thailand',
      cover: {
        src: '/images/pattaya/soi6-01.jpg',
        caption: 'Start of a new working day, June 2024.',
      },
      published: false,
      publishedDate: 'Work in progress',
      essay: soi6EssayBlocks,
      shareUrl: 'https://seewhateyeshot.github.io/projects/soi6',
      shareTitle: 'A Photo Essay on Pattaya’s Soi 6',
      collapsible: true,
    },
    sihanoukville: {
      title: 'Sihanoukville',
      subtitle: 'One day in a Cambodian city in rapid transformation',
      cover: {
        src: '/images/sihanoukville/sihanoukville-01.jpg',
        caption: 'Morning in the city.',
      },
      published: true,
      publishedDate: 'Published on 6 May 2025',
      updatedDate: '',
      essay: sihanoukvilleEssayBlocks,
      shareUrl: 'https://seewhateyeshot.github.io/brief/sihanoukville',
      shareTitle: 'A Brief Photo Series on Sihanoukville',
    },
    songkran: {
      title: 'Songkran',
      subtitle: 'Thailand\'s wettest day',
      cover: {
        src: '/images/songkran/songkran-01.jpg',
        caption: 'Buckets of water and smiles.',
      },
      essay: songkranEssayBlocks,
      shareUrl: 'https://seewhateyeshot.github.io/brief/songkran',
      shareTitle: 'A Brief Photo Series on Songkran',
    },
    samos: {
      title: 'Samos',
      subtitle: 'Island',
      cover: {
        src: '/images/samos/samos-01.jpg',
        caption: 'Samos.',
      },
      essay: samosEssayBlocks,
      shareUrl: 'https://seewhateyeshot.github.io/brief/samos',
      shareTitle: 'A Brief Photo Series on Samos',
    },
  };

  const project = projectMap[id];

  const location = useLocation();

  useEffect(() => {
    if (!project) return;

    if (location.hash) {
      const id = location.hash.slice(1);
      // delay scroll to ensure DOM is ready
      const timeout = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50); // tweak if needed

      return () => clearTimeout(timeout);
    }
  }, [location.hash, project]);

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

  const [activeId, setActiveId] = useState(null);
  const [collapsedSections, setCollapsedSections] = useState({});

  const renderedEssayBlocks = essayContent.map((block, i) => {
    if (block.type === 'heading') {
      return {
        key: i,
        type: 'heading',
        node: (
          <EssayHeading
            key={i}
            id={block.id}
            text={block.text}
            setActiveId={setActiveId}
            collapsedSections={collapsedSections}
            setCollapsedSections={setCollapsedSections}
          />
        ),
        block
      };
    }
    else if (block.type === 'component' && typeof block.render === 'function') {
      // Call the render() here, always
      const node = block.render();
      return { key: i, type: 'component', node, collapsible: block.collapsible, les: block.les };
    }
    return { key: i, type: 'regular', block };
  });

  const tocItems = essayContent
    .filter(block => block.type === 'heading' && block.id && block.text)
    .map(({ id, text }) => ({ id, text }));

  let currentHeadingId = null;

  //{/* comment out grid lg:grid-cols-[14rem_1fr] */}
  return (

    < div className="photo-essay  w-full max-w-none mx-auto mt-10" data-testid="photo-essay" >
      {/* Desktop TOC */}
      {/* < nav className="sticky toc-nav top-10 w-64 self-start px-4 text-sm text-gray-600 dark:text-gray-300" >
        <ul className="space-y-2">
          {tocItems.map(item => (
            <li key={item.id}>
              <button
                onClick={() => {
                  const el = document.getElementById(item.id);
                  if (el) {
                    const yOffset = -20; // adjust this value as needed
                    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className="cursor-pointer text-left hover:underline"
              >
                <span
                  className={`cursor-pointer hover:underline ${activeId === item.id ? 'text-black dark:text-white font-bold underline decoration-1 underline-offset-4' : ''
                    }`}
                >
                  {item.text}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav > */}

      <main className="max-w-5xl w-full min-h-screen">
        <div className="photo-essay-header">
          <center>
            <h1 className="essay-title text-4xl font-bold mb-2 dark:text-white"
              data-testid="essay-title">
              {project.title}
            </h1>
            <p className="text-lg text-gray-700 italic dark:text-gray-300">{project.subtitle}</p>
            <p className="essay-author text-gray-700 dark:text-white">by Çağdaş</p>
            {project.published ? (
              <p className="essay-published text-sm text-gray-400">
                {project.publishedDate}
              </p>
            ) : (
              <p className="essay-published text-sm text-red-400">
                Work in progress
              </p>
            )}
            <div className="share-buttons" style={{ display: 'flex', justifyContent: 'center' }}>
              <ShareButtons url={project.shareUrl} title={project.shareTitle} />
            </div>
          </center>
        </div>

        <div className="flex justify-center px-4">
          <div className="max-w-5xl w-full relative">
            <img
              src={project.cover.src}
              alt="cover"
              className="w-full rounded essay-cover-image"
              data-testid="essay-cover-img"
              onClick={() => setLightboxIndex(0)}
            />
            <p className="image-caption project-cover-caption text-center italic text-gray-500 text-sm mt-2 dark:text-white">
              {project.cover.caption}
            </p>
          </div>
        </div>

        {
          renderedEssayBlocks.map(({ key, type, block, node, collapsible, les }) => {
            if (type === 'component') {
              const shouldCollapse = project.collapsible && currentHeadingId &&
                collapsedSections[currentHeadingId] && collapsible !== false;

              if (shouldCollapse) {
                return null;
              }

              return (
                <div key={key} className="essay-component">
                  {node}
                </div>
              );
            }

            if (block.type === 'heading') {
              currentHeadingId = block.id; // track latest heading

              return <div key={key} className="max-w-2xl mx-auto mb-6">{node}</div>;
            }


            if (block.type === 'text') {
              if (project.collapsible && currentHeadingId && collapsedSections[currentHeadingId]) {
                return null;
              }

              if (block.color) {
                return <ColoredTextBlock key={key} content={block.content} color={block.color} />;
              }
              return (
                <div key={key} className="max-w-2xl mx-auto px-4 dark:text-gray-200">
                  <p className="essay-text">{block.content}</p>
                </div>
              );
            }

            if (block.type === 'image') {
              const currentIndex = imageCount++;
              return (
                <div key={key} className="w-full flex justify-center px-4 mb-2">
                  <div className="max-w-5xl w-full">
                    <div className={`relative group ${block.orientation === 'portrait'
                      ? 'max-w-prose mx-auto'
                      : ''
                      }`}>
                      <img
                        src={block.src}
                        alt={block.alt || ''}
                        loading="lazy"
                        className={`w-full rounded cursor-pointer transition-opacity duration-300 group-hover:opacity-95 ${block.orientation === 'portrait'
                          ? 'aspect-[2/3] object-contain'
                          : 'aspect-[3/2] object-cover'
                          }`}
                        data-testid="essay-block-image"
                        onClick={() => setLightboxIndex(currentIndex)}
                      />
                      <button
                        onClick={() => setLightboxIndex(currentIndex)}
                        className="absolute cursor-pointer top-2 right-2 bg-black bg-opacity-50 text-white w-5 h-5 flex items-center justify-center rounded transition-opacity duration-300 opacity-80 md:opacity-0 md:group-hover:opacity-100"
                        aria-label="View full screen"
                      >
                        ⛶
                      </button>
                    </div>
                    {block.caption && (
                      <p className="text-center italic text-gray-500 text-sm mt-2 dark:text-white">
                        {block.caption}
                      </p>
                    )}
                  </div>
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
          plugins={[Zoom]}
          zoom={{
            maxZoomPixelRatio: 2, // default is 2 — increase for deeper zoom
            zoomInMultiplier: 1.5,
            doubleTapDelay: 300,
            doubleClickDelay: 300,
          }}
        />
      </main >
      <br />

    </ div >
  );
}

import './PhotoEssay.css';
import projectData from '../data/projects.json';
import { useParams } from 'react-router-dom';
import Split from 'react-split';
import Gallery from '../components/Gallery';
import Essay from '../components/Essay';

export default function PhotoEssay() {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === id);

  if (!project) return <div>Project not found.</div>;

  return (
    <div className="photo-essay-wrapper">
      <Split
        className="split"
        sizes={[50, 50]}
        minSize={200}
        gutterSize={10}
      >
        <div className="photo-column">
          <Gallery project={project} />
        </div>
        <div className="essay-column">
          <Essay projectId={project.id} />
        </div>
      </Split>
    </div>
  );
}
import PhotoEssay from '../components/PhotoEssay';
import essayContent from '../data/pattayaEssayBlocks';

export default function Pattaya() {
  return (
    <PhotoEssay
      title="Soi 6"
      subtitle="A documentary series from Pattaya, Thailand"
      author="Çağdaş"
      url="https://seewhateyeshot.github.io/projects/pattaya"
      coverImage="./images/pattaya/pattaya-01.jpg"
      coverCaption="Start of a working day"
      essayBlocks={essayContent}
    />
  );
}
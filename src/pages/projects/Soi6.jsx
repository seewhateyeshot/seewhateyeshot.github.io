import PhotoEssay from '../components/PhotoEssay';
import essayContent from '../data/soi6EssayBlocks';

export default function Soi6() {
  return (
    <PhotoEssay
      title="Soi 6"
      subtitle="A documentary series from a street in Pattaya, Thailand"
      author="Çağdaş"
      url="https://cagdasraw.github.io/projects/soi6"
      coverImage="./images/pattaya/soi6-01.jpg"
      coverCaption="Start of a working day. June 2024."
      essayBlocks={essayContent}
    />
  );
}
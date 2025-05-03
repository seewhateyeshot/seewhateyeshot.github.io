import { Link } from 'react-router-dom';

export default function HomePageProjects() {
  const featured = [
    {
      id: '/projects/soi6',
      image: '/images/pattaya/portraits/soi6_portrait-01.jpg',
      title: 'Soi 6',
      caption: 'For seven weeks, I photographed a bar street in Pattaya, Thailand'
    },
    {
      id: '/projects/sihanoukville',
      image: '/images/sihanoukville/sihanoukville-07.jpg',
      title: 'Sihanoukville',
      caption: 'One day in a Cambodian city in rapid transformation'
    },
    {
      id: '/projects/songkran',
      image: '/images/songkran/songkran-01.jpg',
      objectPosition: 'object-[60%_center]', // custom positioning for this one
      title: 'Songkran',
      caption: 'I photographed Thailand\'s wettest day with a waterproof camera'
    },
    // Add more if needed
  ];

  return (
    <div className="overflow-x-auto flex space-x-6 px-4 py-2 snap-x snap-mandatory scroll-smooth">
      {featured.map((project, idx) => (
        <Link
          key={project.id || idx}
          to={project.id}
          className="relative w-full max-w-[420px] flex-shrink-0 snap-start overflow-hidden rounded shadow transition duration-300 hover:shadow-xl hover:shadow-black/40 group"
        >
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className={`w-full max-w-[420px] h-auto aspect-[2/3] object-cover transition duration-300 group-hover:brightness-90 ${project.objectPosition || 'object-center'}`}
            />
            <div className="absolute bottom-0 w-full bg-black/60 text-white px-3 py-2 h-[4.5rem] transition-all duration-300 group-hover:bg-black/80 group-hover:translate-y-[6px]">
              <h3 className="text-base font-semibold leading-tight">{project.title}</h3>
              <p className="text-sm opacity-90 leading-snug line-clamp-2">{project.caption}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
import HeroFlip from '../components/HeroFlip';
import HomePageProjects from '../components/HomePageProjects';

import './Home.css';

export default function Home() {
  return (
    <section className="hero px-4">
      <div className="hero-text text-sm sm:text-base mb-6">
        <p>Photography from roads less photographed</p>
      </div>

      <HomePageProjects />

      <section className="bio text-sm sm:text-base leading-relaxed max-w-prose mx-auto my-8">
        <p>
          I'm a street and documentary photographer loosely based in Stockholm.
          I explore life on the margins: red light alleys in Thailand,
          sleepy Cambodian towns turning into Chinese enclaves,
          forgotten corners of the Balkans.
          I’ve biked across Europe
          along the eastern edge of the Iron Curtain.
          I walk a lot,
          shoot too many photos,
          and edit excruciatingly slowly,
          aiming always to capture people the way they’d want to be remembered.
          At least in a way that we surely cannot forget them.
        </p>
        <br />
      </section>

      <HeroFlip />

      <p className="text-sm sm:text-base mt-4 text-center text-gray-700 italic">
        Tag along, I'm on a journey to be king of photographers!
      </p>
    </section >
  );
}
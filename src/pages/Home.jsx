import HeroFlip from '../components/HeroFlip';
import HomePageProjects from '../components/HomePageProjects';

import './Home.css';

export default function Home() {
  return (
    <section className="px-4">
      <div className="hero-text text-sm sm:text-base mb-6 text-center mt-8">
        <p className="text-gray-700 dark:text-white">
          Postcard-unfriendly photography from what the guidebook leaves out
        </p>
      </div>

      <div className="my-2">
        <HomePageProjects />
      </div>

      <section className="bio text-sm sm:text-base leading-relaxed max-w-prose mx-auto my-8">
        <p>
          I'm a street and documentary photographer loosely based in Stockholm.
          I explore life on the margins: red light alleys in Thailand,
          sleepy Cambodian towns turning into Chinese enclaves,
          obscure villages by ancient rivers,
          genocide memorials,
          poor gutters and,
          forgotten corners of the Balkans. <br />
          I’ve biked across Europe
          along the eastern edge of the Iron Curtain.
          I walk a lot,
          shoot way too many photos,
          and edit excruciatingly slowly,
          aiming always to capture people the way they’d want to be remembered... <br />
          <br />
          At least in a way that we surely cannot forget them.
        </p>
        <br />
      </section>

      <HeroFlip />

      <p className="hero text-sm sm:text-base mt-4 text-center text-gray-700 italic">
        Tag along, I'm on a journey to be king of photographers!
      </p>
    </section >
  );
}
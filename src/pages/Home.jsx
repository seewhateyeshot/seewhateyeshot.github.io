import './Home.css';

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p>Documentary photography from the roads less traveled</p>
      </div>
      <img
        src={`${import.meta.env.BASE_URL}hero.jpg`}
        alt="Main hero visual"
        className="hero-img"
      />
      <section className="bio">
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
        <p>Tag along, I'm on a journey to be king of photographers!</p>
      </section>
    </section>
  );
}
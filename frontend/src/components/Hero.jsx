import "./Hero.css";
import "./Button.css";

function Hero({ title, body }) {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-info">
        <h2 className="hero-header">{title}</h2>
        <p className="hero-body">{body}</p>
      </div>
      <img src="https://picsum.photos/300" className="portrait-img" />
      <a className="button-1" href="#projects">
        Gå till projekt
      </a>
    </section>
  );
}

export default Hero;

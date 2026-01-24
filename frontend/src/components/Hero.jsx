import "./Hero.css";
import "./Button.css";

function Hero({ title, body }) {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-info">
        <h2 className="hero-heading">{title}</h2>
        <p className="hero-body">{body}</p>
      </div>
      <img
        src="http://localhost:3000/images/portrait.jpg"
        className="portrait-img"
      />
      <a className="button-1" href="#projects">
        Gå till projekt
      </a>
    </section>
  );
}

export default Hero;

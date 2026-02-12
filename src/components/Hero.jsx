import "./Hero.css";
import "./Button.css";
import GlowingLink from "./GlowingLink";

function Hero({ title, body, linkText }) {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-info">
        <h2 className="hero-heading">{title}</h2>
        <p className="hero-body">{body}</p>
      </div>
      <img src="/images/portrait.jpg" className="portrait-img" />
      <GlowingLink linkText={linkText} />
    </section>
  );
}

export default Hero;

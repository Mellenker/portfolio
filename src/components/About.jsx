import "./About.css";

function About({ title, body }) {
  return (
    <section id="about" className="about-section">
      <div className="about-info">
        <h2 className="intro-header">{title}</h2>
        <p className="intro-body">{body}</p>
      </div>
      <img src="https://picsum.photos/300" className="portrait-img" />
    </section>
  );
}

export default About;

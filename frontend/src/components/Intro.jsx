import "./Intro.css";

function Intro({ title, body }) {
  return (
    <section id="intro" className="intro-section">
      <div className="intro-info">
        <h2 className="intro-header">{title}</h2>
        <p className="intro-body">{body}</p>
      </div>
      <img src="https://picsum.photos/300" className="portrait-img" />
    </section>
  );
}

export default Intro;

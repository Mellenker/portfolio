import "./Card.css";

function Card({ title, imgLink, description, link }) {
  return (
    <div className="card-container">
      <img src={imgLink} alt="Card Image" className="card-img" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="card-btn"
      >
        View Project
      </a>
    </div>
  );
}

export default Card;

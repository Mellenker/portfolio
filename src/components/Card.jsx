import "./Card.css";

function Card({ title, imgLink, description, link }) {
  return (
    <div className="card-container">
      <img src={imgLink} alt="Card Image" className="card-img" />
      <div className="card-info-container">
        <h3>{title}</h3>
        <p>{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="card-btn"
        >
          View Project
        </a>
      </div>
    </div>
  );
}

export default Card;

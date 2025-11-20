import "./Card.css";

function Card({ title, imgLink, description, githubLink, downloadLink }) {
  return (
    <div className="card-container">
      <img src={imgLink} alt="Card Image" className="card-img" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <div className="card-link-container">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link-btn"
          >
            View on GitHub
          </a>
        )}
        {downloadLink && (
          <a href={downloadLink} download className="card-link-btn">
            Download
          </a>
        )}
      </div>
    </div>
  );
}

export default Card;

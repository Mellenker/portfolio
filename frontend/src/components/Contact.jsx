import "./Contact.css";
import "./Button.css";

function Contact() {
  const email = "melker.stafverfeldt@hotmail.com";

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Kontakt</h2>
      <p>Om du vill kontakta mig kan du mejla mig på {email}</p>
      <a href="mailto:melker.stafverfeldt@hotmail.com" className="button-1">
        Mejla mig
      </a>
    </section>
  );
}

export default Contact;

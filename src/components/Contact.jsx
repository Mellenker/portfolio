import "./Contact.css";
import GlowingLink from "./GlowingLink";

function Contact() {
  const email = "melker.stafverfeldt@hotmail.com";

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Kontakt</h2>
      <p>Om du vill kontakta mig kan du mejla mig på {email}</p>
      <GlowingLink url={"mailto:" + email} linkText="Mejla mig" />
    </section>
  );
}

export default Contact;

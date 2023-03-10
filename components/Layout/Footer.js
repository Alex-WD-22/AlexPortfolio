import Link from "next/link";

function Footer() {
  return (
    <section>
    <div className="main-Container">
      <div className="footer-section">
        <div className="flex-row space-between">
          <div>
          <h1>Alexander Nerz</h1>
        </div>
        <div>
          <h1>Socials</h1>
        </div>
        </div>
        <div className="spacer-large border-bottom"></div>
        <div className="spacer-medium"></div>
        <div className="flex-center">
        <p>© {new Date().getFullYear()}. Made by Alexander Nerz</p>
       
        </div>
      </div>
      </div>
    </section>
  );
}

export default Footer;



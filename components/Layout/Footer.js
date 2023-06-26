import { GitHub, LinkedIn, LocalPostOffice } from "@mui/icons-material";
import Link from "next/link";

function Footer() {
  return (
    <section className="border-top theme-bg">
      <div className="main-Container">
        <div className="footer-section">
          <div className="flex-row space-between flex-wrap">
            <div>
              <Link href="/">
                <h5>Alexander Nerz</h5>
              </Link>
              <div className="spacer-small"></div>
              <p>
                A frontend-focused web developer: <br /> crafting impactful
                websites & applications for a better user experience
              </p>
              <div className="spacer-small"></div>
            </div>
            <div>
              <h5>Social</h5>
              <div className="spacer-small"></div>
              <span className="social-links">
                <a
                  href="https://github.com/Alex-WD-22"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHub sx={{ fontSize: 30 }} />
                </a>
                <a
                  href="https://www.linkedin.com/in/alexander-nerz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn sx={{ fontSize: 33 }} />
                </a>
                <a
                  href="mailto:anerz.com@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LocalPostOffice sx={{ fontSize: 33 }} />
                </a>
              </span>
            </div>
          </div>
          <div className="spacer-small"></div>
          <div className="flex-center">
            <h6>
              © {new Date().getFullYear()}. Made with 💙 by{" "}
              <a className="underline" href="https://anerz.com">
                Alexander Nerz
              </a>
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

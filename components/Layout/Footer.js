
import { GitHub, LinkedIn, LocalPostOffice } from "@mui/icons-material";


function Footer() {
  return (
    <section>
    <div className="main-Container">
      <div className="footer-section">
        <div className="flex-row space-between">
          <div>
          <h1>Alexander Nerz</h1>
          <div className="spacer-small"></div>
          <p>I love innovative, fast-paced, multidisciplinary teams.</p>
        </div>
        <div>
          <h1>Social</h1>
          <div className="spacer-small"></div>
          <span className="social-links">
          <a href="https://github.com/Alex-WD-22" target="_blank" rel="noopener noreferrer"><GitHub sx={{ fontSize: 30 }}/></a>
          <a href="https://www.linkedin.com/in/alexander-nerz" target="_blank" rel="noopener noreferrer"><LinkedIn sx={{ fontSize: 33 }}/></a>
          <a href="mailto:anerz.com@gmail.com" target="_blank" rel="noopener noreferrer"><LocalPostOffice sx={{ fontSize: 33 }}/></a>
          </span>
        </div>
        </div>
        <div className="spacer-medium border-bottom"></div>
        <div className="spacer-medium"></div>
        <div className="flex-center">
        <h6>© {new Date().getFullYear()}. Made by <a className="border-bottom" href="https://anerz.com">Alexander Nerz</a></h6>
       
        </div>
      </div>
      </div>
    </section>
  );
}

export default Footer;



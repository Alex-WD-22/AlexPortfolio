import { ChevronRightIcon } from "@chakra-ui/icons";
import { Button} from '@chakra-ui/react'

function Projects() {
  return (
    <section id="Projects" className="theme-bg-bottom">
      <div className="main-Container">
        <div className="section-Content About-Section">
          <div className="flex-center mobile-card">
            <h4>MY PROJECTS</h4>
            <div className="spacer-small"></div>
            <span className="design-heading"></span>
            <div className="spacer-medium"></div>
            <p>
              Here are my projects I've worked on. Do you have questions?
              <a
                href="mailto:anerz.com@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp;Email me
              </a>
              .
            </p>

            <div className="spacer-medium"></div>
            <div className="grid-container">
              <div className="project-container">
                <div className="image-container" data-title="Cynus.de">
                  <img
                    src="../../image/cynus_PNG.png"
                    alt="Cynus"
                    className="image"
                  />
                </div>
                <div className="overlay">
                  <div className="text-container">
                    <p>Start-Up Landing Page build with Next.js</p>
                    <Button rightIcon={<ChevronRightIcon />}>Visit Website </Button>
                  </div>
                </div>
              </div>

              <div className="project-container">
                <div className="image-container" data-title="Budget-Manager">
                  <img
                    src="../../image/Budget Manager.PNG"
                    alt="Cynus"
                    className="image"
                  />
                </div>
                <div className="overlay">
                  <div className="text-container">
                    <p>MERN Project build in React with Rest API</p>
                    <Button rightIcon={<ChevronRightIcon />}>Visit Website </Button>
                  </div>
                </div>
              </div>
              <div className="project-container">
                <div className="image-container" data-title="Pet Sharing">
                  <img
                    src="../../image/petsharing-demo.png"
                    alt="Cynus"
                    className="image"
                  />
                </div>
                <div className="overlay">
                  <div className="text-container">
                    <p>CRUD Project build with Express.js & Handelbars.js</p>
                    <Button rightIcon={<ChevronRightIcon />}>Visit Website </Button>
                  </div>
                </div>
              </div>
              <div className="project-container">
                <div className="image-container" data-title="Simply Math">
                  <img
                    src="../../image/Simply-Math_1.png"
                    alt="Cynus"
                    className="image"
                  />
                </div>
                <div className="overlay">
                  <div className="text-container">
                    
                    <p>OOP Project build with JavaScript, HTML and CSS</p>
                    <Button rightIcon={<ChevronRightIcon />}>Visit Website </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

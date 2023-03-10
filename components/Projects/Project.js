function Projects() {
  return (
    <section id="Projects">
      <div className="main-Container">
        <div className="section-Content About-Section">
          <div className="flex-center">
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
                    <h2>Title</h2>
                    <p>description</p>
                    <button>buttonLabel</button>
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
                    <h2>Title</h2>
                    <p>description</p>
                    <button>buttonLabel</button>
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
                    <h2>Title</h2>
                    <p>description</p>
                    <button>buttonLabel</button>
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
                    <h2>Title</h2>
                    <p>description</p>
                    <button>buttonLabel</button>
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

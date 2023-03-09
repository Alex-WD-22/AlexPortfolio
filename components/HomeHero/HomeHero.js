import { Button } from "@mui/material";

function HomeHero () {

    return (
        <section id="Home" className="HomeHero">
            <div className="main-Container">
                <div className="section-Content heroContent">
                     <h1>Hi, my name is</h1>
                     <div className="spacer-small"></div>
                     <h2>Alexander Nerz</h2>
                     <h3>Web Developer with heart</h3>
                     <div className="spacer-small"></div>
                    <p> I love innovative, fast-paced, multidisciplinary teams.</p>
                    <div className="spacer-medium"></div>
                    <div>
                        <Button>
                            Projects
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeHero;
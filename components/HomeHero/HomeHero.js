import { Button } from "@chakra-ui/react";
import Link from 'next/link';
import { GitHub, LinkedIn, LocalPostOffice } from "@mui/icons-material";

function HomeHero () {

 

    return (
        <section id="Home" className="HomeHero">
        <div className="HomeHero-socials">
            <div className="HeroSocial"><a href="https://github.com/Alex-WD-22" target="_blank" rel="noopener noreferrer"><GitHub sx={{ fontSize: 36 }}/></a></div>
            <div className="HeroSocial"><a href="https://www.linkedin.com/in/alexander-nerz" target="_blank" rel="noopener noreferrer"><LinkedIn sx={{ fontSize: 39 }}/></a></div>
            <div className="HeroSocial"><a href="mailto:anerz.com@gmail.com" target="_blank" rel="noopener noreferrer"><LocalPostOffice sx={{ fontSize: 39 }}/></a></div>
        </div>
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
                       <Link href="#Projects">
                       <Button
                        size='md'
                        height='62px'
                        width='290px'
                        border='2px'
                        fontSize='20px'
                        borderColor='rgba(31, 31, 206, 0.836)'
                       >
                            Projects
                        </Button>
                       </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeHero;
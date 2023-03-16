import Image from 'next/image';
import styles from "./About.module.css"
function About() {
  return (
    <section id="About" className="theme-bg-top">
      <div className="main-Container">
        <div className="section-Content About-Section">
          <div className="flex-center">
            <h4>ABOUT ME</h4>
            <div className="spacer-small"></div>
            <span className="design-heading"></span>
            <div className="spacer-medium"></div>
            <p>My Programming Skill, short History about me</p>
            <div className='spacer-large'></div>
          </div>

          <div className="flex-wrap">
            <div className='text-box'>
              <h5>Get to know me!</h5>
              <div className="spacer-small"></div>
              <p>
                I'm a Frontend Web Developer building the Front-end of Websites
                and Web Applications that leads to the success of the overall
                product. Check out some of my work in the Projects section. I
                also like sharing content related to the stuff that I have
                learned over the years in Web Development so it can help other
                people of the Dev Community. Feel free to Connect or Follow me
                on my Linkedin where I post useful content related to Web
                Development and Programming I'm open to Job opportunities where
                I can contribute, learn and grow. If you have a good opportunity
                that matches my skills and experience then don't hesitate to
                contact me.
              </p>
              <div className='spacer-small'></div>
            <p>Here are a few technologies I've been working with recently:</p>
            <div className='spacer-small'></div>
            <div></div>
            <ul className='skills-list'>
                <li>JavaScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>Java</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>CSS</li>
            </ul>

            </div>
    
            <div className={styles.Imgbox}>
            <div className={styles.imgWrapper}>
                <Image 
                src="/image/alexanderNerzProfile.jpg"
                alt="Alexander Nerz Profile Picture"
                width={250}
                height={250}
                className={styles.meImg}
                />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

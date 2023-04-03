import Image from "next/image";
import Link from "next/link";
import styles from "./About.module.css";
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
            <p>My Programming Skills, short History about me</p>
            <div className="spacer-medium"></div>
          </div>

          <div className="flex-wrap">
            <div className="text-box">
              <h5>Get to know me!</h5>
              <div className="spacer-small"></div>
              <p>
                Welcome to my landing page! My name is <strong>Alex</strong>,
                and I'm a<strong> passionate Web Developer</strong> who dove
                headfirst into the world of coding in{" "}
                <strong>January 2022</strong>. After completing an intensive{" "}
                <strong>Web Development Bootcamp</strong> at{" "}
                <a
                  href="https://ironhack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ironhack
                </a>
                , I discovered my true calling and have been eager to{" "}
                <strong>learn and develop my skills</strong> ever since. Despite
                being a late bloomer, my dedication and enthusiasm have allowed
                me to grow exponentially in this field.
              </p>
              <div className="spacer-small"></div>
              <p>
                Currently, I'm excited to explore new{" "}
                <strong>job opportunities</strong> where I can{" "}
                <strong>contribute</strong> my knowledge, <strong>learn</strong>{" "}
                from my peers,{" "}
                <strong>and continue to expand my horizons</strong>. If you have
                a position that aligns with my skills and experience, please
                don't hesitate to <Link href="/#Contact">get in touch</Link>.
                I'm looking forward to collaborating and taking on new
                challenges together!
              </p>
              <div className="spacer-small"></div>
              <p>
                Here are a few technologies I've been working with recently:
              </p>
              <div className="spacer-small"></div>
              <div></div>
              <ul className="skills-list">
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
                  width={300}
                  height={300}
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

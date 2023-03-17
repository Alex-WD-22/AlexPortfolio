import Head from "next/head";
import HomeHero from "components/HomeHero/HomeHero";
import About from "components/About/About";
import Projects from "components/Projects/Project";
import Contact from "components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alexander Nerz</title>
        <meta name="description" content="Alexander Nerz Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <HomeHero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

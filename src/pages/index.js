import Head from 'next/head'
import HomeHero from 'components/HomeHero/HomeHero'
import About from 'components/HomeHero/About/About'
import Projects from 'components/Projects/Project'
import Contact from 'components/Contact/Contact'

// import { Inter } from '@next/font/google'


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeHero />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

import Image from 'next/image'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ShortAboutMe from './components/ShortAboutMe'
import Projects from './components/Projects'

export default function Home() {
  return (
    <main className='w-full h-full'>
      {/* NAVBAR */}
      <Navbar />
      {/* HERO SECTION */}
      <HeroSection />

      {/* SHORT ABOUT ME */}
      <ShortAboutMe />

      {/* PROJECTS */}
      {/* <Projects /> */}
    </main>
  )
}

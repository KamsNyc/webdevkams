import Image from 'next/image'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ShortAboutMe from './components/ShortAboutMe'
import Projects from './components/Projects'
import MySkills from './components/MySkills'
import Testimonals from './components/Testimonals'

export default function Home() {
  return (
    <main className='w-full h-full'>
      {/* NAVBAR */}
      <Navbar />
      {/* HERO SECTION */}
      <HeroSection />

      {/* SHORT ABOUT ME */}
      <ShortAboutMe />

      {/* SKILLS */}
      <MySkills />

      {/* PROJECTS */}
       <Projects /> 

       {/* Tesiminals */}
       <Testimonals />
    </main>
  )
} 

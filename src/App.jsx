import React from 'react'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Bio from './components/Bio';
import Skills from './components/Skills';
import EducationSection from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App=()=>{
  return(
    <div className='relative h-full overflow-y-hidden antialiased'>
   <div className='fixed inset-0  bg-cover bg-center bg-img'>
</div>
<div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
    <Hero/>
    <Navbar/>
    <Bio/>
    <Projects/>
    <EducationSection/>
    <Skills/>
    <Contact/>
    <Footer/>
</div> 

    </div>
  )
}

export default App;
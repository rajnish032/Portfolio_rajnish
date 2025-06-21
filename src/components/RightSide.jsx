import React from 'react'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Education from './Education'
import Projects from './Projects'
import Certification from './Certification'

export default function RightSide() {
  return (
    <div className='md:w-[50%] pt-14 flex flex-col gap-14 md:h-screen overflow-y-auto hide-scrollbar'>
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Certification />
    </div>
  )
}

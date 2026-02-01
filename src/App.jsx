import { useState } from 'react'
import { About } from '@/sections/About';
import { Projects } from '@/sections/Projects';
import { Experience } from './sections/Experience';
import {Hero} from "@/sections/Hero"
import { Navbar } from './layout/Navbar';


function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='min-h-screen overflow-x-hidden'>

      <main>
          <Navbar/>

          <Hero/>
          <About/>
          <Projects/>
          <Experience/>
      </main>

   </div> 
  );
}

export default App

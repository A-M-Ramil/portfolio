"use client";
import React from 'react';
import Navbar from "@/components/navbar-2";
import { FlipWords } from './ui/flip-words';
import { HeroHighlight } from './ui/hero-highlight';




export default function header() {
  const words=["Blockchain Dev", "Frontend Dev","UI/UX Designer","SEO Specalist","Game Dev","a friend"]
  
  
  return (
    
    <main className='h-[100vh] w-screen mx-[10vw]' >
        <div >
            <Navbar />
        </div>
        <div className='grid lg:grid-cols-2  grid-cols-1 reverse'>
              <div className='py-[40vh] lg:grid-span-1 justify-center items-center  '>
                  <div className='lg:text-6xl md:text-4xl text-3xl mx-auto font-normal text-neutral-500 dark:text-neutral-400'>
                      Need
                      <FlipWords words={words}/>
                      <br />
                      I have got you covered!
                  </div>
              </div>
              <div className=' lg:grid-span-1 lg:h-[100vh] h-[50vh] pb-10  px-11  border'>
              sa
                  
              </div>
        </div>

    </main>
    
  )

}
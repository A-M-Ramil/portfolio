"use client";
import { Separator } from '@/components/ui/seperator';
import { useEffect, useRef, useState } from 'react';

import { FlipWords } from './ui/flip-words';
import PhotoTrail from './ui/photoTrail';
import  BubbleText  from '@/components/ui/textBubble';
import { motion, useScroll } from 'framer-motion';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams';



export default function Landing() {
  const words=["Blockchain", "Frontend","UI/UX","SEO","Game Dev","Friend"]

  const refA = useRef<HTMLDivElement>(null);
  const refB = useRef<HTMLDivElement>(null);
  const refC = useRef<HTMLDivElement>(null);
 ;



  return (
    <div className="snap-y mx-2 snap-mandatory   no-scrollbar">
    
    <section ref={refA} className="h-[29.33vh] snap-center ">
    <BackgroundBeamsWithCollision>
      <div className='flex items-end md:justify-center h-[29.33vh]'>
      
        <h1 className=' z-20 text-[31vw] leading-[6.9rem] tracking-[-.6rem] min-[460px]:text-[27vw] min-[520px]:text-[23vw] sm:text-[19vw] 
        md:text-[16.5vw] md:leading-[8rem] lg:text-[12vw] lg:leading-[9rem] xl:tracking-[-0.9rem] 2xl:tracking-[-1.6rem]  xl:leading-[13rem] 2xl:text-[14vw] min-[1900px]:leading-none  text-black'><BubbleText text="Munim Ramil"/></h1>
      
      </div>
      </BackgroundBeamsWithCollision>
      <Separator orientation='horizontal' />
      
      </section>


      <section
        ref={refB}
        className="h-[33.33vh]   flex flex-col  
      "
      >
      <div className=' w-screen h-[33.33vh]'>
      <PhotoTrail />
        
          
        
      </div>
      <Separator orientation='horizontal' />

      </section>



      
      <section className=' h-[33.33vh] overflow-hidden'>
        
        <div className=' text-[31vw] leading-[6.9rem] tracking-[-.6rem] min-[460px]:text-[27vw] min-[520px]:text-[23vw] sm:text-[19vw] 
        md:text-[16.5vw] md:leading-[8rem] lg:text-[12vw] lg:leading-[9rem] xl:leading-[13rem] 2xl:text-[14vw] min-[1900px]:leading-none  md:flex md:justify-center   font-extrabold mx-auto text-black '>
          
                      <FlipWords words={words}/>
                
                  </div>
      </section>
   
    </div>
  );
}

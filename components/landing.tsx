"use client";
import { Separator } from "@/components/ui/seperator";
import { useEffect, useRef, useState } from "react";

import { FlipWords } from "./ui/flip-words";
import PhotoTrail from "./ui/photoTrail";
import BubbleText from "@/components/ui/textBubble";
import { MorphingText } from "@/components/ui/morphing";
import { KineticText } from "@/components/ui/texty";

export default function Landing() {
  const word = [
    "R e s e a r c h e r",
    "D e v e l o p e r",
    "B l o c k c h a i n",
    "S E O  S p e c i a l i s t",
    "G a m e r",
  ];
  const words = [
    "R e s e a r c h e r",
    "D e v e l o p e r",
    "W e b 3   N a t i v e",
    "G r o w t h",
    "S E O",
    "G a m e r",
  ];

  const refA = useRef<HTMLDivElement>(null);
  const refB = useRef<HTMLDivElement>(null);
  const refC = useRef<HTMLDivElement>(null);
  return (
    <div className="snap-y mx-2 snap-mandatory   no-scrollbar">
      <section ref={refA} className="h-[29vh] snap-center ">
        <div className="flex items-end md:justify-center h-[29vh]">
          <div
            className=" font-playfair text-[29vw] tracking-[-.6rem]  min-[460px]:text-[27vw] lg:tracking-tighter min-[520px]:text-[23vw] sm:text-[19vw] 
        md:text-[16.5vw]  lg:text-[11vw]     2xl:text-[14vw] leading-none  text-white"
          >
            <KineticText text="munim ramil" />
          </div>
        </div>

        <Separator orientation="horizontal" />
      </section>

      <section
        ref={refB}
        className="h-[33.33vh]   flex flex-col  
      "
      >
        <div className=" w-screen h-[33vh] ">
          <PhotoTrail />
        </div>
        <Separator orientation="horizontal" />
      </section>

      <section className=" h-[32vh] overflow-hidden">
        <div
          className=" text-[26vw]  tracking-[-.6rem] min-[460px]:text-[27vw] min-[520px]:text-[23vw] sm:text-[19vw] 
        md:text-[16.5vw] font-playfair md:leading-[8rem] lg:text-[12vw] lg:leading-[9rem] xl:leading-[13rem] 2xl:text-[14vw] min-[1900px]:leading-none  md:flex md:justify-center   font-extrabold mx-auto text-white "
        >
          <MorphingText texts={words} />
        </div>
      </section>
    </div>
  );
}

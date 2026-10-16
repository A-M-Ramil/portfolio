"use client";
import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import { Separator } from "@/components/ui/seperator";
import { KineticText } from "@/components/ui/texty";
import BubbleText from "@/components/ui/textBubble";
import Project1 from "./project1_details";

const Home = () => {
  const refA = useRef<HTMLDivElement>(null);
  const refB = useRef<HTMLDivElement>(null);
  const refC = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (refA.current && refB.current) {
        const sectionAHeight = refA.current.offsetHeight;
        const isSticky = latest > sectionAHeight;
        setSticky(isSticky);
      }
    });
  }, [scrollY]);

  return (
    <div className="snap-y mx-2 snap-mandatory   no-scrollbar">
      <section ref={refA} className="h-[29.33vh] snap-center ">
        <div className="flex items-end md:justify-center  h-[29vh]">
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
        className={`h-[24vh] items-end   flex flex-col  ${sticky ? "sticky " : ""}`}
      >
        <div
          className=" font-playfair text-[15vw] min-[460px]:text-[15vw] min-[520px]:text-[15vw] sm:text-[10vw] 
        md:text-[10vw] lg:tracking-tighter lg:text-[8vw]  md:justify-center   2xl:text-[6vw]  flex items-end  text-white  h-[24vh] "
        >
          <KineticText text="Clubify!" />
        </div>
        <Separator orientation="horizontal" />
      </section>
      <section className=" pt-3 no-scrollbar scroll-smooth ">
        <Project1 />
      </section>
    </div>
  );
};

export default Home;

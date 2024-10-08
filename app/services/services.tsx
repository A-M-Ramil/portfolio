"use client";
import { useEffect, useRef, useState } from "react";
import { easeIn, motion, useScroll } from "framer-motion";

import { Separator } from "@/components/ui/seperator";
import Service from "@/components/service";
import BubbleText from "@/components/ui/textBubble";

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
    <div className="snap-y  mx-2 snap-mandatory   no-scrollbar">
      <section ref={refA} className="h-[29.33vh] snap-center ">
        <div className="flex items-end md:justify-center  h-[29.33vh]">
          <h1
            className="text-[31vw] leading-[6.9rem] tracking-[-.6rem] min-[460px]:text-[27vw] min-[520px]:text-[23vw] sm:text-[19vw] 
        md:text-[16.5vw] md:leading-[8rem] lg:text-[12vw] lg:leading-[9rem] xl:tracking-[-0.9rem] 2xl:tracking-[-1.6rem] xl:leading-[13rem] 2xl:text-[14vw] min-[1900px]:leading-none  text-black"
          >
            <BubbleText text="Munim Ramil" />
          </h1>
        </div>
        <Separator orientation="horizontal" />
      </section>

      <section
        ref={refB}
        className={`h-[24vh]   flex flex-col  ${sticky ? "sticky " : ""}`}
      >
        {" "}
        <div
          className="text-[27vw] leading-[6.9rem] tracking-[-.6rem] min-[460px]:text-[27vw] min-[520px]:text-[23vw] sm:text-[19vw] 
      md:text-[16.5vw] md:leading-[8rem] lg:text-[12vw] overflow-hidden lg:leading-[9rem] md:justify-center  xl:leading-[13rem] 2xl:text-[14vw] min-[1900px]:leading-none flex items-end  text-black  h-[24vh] "
        >
          <BubbleText text="Services" />
        </div>
        <Separator orientation="horizontal" />
      </section>
      <section className="h-[77.00vh] pb-10 pt-10 lg:pt-0 no-scrollbar scroll-smooth overflow-y-auto">
        <Service />
      </section>
    </div>
  );
};

export default Home;

"use client";
import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import { Separator } from "@/components/ui/seperator";
import Project from "@/components/project";
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
    <div className="snap-y mx-2 snap-mandatory   no-scrollbar">
      <section ref={refA} className="h-[29.33vh] snap-center ">
        <div className="flex items-end md:justify-center h-[29.33vh]">
          <h1
            className="text-[29vw] leading-[5.9rem] tracking-[-.6rem] min-[460px]:text-[27vw] min-[520px]:text-[23vw] sm:text-[19vw] 
        md:text-[16.5vw] md:leading-[8rem] lg:text-[12vw] xl:tracking-[-0.9rem] 2xl:tracking-[-1.6rem] lg:leading-[9rem]  xl:leading-[13rem] 2xl:text-[14vw] min-[1900px]:leading-none  text-black"
          >
            <BubbleText text="Munim Ramil" />
          </h1>
        </div>
        <Separator orientation="horizontal" />
      </section>

      <section
        ref={refB}
        className={`h-[24vh] pt-2  flex flex-col   ${sticky ? "sticky " : ""}`}
      >
        {" "}
        <div
          className=" text-[27.5vw] leading-[6.9rem] tracking-[-.6rem] min-[460px]:text-[27vw] min-[520px]:text-[23vw] sm:text-[19vw] 
      md:text-[16.5vw] md:leading-[8rem] lg:text-[12vw] overflow-y-clip lg:leading-[9rem] md:justify-center  xl:leading-[13rem] 2xl:text-[14vw] min-[1900px]:leading-none flex items-end  text-black  h-[24vh] "
        >
          <BubbleText text="Projects" />
        </div>
        <Separator orientation="horizontal" />
      </section>
      <section className="h-[77.00vh] mt-3 pt-3 no-scrollbar scroll-smooth overflow-y-auto">
        <Project />
      </section>
    </div>
  );
};

export default Home;

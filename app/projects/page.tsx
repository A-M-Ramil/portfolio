import Image from "next/image";

import Project from "./projects";
import Nav from "@/components/menu";
import { HeroHighlight } from "@/components/ui/hero-highlight";

export default function about() {
  return (
    <main
      className=" bg-third 
   "
    >
      <HeroHighlight>
        <div className="h-[4vh]">
          <Nav />{" "}
        </div>
        <div className=" w-[100vw]">
          <Project />
        </div>
      </HeroHighlight>
    </main>
  );
}

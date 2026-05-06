import Image from "next/image";

import Project from "./project2";
import Nav from "@/components/menu";
import { HeroHighlight } from "@/components/ui/hero-highlight";

export default function about() {
  return (
    <main
      className=" bg-third 
   "
    >
      <div className="h-[4vh]">
        <Nav />
      </div>
      <div className=" h-full w-[100vw]">
        <Project />
      </div>
    </main>
  );
}

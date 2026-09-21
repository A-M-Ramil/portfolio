import Image from "next/image";

import Project from "./projects";
import Nav from "@/components/menu";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import FuzzyOverlay from "@/components/ui/fuzzyoverlay";

export default function about() {
  return (
    <main
      className=" bg-third relative overflow-hidden
   "
    >
      {" "}
      <FuzzyOverlay />
      <div className="h-[4vh]">
        <Nav />{" "}
      </div>
      <div className=" w-[100vw]">
        <Project />
      </div>
    </main>
  );
}

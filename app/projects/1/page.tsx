import Image from "next/image";
import FuzzyOverlay from "@/components/ui/fuzzyoverlay";
import Project from "./project1";
import Nav from "@/components/menu";
import { HeroHighlight } from "@/components/ui/hero-highlight";

export default function about() {
  return (
    <main
      className=" bg-third relative overflow-hidden
   "
    >
      <div className="h-[4vh]">
        <Nav />
      </div>
      <div className="  w-[100vw]">
        <Project />
      </div>
      <FuzzyOverlay />
    </main>
  );
}

import Image from "next/image";

import About from "./aboutme";
import Nav from "@/components/menu";

import { CursorTrail } from "@/components/ui/cursorTrail";
import FuzzyOverlay from "@/components/ui/fuzzyoverlay";
export default function about() {
  return (
    <main
      className=" bg-third relative overflow-hidden
   "
    >
      <div className="h-[4vh]">
        <Nav />
      </div>
      <div className=" w-[100vw]">
        <About />
      </div>
      <FuzzyOverlay />
    </main>
  );
}

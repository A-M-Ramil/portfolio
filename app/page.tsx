import Landing from "@/components/landing";

import { HeroHighlight } from "@/components/ui/hero-highlight";
import { CursorTrail } from "@/components/ui/cursorTrail";
import FuzzyOverlay from "@/components/ui/fuzzyoverlay";

import Menu from "@/components/menu";
import "@/app/globals.css";

export default function Home() {
  return (
    <main
      className=" bg-third h-[100vh] relative overflow-hidden
   "
    >
      <FuzzyOverlay />
      <div className="h-[4vh] mb-2 ">
        <Menu />
      </div>
      <div className="w-[100vw] max-h-[96vh]">
        <Landing />
      </div>
    </main>
  );
}

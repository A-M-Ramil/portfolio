import Landing from "@/components/landing";

import { HeroHighlight } from "@/components/ui/hero-highlight";
import { CursorTrail } from "@/components/ui/cursorTrail";

import Menu from "@/components/menu";
import "./globals.css";

export default function Home() {
  return (
    <main
      className=" bg-third h-[100vh] overflow-hidden
   "
    >
      <HeroHighlight>
        <div className="h-[4vh] mb-2 ">
          <Menu />
        </div>
        <div className="w-[100vw]">
          <Landing />
        </div>
      </HeroHighlight>
    </main>
  );
}

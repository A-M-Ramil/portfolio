import Image from "next/image";

import Service from "./services";
import Nav from "@/components/menu";
import { HeroHighlight } from "@/components/ui/hero-highlight";

export default function about() {
  return (
    <main
      className=" bg-60 
   "
    >
      <div className="h-[4vh]">
        <Nav />
      </div>
      <div className=" w-[100vw]">
        <Service />
      </div>
    </main>
  );
}

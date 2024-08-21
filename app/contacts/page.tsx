import Image from "next/image";

import Contact from "./contact";
import Nav from "@/components/menu"
import { HeroHighlight } from '@/components/ui/hero-highlight';


export default function about() {
  return (
    
   <main  className=" bg-60
   ">
    <HeroHighlight>
    <div className="h-[4vh]"><Nav/></div>
    <div className=" w-[100vw]">
    <Contact/></div>
    </HeroHighlight>
   </main>
   
    
  );
}

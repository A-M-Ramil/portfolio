
import Landing from "@/components/landing";

import {HeroHighlight} from "@/components/ui/hero-highlight";

import Menu from "@/components/menu";
import "./globals.css"


export default function Home() {
  return (
    
   <main  className=" bg-third 
   ">
    
    <HeroHighlight>
    <div className="h-[4vh] "><Menu/></div>
    <div className="w-[100vw]"><Landing /></div>
    
    </HeroHighlight>
    
    
   </main>
   
    
  );
}

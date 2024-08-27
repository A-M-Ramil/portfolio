import Image from "next/image";

import Experience from "./experience";
import Nav from "@/components/menu";
import { HeroHighlight_rev } from '@/components/ui/hero-reverse';
import { CursorTrail } from "@/components/ui/cursorTrail";



export default function about() {
  return (
    
   <main  className="bg-60"
   >
    <CursorTrail>
    <div className="h-[4vh]"><Nav/></div>
   <div className="w-[100vw]"><Experience/></div> 
   </CursorTrail>
   </main>
   
    
  );
}

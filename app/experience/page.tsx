import Image from "next/image";

import Experience from "./experience";
import Nav from "@/components/menu";
import { HeroHighlight_rev } from '@/components/ui/hero-reverse';



export default function about() {
  return (
    
   <main  className="bg-60"
   >
    
    <div className="h-[4vh]"><Nav/></div>
   <div className="w-[100vw]"><Experience/></div> 
    
   </main>
   
    
  );
}

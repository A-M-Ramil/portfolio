import FuzzyOverlay from "@/components/ui/fuzzyoverlay";
import { KineticText } from "@/components/ui/texty";
import { MorphingText } from "@/components/ui/morphing";
// 2. How to use it in your portfolio page
export default function PortfolioHero() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-black">
      {/* Your main content needs relative and a higher z-index to stay clickable */}
      <div className="relative z-10 text-white p-10">
        <KineticText
          text="munim ramil"
          className="text-[6rem] font-playfair tracking-[-5%] [font-optical-sizing:auto]"
        />
        <MorphingText
          texts={[
            "Researcher",
            "Developer",
            "Web3Native",
            "Growth",
            "SEO",
            "Gamer",
          ]}
          className="text-[3rem] font-playfair   "
        />
      </div>
    </div>
  );
}

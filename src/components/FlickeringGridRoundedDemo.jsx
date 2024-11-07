import FlickeringGrid from "@/components/ui/flickering-grid";
import { Hero } from "@/components/Hero"; // Adjust the import path according to your project structure

export function FlickeringGridRoundedDemo() {
  return (
    <div className="relative rounded-lg w-full overflow-hidden border">
      <FlickeringGrid
        className="z-0 absolute inset-0 [mask:radial-gradient(circle_at_center,#fff_300px,transparent_0)]"
        squareSize={4}
        gridGap={6}
        color="#60A5FA"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={800}
        width={800}
      />
      {/* Render the Hero component on top of FlickeringGrid */}
      <div className="relative z-10">
        <Hero />
      </div>
    </div>
  );
}

import { GlowingEffectDemo } from "@/components/ui/glowing-effect-demo";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import DisplayCards from "@/components/ui/display-cards";
import { Sparkles, Zap, Star } from "lucide-react";

const displayCards = [
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    title: "Featured",
    description: "Discover amazing content",
    date: "Just now",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Zap className="size-4 text-purple-300" />,
    title: "Popular",
    description: "Trending this week",
    date: "2 days ago",
    iconClassName: "text-purple-500",
    titleClassName: "text-purple-500",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Star className="size-4 text-emerald-300" />,
    title: "New",
    description: "Latest updates and features",
    date: "Today",
    iconClassName: "text-emerald-500",
    titleClassName: "text-emerald-500",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
];

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Glowing Effect Grid */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2 text-center">Glowing Effect</h2>
        <p className="text-muted-foreground text-sm text-center mb-10">
          Hover over cards to see the interactive glow follow your cursor.
        </p>
        <GlowingEffectDemo />
      </section>

      <div className="border-t border-border" />

      {/* Feature Section */}
      <section className="px-6 py-4">
        <h2 className="text-2xl font-semibold mb-2 text-center pt-10">Features</h2>
        <p className="text-muted-foreground text-sm text-center mb-4">
          Hover over each feature to see the animated highlight effect.
        </p>
        <FeaturesSectionWithHoverEffects />
      </section>

      <div className="border-t border-border" />

      {/* Display Cards */}
      <section className="px-6 py-16">
        <h2 className="text-2xl font-semibold mb-2 text-center">Display Cards</h2>
        <p className="text-muted-foreground text-sm text-center mb-10">
          Stacked cards with hover effects and smooth transitions.
        </p>
        <div className="flex min-h-[400px] w-full items-center justify-center py-10">
          <DisplayCards cards={displayCards} />
        </div>
      </section>
    </div>
  );
}

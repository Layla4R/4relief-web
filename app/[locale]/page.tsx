import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import FeaturedPrograms from "../components/sections/FeaturedPrograms";
import CallToAction from "../components/sections/CallToAction";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Stats />
      <FeaturedPrograms />
      <div className="max-w-1100 mx-auto px-4">
        <CallToAction />
      </div>
    </div>
  );
}

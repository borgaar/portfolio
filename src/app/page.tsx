import Hero from "./components/hero";
import WorkGrid from "./components/work-grid";

export default function Home() {
  return (
    <div className="pb-10 scrollbar-none">
      <Hero />
      <WorkGrid />
    </div>
  );
}

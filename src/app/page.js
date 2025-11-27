import Features from "@/Component/features";
import Hero from "@/Component/Hero";
import Item from "@/Component/Item";
import StatsSection from "@/Component/StatsSection";
import Testimonials from "@/Component/Testimonials";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Item/>
      <Features/>
      <Testimonials/>
      <StatsSection/>
    </div>
  );
}

import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { HeadlineBanner } from "@/components/headline-banner";
import { Hero } from "@/components/hero";
import { NavBar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Hero />
      <HeadlineBanner />
      <About/>
      <Footer/>
    </div>
  );
}

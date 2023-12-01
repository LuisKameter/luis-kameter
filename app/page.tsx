import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-4 md:p-16 lg:p-24 pb-0 md:pb-0 lg:pb-0">
      <Hero />
      <Work />
      <Services />
      <About />
      <Contact />
    </main>
  );
}

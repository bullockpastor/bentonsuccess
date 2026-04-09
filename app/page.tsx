import Hero from "@/components/Hero";
import About from "@/components/About";
import Credits from "@/components/Credits";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Nav from "@/components/Nav";
import ParallaxBackground from "@/components/ParallaxBackground";

export default function Home() {
  return (
    <>
      <ParallaxBackground />
      <main>
        <Nav />
        <Hero />
        <About />
        <Credits />
        <Services />
        <Contact />
      </main>
    </>
  );
}

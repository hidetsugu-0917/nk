import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import SumiDashi from "@/components/sections/SumiDashi";

export default function Home() {
  return (
    <main>
      <Header />
      <section id="home">
        <Hero />
      </section>
      <Services />
      <About />
      <SumiDashi />
    </main>
  );
}
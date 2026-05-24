import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-slate-950 text-white">

      <Hero />
      <About />
      <Skills />
      <Contact />

    </main>
    </>
    );
}

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-12 space-y-16">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Resume />
      </div>
    </main>
  );
}

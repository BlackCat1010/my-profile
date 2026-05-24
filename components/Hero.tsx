import { HERO } from "@/lib/constants";

export default function Hero() {
   return (
      <section className="mx-auto flex max-w-5xl flex-col justify-center">
        <p className="mb-4 text-sm uppercase tracking-widest text-cyan-400">
          {HERO.title}
        </p>

        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          Hi, I'm {HERO.name}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          {HERO.description}
        </p>
      </section>
   );  
}
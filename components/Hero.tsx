export default function Hero() {
   return (
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6">
        <p className="mb-4 text-sm uppercase tracking-widest text-cyan-400">
          FinTech Software Developer
        </p>

        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          Hi, I'm Sheng Jun.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I build backend systems, APIs, payment workflows, and cloud-native
          features using .NET, SQL, AWS Lambda, and modern web technologies.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-white"
          >
            Contact Me
          </a>
        </div>
      </section>
   );  
}
import { techStacks } from "@/lib/constants";

export default function Skills() {
  return (
    <section className="mx-auto max-w-5xl">
      <h2 className="text-3xl font-bold">Tech stack</h2>

      <div className="mt-8 grid gap-8 md:grid-cols-3">
        {techStacks.map((group) => (
          <div key={group.title}>
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
              {group.title}
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="inline-flex rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-1 text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
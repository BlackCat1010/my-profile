import { ABOUT } from "@/lib/constants";

export default function About() {
    return (
<section className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold">About Me</h2>

            <p className="mt-5 max-w-3xl leading-8 text-slate-300">
                {ABOUT.description}
            </p>
        </section>
    );
}
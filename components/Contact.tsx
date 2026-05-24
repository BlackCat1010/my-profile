import { CONTACT } from "@/lib/constants";

export default function Contact() {
    return (
        <section id="contact" className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold">Contact</h2>
            <a href={`mailto:${CONTACT.email}`} 
                className="mt-4 inline-flex rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-400">
                {CONTACT.email}
            </a>
        </section>
    );
}
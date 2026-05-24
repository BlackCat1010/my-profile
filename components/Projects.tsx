"use client";

import { useState } from "react";

const projects = [
    {
        title: "News Scrapper",
        description: "A Simple News Scrapper scraping latest Singapore news",
        projectUrl: "https://github.com/BlackCat1010/WebScrapper2_0",
        frameworksUsed: ["EFCore", "PuppeteerSharp", "HtmlAgilityPack"]
    }
]

type TooltipState = {
  text: string;
  x: number;
  y: number;
};

export default function Projects() {
    const [tooltip, setTooltip] = useState<TooltipState | null>(null);

    return (
        <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
            <h2 className="text-3xl font-bold">Projects</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
                {projects.map((project) => (
                    <button
                        key={project.title}
                        className="relative rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:bg-slate-800 text-left"
                        onMouseMove={(event) => {
                            setTooltip({
                                text: "Click to view more on GitHub",
                                x: event.clientX,
                                y: event.clientY,
                            })
                        }}
                        onMouseLeave={() => { setTooltip(null)}}
                        onClick={() => window.open(project.projectUrl, "_blank")}
                    >
                        <h3 className="text-xl font-semibold">
                            {project.title}
                        </h3>
                        <p className="mt-4 text-sm italic leading-6 text-slate-400">
                            {project.description}
                        </p>
                        <p className="mt-5 text-xs uppercase tracking-[0.2em] text-slate-500">
                            Frameworks used
                        </p>
                        <p className="mt-1 text-sm text-slate-300">
                            {project.frameworksUsed.join(", ")}
                        </p>
                    </button>
                ))}
            </div>

            {tooltip ? (
            <div
                className="pointer-events-none fixed z-50 rounded-xl bg-slate-900/95 px-3 py-2 text-sm text-white shadow-xl"
                style={{ left: tooltip.x, top: tooltip.y, transform: "none" }}
                role="tooltip"
            >
                {tooltip.text}
            </div>
            ) : null}
        </section>
    );
}
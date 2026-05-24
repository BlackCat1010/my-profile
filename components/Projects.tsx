"use client";

import { useState } from "react";

const projects = [
    {
        title: "News Scrapper",
        description: "A Simple News Scrapper scraping latest Singapore news",
        frameworksUsed: ["EFCore", "PuppeteerSharp", "HtmlAgilityPack"]
    }
]

type TooltipState = {
  text: string[];
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
                                text: project.frameworksUsed,
                                x: event.clientX,
                                y: event.clientY,
                            })
                        }}
                        onMouseLeave={() => {
                            setTooltip(null);
                        }}
                    >
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="mt-4 text-sm leading-7 text-slate-300">
                            {project.description}
                        </p>
                    </button>
                ))}
            </div>

            {tooltip ? (
                <div
                    className="pointer-events-none fixed z-50 rounded bg-slate-800 px-3 py-2 text-sm text-white opacity-80"
                    style={{ 
                        left: tooltip.x,
                        top: tooltip.y,
                        transform: "none", 
                    }}
                >
                    {tooltip.text.map((text, index) => (
                        <div key={index}>{text}</div>
                    ))}
                </div>
            ) : null
            }
        </section>
    );
}
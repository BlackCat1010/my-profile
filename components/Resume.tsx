"use client";

import StyledLink from "@/components/StyledLink";
import { track } from "@vercel/analytics";

export default function Resume() {
    return (
        <section id="resume" className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold">Resume</h2>
            <StyledLink 
                href="/resume.pdf" 
                download
                onClick={() => track("Resume downloaded")}
                >
            <svg 
                className="h-5 w-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
            >
                <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 19v-7m0 0V5m0 7H5m7 0h7" 
                />
            </svg>
            Download
            </StyledLink>
        </section>
    );
}
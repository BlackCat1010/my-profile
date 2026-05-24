const skills = [
    ".NET",
    "C#",
    "SQL",
    "AWS Lambda",
    "API Gateway",
    "DynamoDB",
    "EF Core",
    "Next.js",
    "TypeScript",
];

export default function Skills() {
    return (
        <section className="mx-auto max-w-5xl px-6 py-24">
            <h2 className="text-3xl font-bold">Skills</h2>

            <div className="mt-8 flex flex-wrap gap-3">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="rounded-full border border-slate-700 px-4 py-2 text-slate-300"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}
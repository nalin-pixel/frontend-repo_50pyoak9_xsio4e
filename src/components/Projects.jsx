import ProjectCard from "./ProjectCard";

export default function Projects({ items = [] }) {
  const list = items.length
    ? items
    : [
        {
          title: "Portfolio Starter",
          description: "This site itself – clean, minimal, and fast.",
          tech: ["React", "Vite", "Tailwind"],
          link: "https://github.com/",
        },
        {
          title: "API Demo",
          description: "A tiny FastAPI backend with a test endpoint.",
          tech: ["FastAPI", "MongoDB"],
          link: "https://github.com/",
        },
        {
          title: "UI Components",
          description: "Reusable, accessible UI blocks ready to drop in.",
          tech: ["shadcn", "Radix", "Tailwind"],
          link: "https://github.com/",
        },
      ];

  return (
    <section id="projects" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured work</h2>
          <p className="text-slate-300 mt-2">A few things I've built and played with recently.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p) => (
            <ProjectCard key={p.title} {...p} />)
          )}
        </div>
      </div>
    </section>
  );
}

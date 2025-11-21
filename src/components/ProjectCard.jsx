export default function ProjectCard({ title, description, tech = [], link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-2xl border border-slate-700/50 bg-slate-800/60 hover:bg-slate-800/80 transition shadow-lg shadow-black/10 overflow-hidden"
    >
      <div className="p-5">
        <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-blue-300 transition">{title}</h3>
        <p className="text-slate-300 text-sm mb-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded bg-slate-900/70 text-blue-200 border border-slate-700/60">
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

import { Github } from "lucide-react";

export default function Header({ name = "Your Name", github = "https://github.com/" }) {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-slate-900/60 border-b border-slate-700/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="text-white font-semibold tracking-tight text-lg">
            {name}
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-slate-300">
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default function Contact({ email = "you@example.com" }) {
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-slate-700/40 bg-slate-800/60 p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-white font-semibold text-lg">Let's connect</h3>
              <p className="text-slate-300 text-sm">Have a project or want to collaborate? Reach out.</p>
            </div>
            <a
              href={`mailto:${email}`}
              className="inline-block px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-600/30 transition"
            >
              Email me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

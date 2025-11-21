export default function Hero({ title = "Hello, I'm a Developer", subtitle = "I build simple, clean web experiences", ctaText = "See my work" }) {
  return (
    <section id="home" className="relative pt-28 pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-blue-200/90 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="mt-8">
            <a href="#projects" className="inline-block px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/30 transition">
              {ctaText}
            </a>
          </div>
        </div>
      </div>
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(closest-side,white,transparent)]">
        <div className="absolute inset-x-0 top-10 h-[300px] bg-gradient-to-b from-blue-600/20 to-transparent blur-3xl"></div>
      </div>
    </section>
  );
}

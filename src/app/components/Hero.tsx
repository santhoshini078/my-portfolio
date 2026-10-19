
export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center overflow-hidden px-5 py-24 text-white"
    >
      <div className="pointer-events-none absolute right-10 top-24 h-64 w-64 rounded-full bg-emerald-400/10 blur-[100px]" />

      <p className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-emerald-400">
        <span className="h-px w-10 bg-emerald-400" />
        Computer Science Engineering
      </p>

      <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
        Hi, I&apos;m
        <span className="block text-emerald-400">
          Santhoshini.
        </span>
      </h1>

      <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
        I enjoy working with Python, data science and machine learning to
        build practical technology projects. I&apos;m eager to learn, solve
        problems and grow in the software industry.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-full bg-emerald-400 px-7 py-3 font-semibold text-black transition hover:bg-emerald-300"
        >
          Explore My Projects ↗
        </a>

        <a
          href="#about"
          className="rounded-full border border-white/20 px-7 py-3 font-medium transition hover:border-emerald-400 hover:text-emerald-400"
        >
          About Me
        </a>
      </div>

      <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-7 text-sm text-gray-400">
        <span>
          <span className="text-emerald-400">●</span> Python
        </span>
        <span>
          <span className="text-emerald-400">●</span> Data Science
        </span>
        <span>
          <span className="text-emerald-400">●</span> Machine Learning
        </span>
      </div>
    </section>
  );
}

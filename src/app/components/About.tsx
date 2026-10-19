
export default function About() {
  return (
    <section
      id="about"
      className="border-y border-white/10 bg-white/[0.02] text-white"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-emerald-400">
            01 / About
          </p>
          <h2 className="text-4xl font-bold">A little about me.</h2>
        </div>

        <div>
          <p className="text-lg leading-8 text-gray-300">
            I completed my B.Tech in Computer Science Engineering at Bapatla
            Engineering College. My interests include programming, data
            analysis, machine learning and developing useful applications.
          </p>

          <p className="mt-5 leading-7 text-gray-400">
            Through academic projects and internships, I have gained
            experience with data preprocessing, feature extraction, model
            development and application integration. I&apos;m looking for an
            opportunity to apply my knowledge and continue learning.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 p-5">
              <p className="text-sm text-gray-400">Education</p>
              <p className="mt-2 font-semibold">B.Tech, CSE</p>
              <p className="mt-1 text-sm text-gray-400">2022 – 2026</p>
            </div>

            <div className="rounded-2xl border border-white/10 p-5">
              <p className="text-sm text-gray-400">CGPA</p>
              <p className="mt-2 text-3xl font-bold text-emerald-400">
                7.49
              </p>
              <p className="mt-1 text-sm text-gray-400">Out of 10</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

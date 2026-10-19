
const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["C", "Python"],
  },
  {
    title: "Data Science & Machine Learning",
    skills: [
      "Pandas",
      "NumPy",
      "Jupyter Notebook",
      "Machine Learning",
      "NLP",
      "Scikit-learn",
      "EfficientNet-B4",
    ],
  },
  {
    title: "Tools & Development",
    skills: ["FastAPI", "ReactJS", "Supabase"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-5 py-24"
    >
      <p className="mb-3 text-sm uppercase tracking-[0.25em] text-emerald-400">
        03 / Skills
      </p>

      <h2 className="text-4xl font-bold">
        Technical skills.
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <h3 className="mb-5 text-lg font-semibold">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

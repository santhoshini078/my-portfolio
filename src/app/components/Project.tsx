
const projects = [
  {
    title: "Movie Recommendation System",
    date: "May 2024",
    description:
      "Developed a movie recommendation system that suggests similar movies using text-based features and similarity scoring.",
    technologies: ["Python", "CountVectorizer", "Cosine Similarity"],
  },
  {
    title: "Fake News Detection",
    date: "May 2025",
    description:
      "Built a machine learning model to classify news as fake or real using text preprocessing and feature extraction.",
    technologies: ["Python", "TF-IDF", "Scikit-learn", "Logistic Regression", "Naive Bayes"],
  },
  {
    title: "Vitamin Deficiency Detection System",
    date: "April 2026",
    description:
      "Developed a deep learning project to explore vitamin deficiency prediction from images, with food recommendations based on the predicted result.",
    technologies: ["Python", "Deep Learning", "EfficientNet-B4", "FastAPI"],
  },
];

export default function Project() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-5 py-24"
    >
      <p className="mb-3 text-sm uppercase tracking-[0.25em] text-emerald-400">
        04 / Projects
      </p>

      <h2 className="text-4xl font-bold">
        Projects I have worked on.
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-emerald-400/50"
          >
            <p className="text-sm text-emerald-400">
              {project.date}
            </p>

            <h3 className="mt-3 text-xl font-semibold">
              {project.title}
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-gray-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

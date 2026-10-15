const skills = [
  "C",
  "Python",
  "Pandas",
  "NumPy",
  "Jupyter Notebook",
  "Machine Learning",
  "NLP",
  "Scikit-learn",
  "EfficientNet-B4",
  "FastAPI",
  "ReactJS",
  "Supabase",
];

const projects = [
  {
    number: "01",
    title: "Movie Recommendation System",
    date: "May 2024",
    description:
      "Built a movie recommendation system using Python, Pandas, Scikit-learn and NLP. Used Count Vectorizer and Cosine Similarity to recommend movies based on content similarity.",
    tags: ["Python", "Pandas", "NLP", "Scikit-learn"],
  },
  {
    number: "02",
    title: "Fake News Detection",
    date: "May 2025",
    description:
      "Developed a fake news classification system using TF-IDF and machine learning algorithms including Logistic Regression and Naive Bayes.",
    tags: ["Python", "TF-IDF", "NLP", "Machine Learning"],
  },
  {
    number: "03",
    title: "Vitamin Deficiency Detection",
    date: "April 2026",
    description:
      "Developed an image-based vitamin deficiency detection system using EfficientNet-B4 and deep learning, with 82.05% validation accuracy. The platform includes image preprocessing, prediction, AI assistant support and database integration.",
    tags: ["Python", "Deep Learning", "FastAPI", "ReactJS", "Supabase"],
  },
];

const internships = [
  {
    role: "Data Science Intern",
    company: "BIST Technologies Pvt. Ltd.",
    year: "2024",
    description:
      "Worked on data analysis, data preprocessing, visualization and basic machine learning techniques using Python.",
  },
  {
    role: "Machine Learning Intern",
    company: "SkillDzire Technologies Pvt. Ltd.",
    year: "2025",
    description:
      "Learned real-time machine learning applications through guided virtual projects and industry-focused training.",
  },
];

const certifications = [
  "AI Fundamentals Workshop — IBM SkillsBuild (2024)",
  "Cisco Networking Academy — Python Essentials 1 & 2 (2025)",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b09] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080b09]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <a href="#home" className="text-xl font-bold tracking-tight">
            <span className="text-emerald-400">S</span>anthoshini
            <span className="text-emerald-400">.</span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
            <a className="transition hover:text-emerald-400" href="#about">About</a>
            <a className="transition hover:text-emerald-400" href="#skills">Skills</a>
            <a className="transition hover:text-emerald-400" href="#projects">Projects</a>
            <a className="transition hover:text-emerald-400" href="#experience">Experience</a>
            <a className="transition hover:text-emerald-400" href="#contact">Contact</a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-emerald-400/60 px-4 py-2 text-sm text-emerald-300 transition hover:bg-emerald-400 hover:text-black"
          >
            Let&apos;s Connect
          </a>
        </nav>
      </header>

      <section
        id="home"
        className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-5 py-24"
      >
        <div className="pointer-events-none absolute right-10 top-24 h-64 w-64 rounded-full bg-emerald-400/10 blur-[100px]" />

        <p className="mb-6 flex items-center gap-3 text-sm font-medium tracking-[0.25em] text-emerald-400 uppercase">
          <span className="h-px w-10 bg-emerald-400" />
          Computer Science Engineering
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
          Hi, I&apos;m
          <span className="block text-emerald-400">Santhoshini.</span>
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
          <span><span className="text-emerald-400">●</span> Python</span>
          <span><span className="text-emerald-400">●</span> Data Science</span>
          <span><span className="text-emerald-400">●</span> Machine Learning</span>
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-emerald-400">01 / About</p>
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
                <p className="mt-2 text-3xl font-bold text-emerald-400">7.49</p>
                <p className="mt-1 text-sm text-gray-400">Out of 10</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-5 py-24">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-emerald-400">02 / Skills</p>
        <h2 className="text-4xl font-bold">Tools I work with.</h2>
        <p className="mt-4 max-w-2xl leading-7 text-gray-400">
          Technologies and tools listed in my resume and project experience.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-gray-300 transition hover:border-emerald-400/60 hover:text-emerald-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-emerald-400">03 / Selected Work</p>
          <h2 className="text-4xl font-bold">Projects I&apos;ve worked on.</h2>
          <p className="mt-4 max-w-2xl leading-7 text-gray-400">
            Academic and machine learning projects from my resume.
          </p>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className={`group rounded-3xl border border-white/10 bg-[#0c110e] p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/50 ${
                  project.number === "03" ? "lg:col-span-2" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-sm font-semibold text-emerald-400">{project.number}</span>
                  <span className="text-sm text-gray-500">{project.date}</span>
                </div>
                <h3 className="mt-7 text-2xl font-semibold transition group-hover:text-emerald-300">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-3xl leading-7 text-gray-400">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-5 py-24">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-emerald-400">04 / Experience</p>
        <h2 className="text-4xl font-bold">Internships & learning.</h2>

        <div className="mt-10 space-y-5">
          {internships.map((item) => (
            <article key={item.company} className="rounded-2xl border border-white/10 p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold">{item.role}</h3>
                  <p className="mt-2 text-emerald-300">{item.company}</p>
                </div>
                <span className="rounded-full border border-white/10 px-4 py-1.5 text-sm text-gray-400">
                  {item.year}
                </span>
              </div>
              <p className="mt-4 leading-7 text-gray-400">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-emerald-400">05 / Certifications</p>
          <h2 className="text-3xl font-bold">Continuous learning.</h2>
          <div className="mt-7 space-y-3">
            {certifications.map((certification) => (
              <div key={certification} className="flex gap-3 rounded-xl border border-white/10 p-5 text-gray-300">
                <span className="text-emerald-400">✓</span>
                <p>{certification}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/[0.04] p-8 sm:p-14">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-emerald-400">06 / Contact</p>
          <h2 className="max-w-2xl text-4xl font-bold sm:text-5xl">Let&apos;s connect and create something meaningful.</h2>
          <p className="mt-5 max-w-xl leading-7 text-gray-400">
            I&apos;m interested in learning opportunities and entry-level roles
            where I can contribute and grow.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:klpsantoshini@gmail.com"
              className="rounded-full bg-emerald-400 px-6 py-3 font-semibold text-black transition hover:bg-emerald-300"
            >
              Email Me ↗
            </a>
            <a
              href="https://www.linkedin.com/in/santhoshini-kothuri-b9aa61415"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 transition hover:border-emerald-400 hover:text-emerald-300"
            >
              LinkedIn ↗
            </a>
             {/* GitHub button added here */}
            <a
              href="https://github.com/santhoshini078"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 transition hover:border-emerald-400 hover:text-emerald-300"
            >
              GitHub ↗
            </a>
          </div>
          <p className="mt-8 text-sm text-gray-500">Based in Andhra Pradesh, India</p>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-7 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Santhoshini. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
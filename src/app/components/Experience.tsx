
const internships = [
  {
    role: "Data Science Intern",
    company: "BIST Technologies Pvt. Ltd.",
    period: "2024",
    details:
      "Worked on data analysis and learned how data science techniques can be applied to practical problems.",
  },
  {
    role: "Machine Learning Intern",
    company: "SkillDzire Technologies Pvt. Ltd.",
    period: "2025",
    details:
      "Worked on guided machine learning projects and learned model evaluation using accuracy, precision, recall, and F1-score.",
  },
];

const certifications = [
  "IBM SkillsBuild – AI Fundamentals Workshop (2024)",
  "Cisco Networking Academy – Python Essentials 1 & 2 (2025)",
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-5 py-24"
    >
      <p className="mb-3 text-sm uppercase tracking-[0.25em] text-emerald-400">
        05 / Experience
      </p>

      <h2 className="text-4xl font-bold">
        Internships & learning.
      </h2>

      <div className="mt-10 space-y-5">
        {internships.map((item) => (
          <article
            key={item.company}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <p className="text-sm text-emerald-400">
              {item.period}
            </p>

            <h3 className="mt-2 text-xl font-semibold">
              {item.role}
            </h3>

            <p className="mt-1 text-gray-300">
              {item.company}
            </p>

            <p className="mt-4 leading-7 text-gray-400">
              {item.details}
            </p>
          </article>
        ))}
      </div>

      <h3 className="mt-12 text-2xl font-semibold">
        Certifications
      </h3>

      <ul className="mt-5 space-y-3">
        {certifications.map((certificate) => (
          <li
            key={certificate}
            className="rounded-xl border border-white/10 p-4 text-gray-300"
          >
            {certificate}
          </li>
        ))}
      </ul>
    </section>
  );
}

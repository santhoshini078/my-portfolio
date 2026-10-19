export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-5 py-24"
    >
      <p className="mb-3 text-sm uppercase tracking-[0.25em] text-emerald-400">
        06 / Contact
      </p>

      <h2 className="text-4xl font-bold">
        Let&apos;s connect.
      </h2>

      <p className="mt-5 max-w-2xl leading-7 text-gray-400">
        I am interested in entry-level opportunities in software
        development, data science, and machine learning. Feel free
        to connect with me.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=klpsantoshini@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-emerald-400 px-6 py-3 font-semibold text-black transition hover:bg-emerald-300"
        >
          Email Me
        </a>

        <a
          href="https://github.com/santhoshini078"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/20 px-6 py-3 transition hover:border-emerald-400"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/santhoshini-kothuri-b9aa61415"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/20 px-6 py-3 transition hover:border-emerald-400"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
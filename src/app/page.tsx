
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b09] text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080b09]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <a
            href="#home"
            className="text-xl font-bold tracking-tight"
          >
            <span className="text-emerald-400">S</span>anthoshini
            <span className="text-emerald-400">.</span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
            <a className="transition hover:text-emerald-400" href="#about">
              About
            </a>
            <a className="transition hover:text-emerald-400" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-emerald-400" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-emerald-400" href="#experience">
              Experience
            </a>
            <a className="transition hover:text-emerald-400" href="#contact">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-emerald-400/60 px-4 py-2 text-sm text-emerald-300 transition hover:bg-emerald-400 hover:text-black"
          >
            Let&apos;s Connect
          </a>
        </nav>
      </header>

      {/* Page Sections */}
      <Hero />
      <About />
      <Skills />
      <Project />
      <Experience />
      <Contact />

      {/* Footer */}
      <footer className="border-t border-white/10 px-5 py-7 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Santhoshini. Built with Next.js &amp; Tailwind CSS.
        </p>
      </footer>
    </main>
  );
}

import Image from "next/image";
import TypingRoleInput from "../TypingRoleInput";

export default function AboutSection() {
  return (
    <section id="about" className="mb-10">
      <h2 className="section-title text-2xl font-medium mb-4">About Me</h2>
      <div className="panel-modern p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/profile.jpeg"
              alt="Rakshith profile"
              width={160}
              height={160}
              className="w-40 h-40 rounded-full object-cover shadow-xl shadow-cyan-900/30 border-4 border-cyan-300/80"
              priority
            />
            <TypingRoleInput />
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.linkedin.com/in/rakshith24/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="LinkedIn"
                  className="w-7 h-7 hover:scale-110 transition drop-shadow"
                />
              </a>
              <a
                href="https://github.com/rgowdar1"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub"
                  className="w-7 h-7 hover:scale-110 transition bg-white rounded-full"
                />
              </a>
              <a
                href="https://www.instagram.com/rakshitgowda_r/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <svg
                  className="w-7 h-7 hover:scale-110 transition"
                  viewBox="0 0 24 24"
                  fill="url(#instagramGradient)"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="instagramGradient"
                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#f58529" />
                      <stop offset="35%" stopColor="#dd2a7b" />
                      <stop offset="70%" stopColor="#8134af" />
                      <stop offset="100%" stopColor="#515bd4" />
                    </linearGradient>
                  </defs>
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5zm8.88 1.62a1.12 1.12 0 1 1 0 2.25 1.12 1.12 0 0 1 0-2.25zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
                </svg>
              </a>
            </div>
            <div className="chip-modern mt-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm text-gray-200">
              <svg
                className="w-4 h-4 text-cyan-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2a7 7 0 0 0-7 7c0 4.79 5.48 11.68 6.1 12.45a1.15 1.15 0 0 0 1.8 0C13.52 20.68 19 13.79 19 9a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
              </svg>
              <span>Bengaluru - India</span>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-base leading-6 text-gray-300 max-w-2xl">
              Hi, I'm Rakshith, a Senior Software Engineer with 5+ years of
              experience building reliable and scalable web products. I work
              across modern frontend stacks with strong backend exposure to
              deliver end-to-end solutions.
            </p>
            <p className="text-base leading-6 text-gray-300 max-w-2xl mt-3">
              I focus on clean architecture, performance, and maintainability,
              and I enjoy collaborating with cross-functional teams to ship
              high-quality features in fast-paced Agile environments.
            </p>
            <div className="mt-4">
              <h3 className="text-xl font-medium text-cyan-200 mb-3">
                What I am doing
              </h3>
              <div className="grid gap-3 md:grid-cols-3">
                <article className="chip-modern rounded-lg p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-900/30">
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      className="w-5 h-5 text-cyan-300"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M3 5h18v3H3V5zm2 5h14v9H5v-9zm2 2v5h10v-5H7z" />
                    </svg>
                    <h4 className="font-medium text-white">Web Architecture</h4>
                  </div>
                  <p className="text-sm text-gray-300">
                    I design scalable, future-ready web systems by turning
                    complex requirements into clear, efficient, and
                    high-performance architecture.
                  </p>
                </article>

                <article className="chip-modern rounded-lg p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-900/30">
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      className="w-5 h-5 text-cyan-300"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M4 5h16v14H4V5zm2 2v10h12V7H6zm2 2h8v2H8V9zm0 4h5v2H8v-2z" />
                    </svg>
                    <h4 className="font-medium text-white">
                      Front End Development
                    </h4>
                  </div>
                  <p className="text-sm text-gray-300">
                    I build polished, production-grade interfaces that balance
                    performance, accessibility, and modern UX for engaging
                    digital experiences.
                  </p>
                </article>

                <article className="chip-modern rounded-lg p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-900/30">
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      className="w-5 h-5 text-cyan-300"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M4 6h16v4H4V6zm0 6h16v6H4v-6zm2 2v2h3v-2H6zm5 0v2h7v-2h-7z" />
                    </svg>
                    <h4 className="font-medium text-white">Back End Design</h4>
                  </div>
                  <p className="text-sm text-gray-300">
                    I engineer robust and optimized backends with clean, secure,
                    and maintainable code built for scalability and long-term
                    reliability.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="mb-16">
      <h2 className="text-3xl font-bold mb-4 text-blue-600">About Me</h2>
      <div className="bg-white/5 p-6 rounded-lg border border-gray-700">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/profile.jpeg"
              alt="Rakshith profile"
              width={160}
              height={160}
              className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-blue-200"
              priority
            />
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
                  className="w-7 h-7 hover:scale-110 transition"
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
          </div>
          <div className="flex-1">
            <p className="text-lg text-gray-300 max-w-2xl">
              Hi, I'm Rakshith - a Senior Software Engineer with 5+ years of
              experience building scalable, high-performance frontend
              applications using React and TypeScript. I specialize in frontend
              performance optimization, micro-frontend architecture, and
              delivering enterprise-grade UI solutions, with solid backend
              exposure using Node.js and Java.
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mt-4">
              I enjoy building beautiful, performant, and accessible web
              applications and have proven experience leading cross-functional
              teams in Agile environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

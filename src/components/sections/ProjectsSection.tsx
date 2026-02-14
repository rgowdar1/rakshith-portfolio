export default function ProjectsSection() {
  return (
    <section id="projects" className="mb-10">
      <h2 className="section-title text-xl font-medium mb-6">Projects</h2>
      <div className="timeline-rail relative pl-6">
        <article className="timeline-card relative p-6">
          <span className="absolute -left-[38px] top-0 -translate-y-1/2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-white shadow">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M14.5 3.5c-2.8 1-5.3 3.4-6.8 5.8L4 10l2.7 2.7-.8 2.7 2.7-.8L11.3 17l.7-3.7c2.4-1.5 4.8-4 5.8-6.8l.7-2.1-2.1.7zM9.2 18.6l-1.8-1.8-2.9.9.9-2.9-1.8-1.8-1.7 5.6 5.6-1.7z" />
            </svg>
          </span>
          <div className="space-y-5">
            <div className="relative pb-4 border-b border-slate-700/70">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-medium text-white">My Portfolio</h3>
                <a
                  href="https://rakshith-portfolio-dun.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-300 hover:text-cyan-200"
                  title="Open project"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M10 13a5 5 0 0 0 7.07 0l1.41-1.41a5 5 0 0 0-7.07-7.07L10 5.93" />
                    <path d="M14 11a5 5 0 0 0-7.07 0L5.52 12.41a5 5 0 0 0 7.07 7.07L14 18.07" />
                  </svg>
                </a>
              </div>
              <p className="text-sm text-gray-300 mt-2">
                Built a Next.js-based portfolio website showcasing web design
                skills with a clean, responsive, and modern user interface.
              </p>
            </div>

            <div className="relative pb-4 border-b border-slate-700/70">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-medium text-white">Blackboard Learn</h3>
                <a
                  href="https://www.anthology.com/products/teaching-and-learning/learning-effectiveness/blackboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-300 hover:text-cyan-200"
                  title="Open project"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M10 13a5 5 0 0 0 7.07 0l1.41-1.41a5 5 0 0 0-7.07-7.07L10 5.93" />
                    <path d="M14 11a5 5 0 0 0-7.07 0L5.52 12.41a5 5 0 0 0 7.07 7.07L14 18.07" />
                  </svg>
                </a>
              </div>
              <p className="text-sm text-gray-300 mt-2">
                AI-powered cloud-based Learning Management System used by global
                institutions.
              </p>
            </div>

            <div className="relative pb-4 border-b border-slate-700/70">
              <h3 className="text-lg font-medium text-white">
                Skygeni - Sales Intelligence Platform
              </h3>
              <p className="text-sm text-gray-300 mt-2">
                Built analytical dashboards for a B2B sales intelligence platform.
              </p>
            </div>

            <div className="relative">
              <h3 className="text-lg font-medium text-white">
                Everwipe Alert System & Dashboard
              </h3>
              <p className="text-sm text-gray-300 mt-2">
                Developed an automated email alert system for production monitoring.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

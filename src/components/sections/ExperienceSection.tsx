export default function ExperienceSection() {
  return (
    <section id="experience" className="mb-10">
      <h2 className="section-title text-xl font-medium mb-6">Experience</h2>
      <div className="timeline-rail relative pl-6 space-y-6">
        <article className="timeline-card relative p-6">
          <span className="absolute -left-[38px] top-0 -translate-y-1/2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-600 text-white shadow">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4 6h16v4H4V6zm0 6h16v8H4v-8zm2 2v4h4v-4H6zm6 0v4h6v-4h-6z" />
            </svg>
          </span>
          <h3 className="text-lg font-medium text-white">
            Senior Software Engineer - Anthology.Inc
          </h3>
          <p className="text-sm text-cyan-300 mt-1">Feb 2023 - Present</p>
          <ul className="list-disc list-inside text-sm text-gray-400 mt-3">
            <li>
              Designed and developed enterprise-scale LMS features using React,
              TypeScript, and Java.
            </li>
            <li>
              Built reusable Material UI components and improved UI consistency.
            </li>
            <li>
              Optimized frontend performance, reducing page load time and
              improving user experience.
            </li>
            <li>
              Collaborated with cross-functional teams to deliver high-quality
              software on time.
            </li>
            <li>
              Led and mentored a team of 7 engineers, improving delivery
              timelines and code quality.
            </li>
          </ul>
        </article>

        <article className="timeline-card relative p-6">
          <span className="absolute -left-[38px] top-5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white shadow">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3 5h18v3H3V5zm2 5h14v9H5v-9zm2 2v5h10v-5H7z" />
            </svg>
          </span>
          <h3 className="text-lg font-medium text-white">
            Software Engineer - Quess Corp Pvt Ltd
          </h3>
          <p className="text-sm text-cyan-300 mt-1">Aug 2022 - Jan 2023</p>
          <ul className="list-disc list-inside text-sm text-gray-400 mt-3">
            <li>
              Developed and maintained web applications using React.js,
              AngularJS, and Java.
            </li>
            <li>
              Resolved production bugs and delivered feature enhancements across
              multiple modules.
            </li>
            <li>
              Actively contributed to Agile ceremonies, driving sprint planning,
              estimations, and timely delivery of features.
            </li>
          </ul>
        </article>

        <article className="timeline-card relative p-6">
          <span className="absolute -left-[38px] top-5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-violet-600 text-white shadow">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h4v2H8V8zm0 4h8v2H8v-2z" />
            </svg>
          </span>
          <h3 className="text-lg font-medium text-white">
            Software Engineer - Oncierre Systems Pvt Ltd
          </h3>
          <p className="text-sm text-cyan-300 mt-1">Feb 2021 - Aug 2022</p>
          <ul className="list-disc list-inside text-sm text-gray-400 mt-3">
            <li>
              Developed analytical dashboards using React, Node, D3, and
              Express.js for sales intelligence and reporting.
            </li>
            <li>
              Implemented authentication flows and optimized data-fetching
              strategies for large datasets.
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

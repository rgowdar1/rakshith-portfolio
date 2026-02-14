export default function EducationSection() {
  return (
    <section id="education" className="mb-10">
      <h2 className="section-title text-xl font-medium mb-6">Education</h2>
      <div className="timeline-rail relative pl-6 space-y-6">
        <article className="timeline-card relative p-5">
          <span className="absolute -left-[38px] top-0 -translate-y-1/2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-white shadow">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4 6h16v3H4V6zm1 5h14v7H5v-7zm2 2v3h3v-3H7zm5 0v3h5v-3h-5z" />
            </svg>
          </span>
          <h3 className="text-lg font-medium text-white">DCT Academy</h3>
          <p className="text-sm text-cyan-300 mt-1">2019 - 2020</p>
          <p className="text-sm text-gray-300 mt-2">
            Completed a course in the MERN stack (MongoDB, Express, React, and
            Node.js).
          </p>
        </article>

        <article className="timeline-card relative p-5">
          <span className="absolute -left-[38px] top-5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-600 text-white shadow">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 3 2 8l10 5 8-4v6h2V8L12 3zm-6 9v4c0 2.8 2.7 5 6 5s6-2.2 6-5v-4l-6 3-6-3z" />
            </svg>
          </span>
          <h3 className="text-lg font-medium text-white">
            Bachelor of Engineering ( BE )
          </h3>
          <p className="text-sm text-cyan-300 mt-1">2016 - 2019</p>
          <p className="text-sm text-gray-300 mt-2">
            Vishveshwaraya University, Bengaluru
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Specialized in Computer Science and Engineering
          </p>
        </article>

        <article className="timeline-card relative p-5">
          <span className="absolute -left-[38px] top-5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white shadow">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3 6h18v2H3V6zm2 4h14v8H5v-8zm3 2v4h2v-4H8zm4 0v4h2v-4h-2z" />
            </svg>
          </span>
          <h3 className="text-lg font-medium text-white">
            Diploma in Computer Engineering
          </h3>
          <p className="text-sm text-cyan-300 mt-1">2012 - 2015</p>
          <p className="text-sm text-gray-300 mt-2">
            Board of Technical Education, Bengaluru
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Studied core computer science subjects including databases,
            algorithms, and operating systems.
          </p>
        </article>

        <article className="timeline-card relative p-5">
          <span className="absolute -left-[38px] top-5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-violet-600 text-white shadow">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4 5h16v14H4V5zm2 2v10h12V7H6zm2 2h8v2H8V9zm0 4h5v2H8v-2z" />
            </svg>
          </span>
          <h3 className="text-lg font-medium text-white">Secondary Education</h3>
          <p className="text-sm text-cyan-300 mt-1">2009 - 2012</p>
          <p className="text-sm text-gray-300 mt-2">Board of Secondary Education, Bengaluru</p>
        </article>
      </div>
    </section>
  );
}

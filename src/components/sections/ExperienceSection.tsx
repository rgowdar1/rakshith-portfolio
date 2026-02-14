export default function ExperienceSection() {
  return (
    <section id="experience" className="mb-16">
      <h2 className="text-3xl font-bold mb-4 text-blue-500">Experience</h2>
      <div className="space-y-6">
        <div className="bg-white/5 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold text-white">
            Senior Software Engineer - Anthology.Inc
          </h3>
          <p className="text-gray-300">Feb 2023 - Present</p>
          <ul className="list-disc list-inside text-gray-400 mt-2">
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
        </div>

        <div className="bg-white/5 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold text-white">
            Software Engineer - Quess Corp Pvt Ltd
          </h3>
          <p className="text-gray-300">Aug 2022 - Jan 2023</p>
          <ul className="list-disc list-inside text-gray-400 mt-2">
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
        </div>

        <div className="bg-white/5 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold text-white">
            Software Engineer - Oncierre Systems Pvt Ltd
          </h3>
          <p className="text-gray-300">Feb 2021 - Aug 2022</p>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>
              Developed analytical dashboards using React, Node, D3, and
              Express.js for sales intelligence and reporting.
            </li>
            <li>
              Implemented authentication flows and optimized data-fetching
              strategies for large datasets.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold mb-4 text-blue-400">Projects</h2>
      <div className="bg-white/5 p-6 rounded-lg border border-gray-700">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white/10 rounded-lg shadow p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-2 text-white">
              Blackboard Learn
            </h3>
            <p className="text-gray-300 mb-2">
              AI-powered cloud-based Learning Management System used by global
              institutions.
            </p>
            <a
              href="https://www.anthology.com/products/teaching-and-learning/learning-effectiveness/blackboard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              More Information
            </a>
          </div>
          <div className="bg-white/10 rounded-lg shadow p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-2 text-white">
              Skygeni - Sales Intelligence Platform
            </h3>
            <p className="text-gray-300 mb-2">
              Built analytical dashboards for a B2B sales intelligence platform.
            </p>
            <a href="#" className="text-blue-400 hover:underline">
              View Project
            </a>
          </div>
          <div className="bg-white/10 rounded-lg shadow p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-2 text-white">
              Everwipe Alert System & Dashboard
            </h3>
            <p className="text-gray-300 mb-2">
              Developed an automated email alert system for production
              monitoring.
            </p>
            <a href="#" className="text-blue-400 hover:underline">
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

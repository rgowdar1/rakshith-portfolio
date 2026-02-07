import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* About Section */}
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
                <a href="https://www.linkedin.com/in/rakshith24/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-7 h-7 hover:scale-110 transition" />
                </a>
                <a href="https://github.com/rgowdar1" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-7 h-7 hover:scale-110 transition bg-white rounded-full" />
                </a>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-lg text-gray-300 max-w-2xl">
                Hi, I'm Rakshith — a Senior Software Engineer with 5+ years of experience building scalable, high-performance frontend applications using React and TypeScript. I specialize in frontend performance optimization, micro-frontend architecture, and delivering enterprise-grade UI solutions, with solid backend exposure using Node.js and Java.
              </p>
              <p className="text-lg text-gray-300 max-w-2xl mt-4">
                I enjoy building beautiful, performant, and accessible web applications and have proven experience leading cross-functional teams in Agile environments.
              </p>
            </div>
          </div>
        </div>         
      </section>

      {/* Education Section */}
      <section id="education" className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-blue-500">Education</h2>
        <div className="space-y-6">
          <div className="bg-white/5 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold text-white">Bachelor of Engineering ( BE )</h3>
            <p className="text-gray-300">Vishveshwaraya University, Bengaluru — 2016 - 2019</p>
            <p className="text-gray-400 mt-2">Specialized in Computer Science and Engineering</p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold text-white">Diploma in Computer Engineering</h3>
            <p className="text-gray-300">Board of Technical Education, Bengaluru — 2012 - 2015</p>
            <p className="text-gray-400 mt-2">Studied core computer science subjects including databases, algorithms, and operating systems.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold text-white">Secondary Education</h3>
            <p className="text-gray-300">Board of Secondary Education, Bengaluru — 2009 - 2012</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-blue-500">Experience</h2>
        <div className="space-y-6">
          <div className="bg-white/5 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold text-white">Senior Software Engineer — Anthology.Inc</h3>
            <p className="text-gray-300">Feb 2023 - Present</p>
            <ul className="list-disc list-inside text-gray-400 mt-2">
              <li>Designed and developed enterprise-scale LMS features using React, TypeScript, and 
Java.</li>
              <li>Built reusable Material UI components and improved UI consistency.</li>
              <li>Optimized frontend performance, reducing page load time and improving user 
experience. </li>
              <li>Collaborated with cross-functional teams to deliver high-quality software on time.</li>
              <li>Led and mentored a team of 7 engineers, improving delivery timelines and code quality. </li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold text-white">Software Engineer — Quess Corp Pvt Ltd</h3>
            <p className="text-gray-300">Aug 2022 - Jan 2023</p>
            <ul className="list-disc list-inside text-gray-400 mt-2">
             <li>Developed and maintained web applications using React.js, AngularJS, and Java.</li>
              <li>Resolved production bugs and delivered feature enhancements across multiple modules.</li>
              <li>Actively contributed to Agile ceremonies, driving sprint planning, estimations, and 
timely delivery of features.</li>
             </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold text-white">Software Engineer — Oncierre Systems Pvt Ltd</h3>
            <p className="text-gray-300">Feb 2021 - Aug 2022</p>
            <ul className="list-disc list-inside text-gray-400 mt-2">
              <li>Developed analytical dashboards using React, Node, D3, and Express.js for sales intelligence and reporting.</li>
              <li>Implemented authentication flows and optimized data-fetching strategies for large datasets.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-blue-400">Skills</h2>
        <div className="bg-white/5 p-6 rounded-lg border border-gray-700">
        {/* Frontend Skills */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-cyan-300">Frontend</h3>
          <ul className="flex flex-wrap gap-3">
            <li className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-3 py-1 rounded-full shadow flex items-center gap-1 text-sm">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-4 h-4" /> React.js
            </li>
            <li className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-3 py-1 rounded-full shadow flex items-center gap-1 text-sm">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-4 h-4 bg-white rounded-full" /> Next.js
            </li>
            <li className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-3 py-1 rounded-full shadow flex items-center gap-1 text-sm">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-4 h-4" /> JavaScript
            </li>
            <li className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-3 py-1 rounded-full shadow flex items-center gap-1 text-sm">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-4 h-4" /> TypeScript
            </li>
            <li className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-3 py-1 rounded-full shadow flex items-center gap-1 text-sm">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-4 h-4" /> HTML5
            </li>
            <li className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-3 py-1 rounded-full shadow flex items-center gap-1 text-sm">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-4 h-4" /> CSS3
            </li>
            <li className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-3 py-1 rounded-full shadow flex items-center gap-1 text-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12.006 5.938l-7.981 3.638-.236 10.626 8.217 3.799 8.217-3.799-.236-10.626-7.981-3.638zm0 1.574l6.844 3.133-.198 8.999-6.646 3.086-6.646-3.086-.198-8.999 6.844-3.133z" /></svg> Tailwind CSS
            </li>
            <li className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-3 py-1 rounded-full shadow flex items-center gap-1 text-sm">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" alt="Angular" className="w-4 h-4" /> Angular
            </li>
            <li className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-3 py-1 rounded-full shadow flex items-center gap-1 text-sm">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="Material UI" className="w-4 h-4" /> Material UI
            </li>
            <li className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-3 py-1 rounded-full shadow flex items-center gap-1 text-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><text x="2" y="18" fontSize="16" fontWeight="bold">MF</text></svg> Micro Frontend
            </li>
          </ul>
        </div>

        {/* Backend Skills */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-orange-300">Backend</h3>
          <ul className="flex flex-wrap gap-3">
            <li className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white px-3 py-1 rounded-full shadow flex items-center gap-1 text-sm">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-4 h-4" /> Node.js
            </li>
            <li className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white px-3 py-1 rounded-full shadow flex items-center gap-1 text-sm">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-4 h-4" /> Java
            </li>
            <li className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white px-3 py-1 rounded-full shadow flex items-center gap-1 text-sm">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" className="w-4 h-4" /> Spring Boot
            </li>
          </ul>
        </div>

        {/* DevOps & Tools */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-green-300">DevOps & Tools</h3>
          <ul className="flex flex-wrap gap-3">
            <li className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-3 py-1 rounded-full shadow flex items-center gap-1 text-sm">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="AWS" className="w-4 h-4" /> AWS
            </li>
            <li className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-3 py-1 rounded-full shadow flex items-center gap-1 text-sm">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" alt="Jenkins" className="w-4 h-4" /> Jenkins
            </li>
            <li className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-3 py-1 rounded-full shadow flex items-center gap-1 text-sm">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" alt="Kubernetes" className="w-4 h-4" /> Kubernetes
            </li>
            <li className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-3 py-1 rounded-full shadow flex items-center gap-1 text-sm">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-4 h-4 bg-white rounded-full" /> GitHub
            </li>
            <li className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-3 py-1 rounded-full shadow flex items-center gap-1 text-sm">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" alt="Stash" className="w-4 h-4" /> Stash
            </li>
            <li className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-3 py-1 rounded-full shadow flex items-center gap-1 text-sm">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure DevOps" className="w-4 h-4" /> ADO
            </li>
            <li className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-3 py-1 rounded-full shadow flex items-center gap-1 text-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg> Jira
            </li>
            <li className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-3 py-1 rounded-full shadow flex items-center gap-1 text-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> Confluence
            </li>
            <li className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-3 py-1 rounded-full shadow flex items-center gap-1 text-sm">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg" alt="DigitalOcean" className="w-4 h-4" /> DigitalOcean
            </li>
          </ul>
        </div>

        {/* Database Skills */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-purple-300">Databases</h3>
          <ul className="flex flex-wrap gap-3">
            <li className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full shadow flex items-center gap-1 text-sm">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-4 h-4" /> PostgreSQL
            </li>
            <li className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full shadow flex items-center gap-1 text-sm">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-4 h-4" /> MongoDB
            </li>
            <li className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full shadow flex items-center gap-1 text-sm">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-4 h-4" /> MySQL
            </li>
            <li className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full shadow flex items-center gap-1 text-sm">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google BigQuery" className="w-4 h-4" /> BigQuery
            </li>
            <li className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full shadow flex items-center gap-1 text-sm">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google BigTable" className="w-4 h-4" /> BigTable
            </li>
          </ul>
        </div>
      </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-blue-400">Projects</h2>
        <div className="bg-white/5 p-6 rounded-lg border border-gray-700">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white/10 rounded-lg shadow p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-2 text-white">Blackboard Learn (Anthology)</h3>
            <p className="text-gray-300 mb-2">AI-powered cloud-based Learning Management System used by global institutions.</p>
            <a href="https://www.anthology.com/products/teaching-and-learning/learning-effectiveness/blackboard" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">More Information</a>
          </div>
          <div className="bg-white/10 rounded-lg shadow p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-2 text-white">Skygeni — Sales Intelligence Platform</h3>
            <p className="text-gray-300 mb-2">Built analytical dashboards for a B2B sales intelligence platform.</p>
            <a href="#" className="text-blue-400 hover:underline">View Project</a>
          </div>
           <div className="bg-white/10 rounded-lg shadow p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-2 text-white">Everwipe Alert System & Dashboard</h3>
            <p className="text-gray-300 mb-2">Developed an automated email alert system for production monitoring.</p>
            <a href="#" className="text-blue-400 hover:underline">View Project</a>
          </div>
        </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-blue-400">Contact</h2>
        <p className="text-lg text-gray-300 mb-6">Feel free to reach out for collaborations or just a friendly hello!</p>
        
        <div className="flex items-center gap-6">
          {/* Email Button */}
          <a href="mailto:rakshith.rg24@gmail.com" className="inline-block bg-blue-600 text-white p-3 rounded-full font-semibold hover:bg-blue-700 transition" title="Email">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Email" className="w-7 h-7" />
          </a>
          
          {/* Resume Button */}
          <a href="https://drive.google.com/file/d/176p90kPD0-mla9fSlw9fP2hgyLMXGd_I/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 8l-4-2m4 2l4-2" />
            </svg>
            Download Resume
          </a>
        </div>
      </section>
    </div>
  );
}

export default function EducationSection() {
  return (
    <section id="education" className="mb-16">
      <h2 className="text-3xl font-bold mb-4 text-blue-500">Education</h2>
      <div className="space-y-6">
        <div className="bg-white/5 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold text-white">
            Bachelor of Engineering ( BE )
          </h3>
          <p className="text-gray-300">
            Vishveshwaraya University, Bengaluru ( 2016 - 2019 ) 
          </p>
          <p className="text-gray-400 mt-2">
            Specialized in Computer Science and Engineering
          </p>
        </div>
        <div className="bg-white/5 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold text-white">
            Diploma in Computer Engineering
          </h3>
          <p className="text-gray-300">
            Board of Technical Education, Bengaluru ( 2012 - 2015 ) 
          </p>
          <p className="text-gray-400 mt-2">
            Studied core computer science subjects including databases,
            algorithms, and operating systems.
          </p>
        </div>
        <div className="bg-white/5 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold text-white">
            Secondary Education
          </h3>
          <p className="text-gray-300">
            Board of Secondary Education, Bengaluru ( 2009 - 2012 )
          </p>
        </div>
      </div>
    </section>
  );
}

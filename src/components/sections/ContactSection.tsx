import ContactForm from "../ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="mb-10">
      <h2 className="section-title text-2xl font-medium mb-4">Contact</h2>
      <div className="mb-6 flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/rakshith24/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#0077B5] shadow-md shadow-sky-900/40 hover:opacity-90 transition"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn"
            className="w-6 h-6"
          />
        </a>
        <a
          href="https://github.com/rgowdar1"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-slate-900 border border-slate-500/60 shadow-md shadow-slate-900/40 hover:bg-slate-800 transition"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            className="w-6 h-6 bg-white rounded-full"
          />
        </a>
        <a
          href="https://www.instagram.com/rakshitgowda_r/"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
          className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 shadow-md shadow-rose-900/40 hover:opacity-90 transition"
        >
          <svg
            className="w-5 h-5 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5zm8.88 1.62a1.12 1.12 0 1 1 0 2.25 1.12 1.12 0 0 1 0-2.25zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
          </svg>
        </a>
        <a
          href="https://drive.google.com/uc?export=download&id=1UUIljrwn50zFKNZ6VMrnLmX4ShrEsvo3"
          target="_blank"
          rel="noopener noreferrer"
          title="Download Resume"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-600 px-4 py-2 text-white font-medium shadow-md shadow-fuchsia-900/40 hover:from-fuchsia-500 hover:to-pink-500 transition"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 16V4m0 12l-4-4m4 4l4-4M4 20h16"
            />
          </svg>
          <span>Download Resume</span>
        </a>
      </div>

      <p className="text-base text-gray-300 mb-6">
        Feel free to reach out for collaborations or just a friendly hello!
      </p>
      <ContactForm />
    </section>
  );
}

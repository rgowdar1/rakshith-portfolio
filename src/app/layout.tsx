import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "../components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rakshith R - Senior Software Engineer",
  description:
    "Welcome to the personal website of Rakshith R, a Senior Software Engineer with expertise in full-stack development, cloud computing, and scalable web applications. Explore my projects, experience, and skills in software engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen flex flex-col text-gray-100 ${geistSans.variable} ${geistMono.variable} font-sans`}
      >
        <header className="w-full py-3 px-2 sm:px-6 bg-black/60 backdrop-blur-md shadow-md sticky top-0 z-10">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-3 sm:gap-4 sm:justify-between">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white whitespace-nowrap">
              Rakshith R
            </span>
            <nav className="w-full sm:w-auto flex flex-wrap items-center justify-center sm:justify-end gap-x-4 gap-y-2 sm:gap-6 text-sm sm:text-base">
              <a
                href="#about"
                className="text-gray-200 hover:text-blue-400 transition"
              >
                About
              </a>
              <a
                href="#education"
                className="text-gray-200 hover:text-blue-400 transition"
              >
                Education
              </a>
              <a
                href="#experience"
                className="text-gray-200 hover:text-blue-400 transition"
              >
                Experience
              </a>
              <a
                href="#skills"
                className="text-gray-200 hover:text-blue-400 transition"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-gray-200 hover:text-blue-400 transition"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-200 hover:text-blue-400 transition"
              >
                Contact
              </a>
              <a
                href="https://drive.google.com/file/d/176p90kPD0-mla9fSlw9fP2hgyLMXGd_I/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 sm:px-4 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition font-semibold text-sm"
              >
                Resume
              </a>
            </nav>
          </div>
        </header>
        <main className="flex-1 w-full max-w-6xl mx-auto px-2 sm:px-6 py-8">
          {children}
        </main>
        <footer className="w-full py-6 px-4 bg-black/60 backdrop-blur-md border-t text-center text-sm text-gray-300">
          <p className="mb-1">
            Website Designed & Developed by <strong>Rakshith R.</strong>
          </p>
          <p>©Copyright {new Date().getFullYear()}.</p>
        </footer>

        {/* Persistent Home button */}
        <ScrollToTop />
      </body>
    </html>
  );
}

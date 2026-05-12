"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { ErrorBoundary } from "@/components/error-boundary";
import { initGA, trackPageView } from "@/lib/analytics";

export default function ResumePage() {
  useEffect(() => {
    initGA();
    trackPageView("/resume");
  }, []);

  return (
    <ErrorBoundary>
      <main className="min-h-screen bg-slate-950 text-slate-100">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-md focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>

        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <header className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Resume</p>
                <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Abhishekh Bihari</h1>
                <div className="mt-4 flex flex-col gap-2 text-sm text-slate-300 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                  <span>+91-9508903921</span>
                  <span>abhishekhbihari07@gmail.com</span>
                  <span>Greater Noida, Uttar Pradesh, India</span>
                  <a className="text-blue-300 hover:text-blue-200" href="https://www.linkedin.com/in/abhishekh-bihari-5532ba250" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a className="text-blue-300 hover:text-blue-200" href="https://github.com/abhishekhbihari007" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a className="text-blue-300 hover:text-blue-200" href="https://portfolio1-rho-woad.vercel.app/" target="_blank" rel="noopener noreferrer">Portfolio</a>
                </div>
              </div>
              <a
                href="/abhishekh-bihari-resume.pdf"
                download
                className="inline-flex w-fit items-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </header>

            <section className="mb-10">
              <div className="mb-4 border-l-4 border-slate-500 pl-4">
                <h2 className="text-2xl font-semibold text-white">Professional Summary</h2>
              </div>
              <p className="max-w-4xl text-slate-300 leading-8">
                Frontend Developer skilled in React, TypeScript, and Tailwind CSS, with experience building responsive and high-performance web applications. Proficient in creating reusable UI components, integrating REST APIs, and delivering clean, user-friendly interfaces. Seeking an entry-level frontend developer role.
              </p>
            </section>

            <section className="mb-10">
              <div className="mb-4 border-l-4 border-slate-500 pl-4">
                <h2 className="text-2xl font-semibold text-white">Experience</h2>
              </div>

              <div className="space-y-8">
                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-base font-semibold text-white">Bioresearch Community</p>
                      <p className="text-sm text-slate-400">Frontend Developer Intern - Bangalore / Remote</p>
                    </div>
                    <span className="text-sm text-slate-500">Sep 2025 - Apr 2026</span>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
                    <li>Developed responsive user interfaces and reusable React components for the IGT and ProLearn platforms, improving consistency and maintainability.</li>
                    <li>Integrated REST APIs for dashboards and learning modules, enhancing application performance and reducing loading delays.</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-base font-semibold text-white">Zidio Development</p>
                      <p className="text-sm text-slate-400">Full Stack Development Intern - Bengaluru / Remote</p>
                    </div>
                    <span className="text-sm text-slate-500">Jun 2025 - Sep 2025</span>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
                    <li>Built and deployed web application modules using HTML, CSS, JavaScript, Node.js, and Express.js.</li>
                    <li>Refactored frontend components and improved code structure to simplify maintenance and scalability.</li>
                    <li>Participated in code reviews and quality assurance processes to improve application stability.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <div className="mb-4 border-l-4 border-slate-500 pl-4">
                <h2 className="text-2xl font-semibold text-white">Education</h2>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6 text-slate-300">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-base font-semibold text-white">IILM University, Greater Noida</p>
                    <p className="text-sm text-slate-400">B.Tech in Computer Science</p>
                  </div>
                  <span className="text-sm text-slate-500">2022 - 2026</span>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <div className="mb-4 border-l-4 border-slate-500 pl-4">
                <h2 className="text-2xl font-semibold text-white">Projects</h2>
              </div>
              <div className="space-y-6">
                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-base font-semibold text-white">LeafSense Plant Leaf Health Detector</p>
                      <p className="text-sm text-slate-400">ML-enabled plant health diagnosis platform</p>
                    </div>
                    <span className="text-sm text-slate-500">React, TypeScript, Flask, PyTorch, Tailwind CSS</span>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
                    <li>Developed a web application to classify plant leaf images as Healthy or Diseased using EfficientNet-B0.</li>
                    <li>Built a React frontend and Flask API backend with image preprocessing and structured JSON output.</li>
                    <li>Added confidence thresholding and plant-image filtering for more reliable predictions.</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-base font-semibold text-white">ProLearn - Expert-Led Learning Platform</p>
                      <p className="text-sm text-slate-400">E-learning platform with course catalog</p>
                    </div>
                    <span className="text-sm text-slate-500">React, TypeScript, Vite, Tailwind CSS</span>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
                    <li>Built a scalable frontend with responsive multi-page navigation and reusable components.</li>
                    <li>Optimized layout and performance for a smooth user experience across devices.</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-base font-semibold text-white">AgriDoctor Magazine Website</p>
                      <p className="text-sm text-slate-400">Content-driven agricultural newsletter website</p>
                    </div>
                    <span className="text-sm text-slate-500">HTML, CSS, JavaScript</span>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
                    <li>Built and maintained a responsive content-rich website with improved page performance.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-10 grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                <div className="mb-4 border-b border-slate-700 pb-4">
                  <h2 className="text-2xl font-semibold text-white">Skills</h2>
                </div>
                <div className="space-y-4 text-slate-300">
                  <div>
                    <p className="font-semibold text-white">Programming Languages</p>
                    <p className="mt-2 text-sm text-slate-300">HTML5, CSS3, JavaScript (ES6+), TypeScript, Java, Python</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Frameworks / Libraries</p>
                    <p className="mt-2 text-sm text-slate-300">React.js, Tailwind CSS, Redux Toolkit, Next.js, Flask, PyTorch</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Tools & Platforms</p>
                    <p className="mt-2 text-sm text-slate-300">Git, GitHub, VS Code, Vercel, Render</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Concepts</p>
                    <p className="mt-2 text-sm text-slate-300">Responsive Design, REST APIs, Machine Learning, Image Classification, UI/UX Fundamentals</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                <div className="mb-4 border-b border-slate-700 pb-4">
                  <h2 className="text-2xl font-semibold text-white">Certifications</h2>
                </div>
                <ul className="space-y-4 text-slate-300">
                  <li>
                    <p className="font-semibold text-white">AICTE + IBM SkillsBuild</p>
                    <p className="text-sm text-slate-500">Front-End Web Development - Certificate of Completion - Sep 2025</p>
                  </li>
                  <li>
                    <p className="font-semibold text-white">Zidio Development</p>
                    <p className="text-sm text-slate-500">Full Stack Internship Certificate - Oct 2025</p>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <div className="mb-4 border-l-4 border-slate-500 pl-4">
                <h2 className="text-2xl font-semibold text-white">Achievements</h2>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <p className="text-base font-semibold text-white">NCC - &apos;B&apos; Certificate (Leadership)</p>
                  <span className="text-sm text-slate-500">Sep 2020</span>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <div className="mb-4 border-l-4 border-slate-500 pl-4">
                <h2 className="text-2xl font-semibold text-white">Volunteer Work</h2>
              </div>
              <div className="space-y-6 text-slate-300">
                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-base font-semibold text-white">NCC Activities</p>
                      <p className="mt-2 text-sm text-slate-500">National Cadet Corps</p>
                    </div>
                    <span className="text-sm text-slate-500">Sep 2020</span>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5">
                    <li>Completed NCC &quot;B&quot; Certificate training and developed discipline and leadership.</li>
                    <li>Participated in campus-level drills and social service events.</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-base font-semibold text-white">Event Coordinator</p>
                      <p className="mt-2 text-sm text-slate-500">IILM University</p>
                    </div>
                    <span className="text-sm text-slate-500">2025</span>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5">
                    <li>Managed the Job Fair event, coordinating students, faculty, and visitors.</li>
                    <li>Oversaw scheduling, registration, and on-day logistics for smooth execution.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
              <div className="mb-4 border-b border-slate-700 pb-4">
                <h2 className="text-2xl font-semibold text-white">Languages</h2>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <p className="font-semibold text-white">English</p>
                  <p className="mt-2 text-slate-300">Professional proficiency</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Hindi</p>
                  <p className="mt-2 text-slate-300">Native proficiency</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </ErrorBoundary>
  );
}

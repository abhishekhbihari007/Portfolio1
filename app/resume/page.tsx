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
                Frontend Developer focused on building responsive, high-performance web applications using modern technologies like React and TypeScript. Experienced in delivering production-ready user interfaces with a strong emphasis on speed, usability, and clean design. Skilled in developing structured and scalable UI components, ensuring cross-browser compatibility, and creating seamless user experiences. Seeking an entry-level frontend role to contribute to efficient, user-focused products.
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
                    <li>Delivered responsive UI and reusable React components for IGT and ProLearn platforms, improving page consistency and maintainability.</li>
                    <li>Integrated REST APIs for dashboards and learning modules, reducing UI load delays and improving performance.</li>
                    <li>Collaborated with backend and design teams using Agile practices to ensure accessibility and polished UX.</li>
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
                    <li>Built and deployed front-end and back-end modules using HTML, CSS, JavaScript, and Node.js.</li>
                    <li>Refactored UI components and improved code structure to simplify future maintenance.</li>
                    <li>Participated in code reviews and QA workflows to increase release stability.</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-base font-semibold text-white">AICTE Edunet Foundation (with IBM SkillsBuild)</p>
                      <p className="text-sm text-slate-400">Front-End Web Development Intern - Remote</p>
                    </div>
                    <span className="text-sm text-slate-500">Aug 2025 - Sep 2025</span>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
                    <li>Completed practical front-end training in responsive HTML5, CSS3, and JavaScript.</li>
                    <li>Built polished layouts and practiced version control and modern development workflows.</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-base font-semibold text-white">SmartBridge (Google Cloud) - Virtual Internship</p>
                      <p className="text-sm text-slate-400">Generative AI Intern - Remote</p>
                    </div>
                    <span className="text-sm text-slate-500">Jul 2025 - Sep 2025</span>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
                    <li>Completed a virtual Generative AI internship using Google Cloud and Vertex AI concepts.</li>
                    <li>Explored prompt design and cloud deployment strategies for AI workflows.</li>
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
                  <span className="text-sm text-slate-500">2022 - Expected May 2026</span>
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
                      <p className="text-sm text-slate-400">Team project for live ML-enabled plant health diagnosis</p>
                    </div>
                    <span className="text-sm text-slate-500">React, TypeScript, Flask, PyTorch, timm, Tailwind</span>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
                    <li>Collaborated with team members to deliver a live app that classifies plant leaf images as Healthy or Diseased.</li>
                    <li>Built dataset preprocessing from PlantVillage images, mapping healthy folders to Healthy and symptomatic folders to Diseased.</li>
                    <li>Trained EfficientNet-B0 in PyTorch/timm and added an ImageNet-based plant/leaf filter to reject non-plant uploads.</li>
                    <li>Added Test-Time Augmentation (TTA) and a 50% confidence threshold for stable, actionable predictions.</li>
                    <li>Built a React + Vite frontend and Flask API backend with Pillow/torchvision preprocessing and structured JSON output.</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-base font-semibold text-white">AgriDoctor Magazine Website</p>
                      <p className="text-sm text-slate-400">Content-driven website for agricultural newsletter</p>
                    </div>
                    <span className="text-sm text-slate-500">HTML, CSS, JavaScript</span>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
                    <li>Built and maintained a content-heavy website with a structured layout and clean UI.</li>
                    <li>Improved page performance and ensured responsive usability across devices.</li>
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
                    <li>Built a scalable React 18 + TypeScript frontend optimized for performance.</li>
                    <li>Delivered responsive multi-page navigation and polished layout structure.</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-base font-semibold text-white">IGT Institute Website</p>
                      <p className="text-sm text-slate-400">Responsive educational website</p>
                    </div>
                    <span className="text-sm text-slate-500">React, TypeScript, Vite</span>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
                    <li>Built a scalable multi-page site using reusable components and clean layout design.</li>
                    <li>Ensured consistent UX and improved site responsiveness.</li>
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
                    <p className="font-semibold text-white">Google Cloud Generative AI (SmartBridge)</p>
                    <p className="text-sm text-slate-500">Virtual Internship Completion - Sep 2025</p>
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

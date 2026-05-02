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
                  <span>abhishekhbihari007@gmail.com</span>
                  <span>abhishekhbihari007</span>
                  <span>Greater Noida, UP, India</span>
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
                <h2 className="text-2xl font-semibold text-white">Objective</h2>
              </div>
              <p className="max-w-3xl text-slate-300 leading-8">
                Fourth-year Computer Science student building complete, responsive websites and ML-enabled web tools. Experienced in delivering production-ready UI using modern tools and AI-assisted workflows, with a major project focused on a live plant leaf health detection website. Skilled in creating structured, high-performance interfaces with strong emphasis on execution, consistency, and real-world usability.
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
                      <p className="text-sm text-slate-400">Frontend Developer Intern • Bengaluru / Remote</p>
                    </div>
                    <span className="text-sm text-slate-500">Sep 2025 – Present</span>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
                    <li>Contributed to company platforms IGT (College Website) and ProLearn (Learning Portal) using React.js, TypeScript, and Tailwind CSS.</li>
                    <li>Developed reusable UI components, integrated REST APIs for dashboards and learning modules, and improved component performance.</li>
                    <li>Delivered complete responsive UI pages including landing sections and multi-page layouts with focus on usability.</li>
                    <li>Focused on structured layouts, performance optimization, and fast development cycles to meet project timelines.</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-base font-semibold text-white">Zidio Development</p>
                      <p className="text-sm text-slate-400">Frontend Developer Intern • Bengaluru / Remote</p>
                    </div>
                    <span className="text-sm text-slate-500">Jun 2025 – Sep 2025</span>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
                    <li>Worked on front- and back-end modules using HTML, CSS, JavaScript and Node.js; implemented API integrations and deployment basics.</li>
                    <li>Improved frontend architecture for maintainability and created modular components.</li>
                    <li>Participated in code reviews and testing workflows to support stable delivery.</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-base font-semibold text-white">AICTE Edunet Foundation</p>
                      <p className="text-sm text-slate-400">Front-End Web Development Intern • Remote</p>
                    </div>
                    <span className="text-sm text-slate-500">Aug 2025 – Sep 2025</span>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
                    <li>Completed government-backed front-end training; implemented responsive layouts in HTML5, CSS3 and JavaScript.</li>
                    <li>Gained understanding of version control, modern workflows, and UI best practices.</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-base font-semibold text-white">SmartBridge (Google Cloud)</p>
                      <p className="text-sm text-slate-400">Virtual Internship • Remote</p>
                    </div>
                    <span className="text-sm text-slate-500">Jul 2025 – Sep 2025</span>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
                    <li>Completed virtual internship on Generative AI using Google Cloud services and Vertex AI concepts.</li>
                    <li>Explored prompt design, model workflows, and cloud-based deployment strategies.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <div className="mb-4 border-l-4 border-slate-500 pl-4">
                <h2 className="text-2xl font-semibold text-white">Education</h2>
              </div>
              <div className="space-y-6 text-slate-300">
                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-base font-semibold text-white">IILM University, Greater Noida</p>
                      <p className="text-sm text-slate-400">B.Tech in Computer Science</p>
                    </div>
                    <span className="text-sm text-slate-500">2022 – 2026</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-base font-semibold text-white">Patna High School</p>
                      <p className="text-sm text-slate-400">Senior Secondary</p>
                    </div>
                    <span className="text-sm text-slate-500">2019 – 2020</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-base font-semibold text-white">Prarambika School</p>
                      <p className="text-sm text-slate-400">Secondary Education</p>
                    </div>
                    <span className="text-sm text-slate-500">2017 – 2018</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <div className="mb-4 border-l-4 border-slate-500 pl-4">
                <h2 className="text-2xl font-semibold text-white">Major Project</h2>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-base font-semibold text-white">LeafSense Plant Leaf Health Detector</p>
                    <p className="text-sm text-slate-400">Major academic ML project for live plant leaf image diagnosis</p>
                  </div>
                  <span className="text-sm text-slate-500">React, TypeScript, Flask, PyTorch, timm, Tailwind</span>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
                  <li>Collaborated with team members to design and build a live web application classifying plant leaf images as Healthy or Diseased using a LeafSense binary dataset derived from PlantVillage.</li>
                  <li>Constructed dataset preprocessing to map folders with &quot;healthy&quot; to Healthy and symptomatic folders (early_blight, rust, etc.) to Diseased.</li>
                  <li>Trained EfficientNet-B0 in PyTorch/timm and added a secondary ImageNet-based plant/leaf filter to reject non-plant uploads.</li>
                  <li>Added Test-Time Augmentation (TTA) and a 50% confidence threshold for stable, actionable predictions.</li>
                  <li>Created a React + Vite frontend and Flask REST API backend with Pillow / torchvision preprocessing and structured JSON inference output.</li>
                </ul>
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
                      <p className="text-base font-semibold text-white">ProLearn - Expert-Led Learning Platform</p>
                      <p className="text-sm text-slate-400">Modern e-learning platform with structured course catalog</p>
                    </div>
                    <span className="text-sm text-slate-500">React, TypeScript, Vite, Tailwind CSS</span>
                  </div>
                  <a className="mt-3 inline-flex text-sm font-medium text-blue-400 hover:text-blue-300" href="https://prolearn.org.in/" target="_blank" rel="noopener noreferrer">Live Site</a>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
                    <li>Built a scalable React 18 + TypeScript frontend using Vite for optimized performance.</li>
                    <li>Developed responsive multi-page UI with structured layouts and polished navigation.</li>
                    <li>Focused on performance optimization and real-world usability across devices.</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-base font-semibold text-white">IGT - Institute Website (React)</p>
                      <p className="text-sm text-slate-400">Responsive educational institution website</p>
                    </div>
                    <span className="text-sm text-slate-500">React, TypeScript, Vite</span>
                  </div>
                  <a className="mt-3 inline-flex text-sm font-medium text-blue-400 hover:text-blue-300" href="https://igteu.in/" target="_blank" rel="noopener noreferrer">Live Site</a>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
                    <li>Built a complete multi-page responsive website showcasing programs and departments.</li>
                    <li>Used reusable components and structured page layouts for consistency and scalability.</li>
                    <li>Optimized performance and ensured smooth user experience across devices.</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-base font-semibold text-white">Personal Portfolio Website</p>
                      <p className="text-sm text-slate-400">Developer portfolio showcasing projects and skills</p>
                    </div>
                    <span className="text-sm text-slate-500">HTML, CSS, JavaScript</span>
                  </div>
                  <a className="mt-3 inline-flex text-sm font-medium text-blue-400 hover:text-blue-300" href="https://portfolio-iota-azure-34.vercel.app/" target="_blank" rel="noopener noreferrer">Live Site</a>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
                    <li>Built a fully responsive portfolio website with clean UI and structured navigation.</li>
                    <li>Optimized for fast loading and smooth performance across devices.</li>
                    <li>Implemented state management and prepared scalable integration for backend APIs.</li>
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
                    <p className="mt-2 text-sm text-slate-300">HTML5, CSS3, JavaScript (ES6+), TypeScript, Java</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Frameworks / Libraries</p>
                    <p className="mt-2 text-sm text-slate-300">React.js, Tailwind CSS, Redux Toolkit, Next.js (basic)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Tools & Platforms</p>
                    <p className="mt-2 text-sm text-slate-300">Git, GitHub, VS Code, Chrome, Vercel, Render</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Concepts</p>
                    <p className="mt-2 text-sm text-slate-300">Responsive Design, REST APIs, Component Architecture, UI/UX Fundamentals</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                <div className="mb-4 border-b border-slate-700 pb-4">
                  <h2 className="text-2xl font-semibold text-white">Certifications & Achievements</h2>
                </div>
                <ul className="space-y-4 text-slate-300">
                  <li>
                    <p className="font-semibold text-white">AICTE + IBM SkillsBuild Front-End Web Development</p>
                    <p className="text-sm text-slate-500">Certificate of Completion • Sep 2025</p>
                  </li>
                  <li>
                    <p className="font-semibold text-white">Google Cloud Generative AI (SmartBridge)</p>
                    <p className="text-sm text-slate-500">Virtual Internship Completion • Sep 2025</p>
                  </li>
                  <li>
                    <p className="font-semibold text-white">Zidio Development Frontend Internship Certificate</p>
                    <p className="text-sm text-slate-500">Oct 2025</p>
                  </li>
                  <li>
                    <p className="font-semibold text-white">NCC B Certificate (Leadership)</p>
                    <p className="text-sm text-slate-500">Sep 2020</p>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <div className="mb-4 border-l-4 border-slate-500 pl-4">
                <h2 className="text-2xl font-semibold text-white">Volunteer & Extracurricular</h2>
              </div>
              <div className="space-y-6 text-slate-300">
                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6">
                  <p className="text-base font-semibold text-white">NCC Activities</p>
                  <p className="mt-2 text-sm text-slate-500">National Cadet Corps • Sep 2020</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5">
                    <li>Completed NCC “B” Certificate training; developed discipline and leadership.</li>
                    <li>Participated in campus-level drills and social service events.</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6">
                  <p className="text-base font-semibold text-white">Event Coordinator</p>
                  <p className="mt-2 text-sm text-slate-500">IILM University • 2025</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5">
                    <li>Managed the Job Fair event held at IILM University, coordinating with students, faculty, and visiting companies.</li>
                    <li>Oversaw scheduling, registrations, and on-day logistics to ensure smooth event execution.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
              <div className="mb-4 border-b border-slate-700 pb-4">
                <h2 className="text-2xl font-semibold text-white">Additional Information</h2>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <p className="font-semibold text-white">Languages</p>
                  <p className="mt-2 text-slate-300">English (Professional), Hindi (Native)</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Interests</p>
                  <p className="mt-2 text-slate-300">Travelling, Gaming</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </ErrorBoundary>
  );
}

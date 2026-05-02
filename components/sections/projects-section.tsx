"use client"

import { motion } from "framer-motion";
import { SectionBackgroundShapes } from "@/components/ui/section-background-shapes";
import { ProjectOnboardingCard } from "@/components/ui/project-onboarding-card";

const projectImages = [
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
];

interface Project {
  name: string;
  description: string;
  techStack: string[];
  highlights: string[];
  githubUrl: string;
  liveUrl: string;
  label: string;
}

const projects: Project[] = [
  {
    name: "LeafSense Plant Leaf Health Detector",
    description: "Major academic ML project for live plant leaf image diagnosis.",
    techStack: ["React", "TypeScript", "Flask", "PyTorch", "timm", "Tailwind"],
    highlights: [
      "Collaborated with team members to build a live app classifying plant leaf images as Healthy or Diseased.",
      "Trained EfficientNet-B0 in PyTorch/timm with a secondary plant/leaf filter for non-plant uploads.",
      "Created a React + Vite frontend and Flask REST API backend with structured JSON inference output.",
    ],
    githubUrl: "",
    liveUrl: "",
    label: "Major Project",
  },
  {
    name: "ProLearn - Expert-Led Learning Platform",
    description: "Modern e-learning platform with structured course catalog.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    highlights: [
      "Built a scalable React 18 + TypeScript frontend using Vite for optimized performance.",
      "Developed responsive multi-page UI with structured layouts and polished navigation.",
      "Focused on performance optimization and real-world usability across devices.",
    ],
    githubUrl: "",
    liveUrl: "https://prolearn.org.in/",
    label: "Live Frontend",
  },
  {
    name: "IGT - Institute Website (React)",
    description: "Responsive educational institution website.",
    techStack: ["React", "TypeScript", "Vite"],
    highlights: [
      "Built a complete multi-page responsive website showcasing programs and departments.",
      "Used reusable components and structured page layouts for consistency and scalability.",
      "Optimized performance and ensured smooth user experience across devices.",
    ],
    githubUrl: "",
    liveUrl: "https://igteu.in/",
    label: "Institute Site",
  },
];

export function ProjectsSection() {
  return (
    <div className="max-w-7xl mx-auto relative px-4">
      <SectionBackgroundShapes variant="default" className="absolute inset-0 -z-10" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-12 max-w-3xl text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
        <p className="mt-6 text-base leading-7 text-neutral-400 md:text-lg">
          Selected frontend work focused on responsive interfaces, clean component structure, and practical user flows.
        </p>
      </motion.div>

      <motion.div layout className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            layout
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.45,
              delay: index * 0.08,
              type: "spring",
              stiffness: 220,
              damping: 24,
            }}
            className={index === 0 ? "lg:col-span-2" : undefined}
          >
            <ProjectOnboardingCard
              imageSrc={projectImages[index]}
              title={project.name}
              description={project.description}
              label={project.label}
              highlights={project.highlights}
              techStack={project.techStack}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              featured={index === 0}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

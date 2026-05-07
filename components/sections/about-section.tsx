"use client"

import { motion } from "framer-motion";
import { SectionBackgroundShapes } from "@/components/ui/section-background-shapes";

export function AboutSection() {
  return (
    <div className="max-w-4xl mx-auto relative px-4 lg:px-8">
      <SectionBackgroundShapes variant="minimal" className="absolute inset-0 -z-10" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
      >
        <p className="text-lg text-neutral-300 leading-relaxed mb-6">
          I&apos;m a passionate Frontend Developer with hands-on experience building responsive, polished web applications. I specialize in user interface design, performance optimization, and creating seamless interactions using React, TypeScript, and Tailwind CSS.
        </p>
        <p className="text-lg text-neutral-300 leading-relaxed mb-6">
          During internships at Bioresearch Community, Zidio Development, and other organizations, I delivered frontend work for college websites, learning portals, and collaboration tools. I focus on clean, maintainable UI code, accessible experiences, and strong visual design.
        </p>
        <p className="text-lg text-neutral-300 leading-relaxed">
          I&apos;m available for frontend development roles and freelance work, especially where UI quality, responsive design, and modern web performance matter. I bring modern best practices and a strong dedication to building interfaces that users love.
        </p>
      </motion.div>
    </div>
  );
}


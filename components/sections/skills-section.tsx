"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// --- Types ---
interface SkillItem {
  name: string;
  image: string;
  category: string;
  description: string;
}

// --- Data (Skills mapped to the testimonial structure) ---
const skills: SkillItem[] = [
  {
    name: "HTML5",
    category: "Frontend",
    description: "Writing semantic, accessible markup for structured and search-friendly web pages.",
    image: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
  },
  {
    name: "CSS3",
    category: "Styling",
    description: "Creating responsive layouts, polished visual systems, and smooth interface states.",
    image: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
  },
  {
    name: "JavaScript",
    category: "Language",
    description: "Building interactive browser experiences with modern ES6+ patterns and clean DOM logic.",
    image: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
  },
  {
    name: "TypeScript",
    category: "Language",
    description: "Improving frontend reliability and maintainability with type-safe application code.",
    image: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
  },
  {
    name: "React.js",
    category: "Frontend",
    description: "Building dynamic user interfaces with reusable components, hooks, and stateful flows.",
    image: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  },
  {
    name: "Next.js",
    category: "Frontend",
    description: "Creating optimized React applications with routing, rendering strategies, and performance in mind.",
    image: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    description: "Rapidly building responsive, custom interfaces with utility-first styling.",
    image: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
  },
  {
    name: "Redux Toolkit",
    category: "State Management",
    description: "Managing predictable frontend state for complex screens and interactive application flows.",
    image: "https://cdn.worldvectorlogo.com/logos/redux.svg",
  },
  {
    name: "Figma",
    category: "UI Design",
    description: "Translating designs into clean, responsive frontend components with strong visual accuracy.",
    image: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg",
  },
];

const firstColumn = skills.slice(0, 3);
const secondColumn = skills.slice(3, 6);
const thirdColumn = skills.slice(6, 9);

// --- Sub-Components ---
const SkillsColumn = (props: {
  className?: string;
  skills: SkillItem[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent list-none m-0 p-0"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {props.skills.map(({ name, image, category, description }, i) => (
              <motion.li 
                key={`${index}-${i}`}
                aria-hidden={index === 1 ? "true" : "false"}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
                className="p-8 rounded-3xl border border-white/10 shadow-2xl max-w-xs w-full bg-white/5 backdrop-blur-md transition-all duration-300 cursor-default select-none group" 
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center p-2 ring-1 ring-white/20 group-hover:ring-blue-500/50 transition-all">
                      <Image
                        src={image}
                        alt={`${name} icon`}
                        width={48}
                        height={48}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-bold text-white text-lg leading-tight">
                        {name}
                      </h4>
                      <span className="text-sm text-blue-400 font-medium">
                        {category}
                      </span>
                    </div>
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed font-medium">
                    {description}
                  </p>
                </div>
              </motion.li>
            ))}
          </React.Fragment>
        ))}
      </motion.ul>
    </div>
  );
};

export function SkillsSection() {
  return (
    <div className="max-w-7xl mx-auto relative px-4 flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
        <p className="text-neutral-400 mt-6 max-w-lg mx-auto text-lg">
          Frontend technologies and design tools I use to build responsive, polished web experiences.
        </p>
      </motion.div>

      <div 
        className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[600px] overflow-hidden"
      >
        <SkillsColumn skills={firstColumn} duration={20} />
        <SkillsColumn skills={secondColumn} className="hidden md:block" duration={25} />
        <SkillsColumn skills={thirdColumn} className="hidden lg:block" duration={22} />
      </div>
    </div>
  );
}

"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { SectionBackgroundShapes } from "@/components/ui/section-background-shapes";

const items = [
  {
    id: "01",
    title: "Who am I?",
    content:
      "I'm Abhishekh Bihari — a Frontend Developer dedicated to crafting high-performance, user-centric web experiences that are visually compelling and intuitive.",
  },
  {
    id: "02",
    title: "My Specialization",
    content:
      "I specialize in building responsive frontend applications with React, Next.js, and TypeScript, focusing on UI quality, accessibility, and modern performance patterns.",
  },
  {
    id: "03",
    title: "Professional Experience",
    content:
      "I've honed my frontend skills through internships at Bioresearch Community and Zidio Development, delivering polished interfaces for college websites and collaboration platforms.",
  },
  {
    id: "04",
    title: "My Creative Approach",
    content:
      "For me, development is about creating delightful, easy-to-use interfaces. I focus on clean component architecture, intuitive UI/UX, and fast page interactions.",
  },
  {
    id: "05",
    title: "Continuous Improvement",
    content:
      "I continuously refine frontend experiences by applying modern web standards, performance tuning, and user-focused design principles.",
  },
  {
    id: "06",
    title: "Let's Collaborate",
    content:
      "Whether you need a polished frontend, landing page, or web app UI, I'm open to new frontend challenges. Reach out by email to discuss your project.",
  },
];

export function FAQSection() {
  return (
    <div className="max-w-4xl mx-auto relative py-20 px-4 lg:pl-20">
      <SectionBackgroundShapes variant="minimal" className="absolute inset-0 -z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 italic tracking-tighter uppercase">Insights</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
      </motion.div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {items.map((item) => (
          <AccordionItem 
            value={item.id} 
            key={item.id} 
            className="border-b border-white/10 last:border-0 group overflow-hidden"
          >
            <AccordionTrigger className="text-left py-8 duration-300 hover:no-underline cursor-pointer data-[state=open]:text-blue-500 [&>svg]:hidden">
              <div className="flex flex-1 items-start gap-6 md:gap-12">
                <span className="text-xs font-mono text-neutral-500 mt-2">{item.id}</span>
                <h3 className="uppercase text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter transition-all duration-300 group-hover:pl-4">
                  {item.title}
                </h3>
              </div>
            </AccordionTrigger>

            <AccordionContent className="text-neutral-400 text-lg md:text-xl leading-relaxed pb-8 pl-12 md:pl-24 max-w-2xl">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}


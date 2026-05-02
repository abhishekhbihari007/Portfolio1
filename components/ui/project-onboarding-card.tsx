"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectOnboardingCardProps {
  className?: string;
  imageSrc: string;
  title: string;
  description: string;
  label: string;
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  techStack?: string[];
  featured?: boolean;
}

const ProjectOnboardingCard = React.forwardRef<HTMLDivElement, ProjectOnboardingCardProps>(
  (
    {
      className,
      imageSrc,
      title,
      description,
      label,
      highlights,
      githubUrl,
      liveUrl,
      techStack = [],
      featured = false,
    },
    ref
  ) => {
    const fadeUpAnimationVariants = {
      hidden: { opacity: 0, y: 10 },
      show: { opacity: 1, y: 0, transition: { type: "spring" } },
    };

    return (
      <motion.article
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        className={cn(
          "group h-full w-full overflow-hidden rounded-lg border border-white/10 bg-zinc-950/80 shadow-xl shadow-black/20 backdrop-blur-lg transition-colors duration-300 hover:border-white/20",
          className
        )}
        ref={ref}
      >
        <div className={cn("grid h-full", featured ? "lg:grid-cols-[1.05fr_1fr]" : "")}>
          <motion.div variants={fadeUpAnimationVariants} className="relative min-h-[230px] overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              fill
              sizes={featured ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
            <div className="absolute left-4 top-4 rounded-md border border-white/15 bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
              {label}
            </div>
          </motion.div>

          <div className={cn("flex h-full flex-col p-5", featured ? "md:p-7" : "")}>
            <motion.div variants={fadeUpAnimationVariants} className="space-y-3">
              <h3 className={cn("font-bold leading-tight text-white", featured ? "text-2xl md:text-3xl" : "text-xl")}>
                {title}
              </h3>
              <p className="text-sm leading-6 text-neutral-300">{description}</p>
            </motion.div>

            <motion.ul variants={fadeUpAnimationVariants} className="mt-5 space-y-3">
              {highlights.slice(0, featured ? 3 : 2).map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm leading-6 text-neutral-300">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-cyan-300" />
                  <span>{highlight}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUpAnimationVariants} className="mt-5 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/10 bg-white/[0.06] px-2.5 py-1 text-xs font-medium text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeUpAnimationVariants} className="mt-auto flex flex-wrap items-center gap-3 pt-6">
              {liveUrl ? (
                <Button className="h-10 rounded-md bg-white text-black hover:bg-neutral-200" asChild>
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Site
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              ) : (
                <span className="rounded-md border border-white/10 px-3 py-2 text-sm font-medium text-neutral-400">
                  Academic project
                </span>
              )}

              {githubUrl && (
                <Button variant="outline" className="h-10 rounded-md border-white/10 bg-transparent text-white hover:bg-white/10 hover:text-white" asChild>
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    Code
                    <Github className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}

              {(liveUrl || githubUrl) && (
                <a
                  href={liveUrl || githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-neutral-300 transition-colors hover:text-white"
                >
                  View project
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </motion.article>
    );
  }
);

ProjectOnboardingCard.displayName = "ProjectOnboardingCard";

export { ProjectOnboardingCard };

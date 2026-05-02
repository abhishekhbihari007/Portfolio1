"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // To avoid a hydration mismatch or running document code on the server:
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    
    const mouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const checkHoverStatus = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Triggers hover state if the hovered element is an anchor tag, button, or explicitly asks for hover interactions.
      const isInteractive = 
        target.closest("a") || 
        target.closest("button") || 
        target.closest("[role='button']") ||
        target.closest("input") ||
        target.closest("textarea");
      
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mousemove", checkHoverStatus);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mousemove", checkHoverStatus);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isMounted.current || !isVisible) return null;

  // Variants for cursor states
  const variants = {
    default: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      height: 30,
      width: 30,
      backgroundColor: "rgba(255, 255, 255, 0)",
      border: "1px solid rgba(255, 255, 255, 0.4)",
      mixBlendMode: "difference" as const,
    },
    hover: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      height: 60,
      width: 60,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      mixBlendMode: "difference" as const,
      border: "1px solid rgba(255, 255, 255, 0.6)",
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 z-[100] rounded-full pointer-events-none hidden md:block" // Hidden on smaller mobile devices
      variants={variants}
      animate={isHovering ? "hover" : "default"}
      transition={{
        type: "spring",
        stiffness: 700,
        damping: 40,
        mass: 0.1
      }}
    />
  );
};

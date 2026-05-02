"use client";

import { useEffect, useState } from "react";
import { SocialLinks } from "@/components/ui/social-links";
import type { SocialLink } from "@/components/ui/social-links";

interface SectionSocialLinksProps {
  links: SocialLink[];
  floatingButtonColor?: string;
}

export function SectionSocialLinks({ links, floatingButtonColor }: SectionSocialLinksProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = document.querySelector("#home");
    if (!section) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return <SocialLinks links={links} floatingButtonColor={floatingButtonColor} />;
}

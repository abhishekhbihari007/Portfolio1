import { PortfolioCover } from "@/components/sections/portfolio-cover-section";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { EducationSection } from "@/components/sections/education-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ContactSection } from "@/components/sections/contact-section";
import { SectionSocialLinks } from "@/components/ui/section-social-links";
import { ErrorBoundary } from "@/components/error-boundary";
import { socialLinks } from "@/config/social-links";
import { ClientWrapper } from "@/components/client-wrapper";

export default function Home() {
  return (
    <ErrorBoundary>
      <main className="min-h-screen bg-black relative">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-md focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>
      <SectionSocialLinks links={socialLinks} floatingButtonColor="bg-slate-700" />
      <ClientWrapper />
      <div id="main-content" className="relative z-10">
        {/* Portfolio Cover Section - No navbar here */}
        <PortfolioCover />
        
        {/* Hero Section with 3D Interactive */}
        <section id="home" className="min-h-screen flex items-center justify-center py-16">
          <HeroSection />
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-4">
          <AboutSection />
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 px-4">
          <SkillsSection />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-4">
          <ProjectsSection />
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 px-4">
          <EducationSection />
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-16 px-4">
          <CertificationsSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4">
          <ContactSection />
        </section>
      </div>
    </main>
    </ErrorBoundary>
  );
}

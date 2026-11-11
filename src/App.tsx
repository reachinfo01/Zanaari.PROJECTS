import { useState, useEffect } from 'react';
import { Project } from './types/portfolio';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Projects } from './components/Projects';
import { Capabilities } from './components/Capabilities';
import { SocialsSection } from './components/SocialsSection';
import { InquirySection } from './components/InquirySection';
import { InquiryModal } from './components/InquiryModal';
import { ProjectModal } from './components/ProjectModal';
import { Footer } from './components/Footer';
import { FloatingSocials } from './components/FloatingSocials';

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [preselectedScope, setPreselectedScope] = useState('');

  // Handle inquiry trigger with preselected project
  const handleInquireAboutProject = (projectTitle: string) => {
    setPreselectedScope(`Commission Inquiry for ${projectTitle}`);
    setInquiryModalOpen(true);
  };

  const handleOpenGeneralInquiry = () => {
    setPreselectedScope('');
    setInquiryModalOpen(true);
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0A0A0A] selection:bg-[#0A0A0A] selection:text-[#FFFFFF] flex flex-col font-sans">
      {/* 1. Preloader Animation */}
      {showPreloader && (
        <Preloader onComplete={() => setShowPreloader(false)} />
      )}

      {/* 2. Sticky Navigation Bar */}
      <Navbar onOpenInquire={handleOpenGeneralInquiry} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero onExploreClick={scrollToProjects} />

        {/* 4. Philosophy & Impact Metrics */}
        <Philosophy />

        {/* 5. Selected Projects (Asymmetric Editorial Grid) */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 6. Sectors & Capabilities (Expandable 01-04 Accordion) */}
        <Capabilities />

        {/* 7. Official Socials & Direct Lines */}
        <SocialsSection />

        {/* 8. Interactive Inquiry Section */}
        <InquirySection initialProjectScope={preselectedScope} />
      </main>

      {/* 9. Floating Quick-Access Socials & Messaging Dock */}
      <FloatingSocials />

      {/* 10. Comprehensive Footer with Live Global Clocks */}
      <Footer />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquireAboutProject={handleInquireAboutProject}
      />

      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        preselectedScope={preselectedScope}
      />
    </div>
  );
}

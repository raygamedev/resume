import React, { useEffect, useRef, useState } from "react";
import { Profile } from "../Profile/Profile";
import { Skills } from "../Skills/Skills";
import { Resume } from "../Resume/Resume";
import { ActiveSection } from "../../enum.ts";

interface HomeProps {
  setFloatingTop: React.Dispatch<React.SetStateAction<number>>;
  floatingRef: React.RefObject<HTMLDivElement | null>;
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<ActiveSection>>;
}

export const Home: React.FC<HomeProps> = ({
  setFloatingTop,
  floatingRef,
  activeSection,
  setActiveSection,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Set up Intersection Observer to detect which section is active.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = container.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.getAttribute("data-section");
            if (sectionName) {
              setActiveSection(sectionName as ActiveSection);
            }
          }
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [setActiveSection]);

  // Update the floating object's position when the active section changes.
  useEffect(() => {
    if (!activeSection || !containerRef.current) return;

    const activeElem = containerRef.current.querySelector(
      `section[data-section="${activeSection}"]`,
    );

    if (activeElem instanceof HTMLElement) {
      const floatingHeight = floatingRef.current?.offsetHeight || 0;
      const targetTop =
        activeElem.offsetTop + activeElem.offsetHeight / 2 - floatingHeight / 2;
      setFloatingTop(targetTop);
    }
  }, [activeSection, floatingRef, setFloatingTop]);

  // Function to scroll smoothly to a section
  const scrollToSection = (sectionName: string) => {
    if (containerRef.current) {
      const section = containerRef.current.querySelector(
        `section[data-section="${sectionName}"]`,
      );
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="pt-16">
      <div className="flex justify-center grow overflow-x-hidden">
        {/* Relative container for scrolling */}
        <div
          ref={containerRef}
          className="w-3/5 p-4 flex flex-col items-center justify-start gap-30 relative scroll-smooth"
        >
          <section
            className="h-screen flex items-center"
            data-section={ActiveSection.ABOUT}
          >
            <Profile />
          </section>
          <section
            className="h-screen flex items-center"
            data-section={ActiveSection.CORE}
          >
            <Resume />
          </section>
          <section
            className="h-screen flex items-center"
            data-section={ActiveSection.SKILLS}
          >
            <Skills />
          </section>
        </div>
      </div>
    </div>
  );
};

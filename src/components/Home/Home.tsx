import React, { useEffect, useRef, useState } from "react";
import { Profile } from "../Profile/Profile";
import { Skills } from "../Skills/Skills";
import { Resume } from "../Resume/Resume";

interface HomeProps {
  setFloatingTop: React.Dispatch<React.SetStateAction<number>>;
  floatingRef: React.RefObject<HTMLDivElement | null>;
}

export const Home: React.FC<HomeProps> = ({ setFloatingTop, floatingRef }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
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
              setActiveSection(sectionName);
            }
          }
        });
      },
      { threshold: 0.5 }, // adjust threshold as needed
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Update the floating object's position when the active section changes.
  useEffect(() => {
    if (!activeSection || !containerRef.current) return;

    const activeElem = containerRef.current.querySelector(
      `section[data-section="${activeSection}"]`,
    );

    if (activeElem instanceof HTMLElement) {
      const floatingHeight = floatingRef.current?.offsetHeight || 0;
      // Calculate the vertical center of the active section
      const targetTop =
        activeElem.offsetTop + activeElem.offsetHeight / 2 - floatingHeight / 2;
      setFloatingTop(targetTop);
    }
  }, [activeSection, floatingRef, setFloatingTop]);

  return (
    <div className="pt-16">
      <div className="flex justify-center grow overflow-x-hidden">
        {/* This container is "relative" so our absolutely positioned floating object is positioned relative to it */}
        <div
          ref={containerRef}
          className="w-3/5 p-4 flex flex-col items-center justify-start gap-30 relative scroll-smooth"
        >
          <section className="h-screen items-center" data-section="profile">
            <Profile />
          </section>
          <section className="h-screen items-center" data-section="resume">
            <Resume />
          </section>
          <section className="h-screen items-center" data-section="skills">
            <Skills />
          </section>
        </div>
      </div>
      {/* For debugging / visual feedback */}
      <div className="fixed bottom-4 right-4 p-2 bg-gray-200 text-black rounded">
        Active Section: {activeSection ?? "None"}
      </div>
    </div>
  );
};

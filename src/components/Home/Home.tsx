import React, { useEffect, useRef } from "react";
import { Profile } from "../Profile/Profile";
import { Core } from "../Core/Core.tsx";
import { Sections } from "../../enum.ts";
import { useNavStore } from "../../store.ts";
import { Resume } from "../Resume/Resume.tsx";

interface HomeProps {
  setFloatingTop: React.Dispatch<React.SetStateAction<number>>;
  floatingRef: React.RefObject<HTMLDivElement | null>;
}

export const Home: React.FC<HomeProps> = ({ setFloatingTop, floatingRef }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeSection = useNavStore((state) => state.activeSection);
  const setActiveSection = useNavStore((state) => state.setSection);
  const triggerScroll = useNavStore((state) => state.triggerScroll);
  const setTriggerScroll = useNavStore((state) => state.setTriggerScroll);

  // Set up Intersection Observer to detect which section is active.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = container.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            const sectionName = entry.target.getAttribute("data-section");
            // Only update if the new section is different from the current activeSection.
            if (sectionName && sectionName !== activeSection) {
              setActiveSection(sectionName as Sections);
            }
          }
        });
      },
      // { threshold: 0.2 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, [activeSection, setActiveSection]);

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
  //

  useEffect(() => {
    if (triggerScroll === activeSection) return;
    if (!containerRef.current) return;

    const section = containerRef.current.querySelector(
      `section[data-section="${triggerScroll}"]`,
    );
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setTriggerScroll(Sections.NONE); // reset trigger
    }
  }, [triggerScroll, activeSection, setTriggerScroll]);

  return (
    <div className="pt-16">
      <div className="flex justify-center grow overflow-x-hidden">
        {/* Relative container for scrolling */}
        <div
          ref={containerRef}
          className="min-h-screen w-3/5 p-4 flex flex-col items-center justify-start gap-30 relative scroll-smooth"
        >
          <section
            className="min-h-screen flex items-center opacity-0  transition-all duration-500"
            data-section={Sections.ABOUT}
          >
            <Profile />
          </section>
          <section
            className="min-h-screen flex items-center "
            data-section={Sections.CORE}
          >
            <Core />
          </section>
          <section
            className="min-h-screen flex items-center "
            data-section={Sections.RESUME}
          >
            <Resume />
          </section>
          <section
            className="min-h-screen flex items-center opacity-0  transition-all duration-500"
            data-section={Sections.SKILLS}
          >
            {/*<Skills />*/}
          </section>
        </div>
      </div>
    </div>
  );
};

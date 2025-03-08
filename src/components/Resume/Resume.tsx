import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import { ResumeCard } from "./ResumeCard";
import "./Resume.css";
import { useTranslation } from "react-i18next";
import { ExperienceData } from "../../types";

export const Resume = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const experience = t("resume.experience", {
    returnObjects: true,
  }) as ExperienceData[];

  // Use the containerRef as the scroll target so that the timeline reacts to the container’s scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  // Map scroll progress to scaleY value (from 0 to 1)
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    // Select elements you want to animate (could be card elements or parts of the card)
    const sections = container.querySelectorAll(".hide, .hide-date");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="w-screen items-center flex flex-col gap-30 relative"
      ref={containerRef}
    >
      <h3 className="text-6xl font-proxima">Experience</h3>

      {/* Timeline Line */}
      <motion.div
        className="timeline-line"
        style={{
          scaleY: scaleY,
          transformOrigin: "top", // so it scales from the top down
        }}
      />

      {experience.map((item, index) => (
        // Option 1: Use Framer Motion’s built-in "whileInView" (if ResumeCard is a motion component)
        <ResumeCard exp={item} key={index} />
      ))}
    </div>
  );
};

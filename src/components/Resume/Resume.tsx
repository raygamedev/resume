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
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
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
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-95%"]);

  return (
    <div className="bg-neutral-800 w-full">
      <section
        ref={targetRef}
        className="relative h-[2000vh] bg-neutral-900 w-[80vw]"
      >
        <div className="sticky top-0 flex h-screen  overflow-hidden">
          {/* Horizontal timeline line, centered vertically */}
          {/* Cards sliding horizontally */}
          <motion.div
            ref={containerRef}
            style={{ x }}
            className="flex flex-col gap-4 relative z-10 "
          >
            <div className="flex flex-row justify-around mt-20">
              {experience.map((exp) => {
                return <ResumeCard exp={exp} className="hide" />;
              })}
            </div>
            <div className="h-0.5 bg-gray-500 w-[12000px] transform -translate-y-1/2"></div>
            <div className="flex flex-row justify-around">
              {experience.map((exp) => {
                return <div className="hide-date">{exp.dates}</div>;
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

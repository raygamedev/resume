import React, { useEffect, useRef } from "react";
// import { useTranslation } from "react-i18next";
import { SkillCard } from "../Skills/SkillCard.tsx";
import "./Resume.css";
import { Skills } from "../../skills.ts";

export interface ExperienceData {
  jobTitle: string;
  company: string;
  dates: string;
  responsibilities: string[];
}
export const Resume: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const sections = container.querySelectorAll(".hide");

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

  const FrontendSkills = [
    Skills.react,
    Skills.redux,
    Skills.typescript,
    Skills.tailwind,
  ];
  const BackendSkills = [Skills.python, Skills.unity, Skills.rust];

  return (
    <div
      className="flex grow flex-col mt-30 flex-wrap gap-80"
      ref={containerRef}
    >
      <div className={"hide flex flex-col gap-5"}>
        <div className={"text-7xl  border-b-2"}>FRONTEND</div>
        <div className={"text-2xl w-3xl mt-5"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
        </div>
        <div className={"flex flex-row gap-8"}>
          {FrontendSkills.map((skill) => (
            <SkillCard className={"hide logo"} skill={skill} />
          ))}
        </div>
      </div>

      <div className={"hide flex flex-col gap-3"}>
        <div className={"text-7xl"}>BACKEND</div>
        <div className={"text-2xl w-3xl"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
        </div>
        <div className={"flex flex-row gap-8"}>
          {BackendSkills.map((skill) => (
            <SkillCard className={"hide logo"} skill={skill} />
          ))}
        </div>
      </div>
      <div className={"hide flex flex-col gap-5"}>
        <div className={"text-7xl"}>DEVOPS CI/CD</div>
        <div className={"text-2xl w-3xl"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
        </div>
        <div className={"flex flex-row gap-8"}>
          {BackendSkills.map((skill) => (
            <SkillCard className={"hide logo"} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

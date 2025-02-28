import React, { useEffect, useRef } from "react";
// import { useTranslation } from "react-i18next";
import { SkillCard } from "../Skills/SkillCard.tsx";
import "./Core.css";
import { Skills } from "../../skills.ts";
import { useTranslation } from "react-i18next";
import { CoreData } from "../../types.ts";
import { useMobileStore } from "../../store.ts";

export interface ExperienceData {
  jobTitle: string;
  company: string;
  dates: string;
  responsibilities: string[];
}
export const Core: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileStore((state) => state.isMobile);

  const { t } = useTranslation();
  const core = t("resume.core", {
    returnObjects: true,
  }) as CoreData;

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

  const data = [
    {
      title: "Frontend",
      subTitle: core.frontend,
      skills: [Skills.react, Skills.redux, Skills.typescript, Skills.tailwind],
    },
    {
      title: "Backend",
      subTitle: core.backend,
      skills: [Skills.python, Skills.csharp, Skills.rust],
    },
    {
      title: "DevOps CI/CD",
      subTitle: core.cicd,
      skills: [Skills.python, Skills.csharp, Skills.rust],
    },
  ];

  if (isMobile) {
    return (
      <div
        className="flex  items-center w-screen grow flex-col mt-30 flex-wrap gap-80"
        ref={containerRef}
      >
        {data.map((item, index) => (
          <div className={"hide w-7/8 flex flex-col gap-5"}>
            <div className={"flex  flex-col h-full"}>
              <div className="title  text-2xl font-jetbrains ">
                0{index + 1}
              </div>
              <div className={"text-4xl  font-proxima"}>
                {item.title.toUpperCase()}
              </div>
              <div
                className={
                  "text-[18px]  mt-5 mb-5 text-zinc-400 font-jetbrains"
                }
              >
                {item.subTitle}
              </div>
              <div className={"w-full border-b-[0.5px] mb-10"} />
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div
      className="flex grow flex-col mt-30 flex-wrap gap-80"
      ref={containerRef}
    >
      {data.map((item, index) => (
        <div className={"hide flex flex-col gap-5"}>
          <div className={"flex flex-col"}>
            <div className="title text-6xl font-jetbrains ">0{index + 1}</div>
            <div className={"text-7xl font-proxima"}>
              {item.title.toUpperCase()}
            </div>
            <div
              className={"text-[18px]  mt-5 mb-5 text-zinc-400 font-jetbrains"}
            >
              {item.subTitle}
            </div>
            <div className={"w-full border-b-[0.5px] mb-10"} />
            <div className={"flex flex-row gap-8"}>
              {item.skills.map((skill) => (
                <SkillCard className={"hide logo"} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

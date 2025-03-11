import { useRef } from "react";
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

  return (
    <div
      className="w-screen items-center flex flex-col gap-30 relative"
      ref={containerRef}
    >
      <h3 className="text-6xl font-proxima">Experience</h3>

      {experience.map((item, index) => (
        // Option 1: Use Framer Motion’s built-in "whileInView" (if ResumeCard is a motion component)
        <ResumeCard exp={item} key={index} />
      ))}
    </div>
  );
};

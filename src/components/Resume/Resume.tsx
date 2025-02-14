import React from "react";
import { ResumeCard } from "./Card";
import { useTranslation } from "react-i18next";

export interface ExperienceData {
  jobTitle: string;
  company: string;
  dates: string;
  responsibilities: string[];
}
export const Resume: React.FC = () => {
  const { t } = useTranslation();
  const experienceData = t("resume.experience", {
    returnObjects: true,
  }) as ExperienceData[];
  console.log(experienceData);
  return (
    <div className="w-full grow flex flex-row flex-wrap gap-10">
      {experienceData.map((item, index) => (
        <ResumeCard key={index} exp={item} />
      ))}
    </div>
  );
};

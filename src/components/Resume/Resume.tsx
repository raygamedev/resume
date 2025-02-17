import React from "react";
import { useTranslation } from "react-i18next";
import { Text } from "../Text/Text.tsx";

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
    <div className="grow flex flex-row flex-wrap gap-10">
      <Text className={"text-7xl"}>Full Stack</Text>
    </div>
  );
};

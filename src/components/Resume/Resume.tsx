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
    <div className=" flex flex-row flex-wrap gap-10">
      <Text className={"text-7xl"}>FULLSTACK</Text>
      {/* Lorem ipsum */}

      <Text className={"text-2xl"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec eros
        eu urna imperdiet imperdiet. Suspendisse potenti. Phasellus euismod, dui
        eu feugiat feugiat, augue diam accumsan est, non pretium dui enim id
        risus. Nam sit amet tincidunt est. Vestibulum malesuada, elit at cursus
      </Text>
      <Text className={"text-7xl"}>FRONTEND</Text>
      <Text className={"text-2xl"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec eros
        eu urna imperdiet imperdiet. Suspendisse potenti. Phasellus euismod, dui
        eu feugiat feugiat, augue diam accumsan est, non pretium dui enim id
        risus. Nam sit amet tincidunt est. Vestibulum malesuada, elit at cursus
      </Text>
      <Text className={"text-7xl"}>BACKEND</Text>
      <Text className={"text-2xl"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec eros
        eu urna imperdiet imperdiet. Suspendisse potenti. Phasellus euismod, dui
        eu feugiat feugiat, augue diam accumsan est, non pretium dui enim id
        risus. Nam sit amet tincidunt est. Vestibulum malesuada, elit at cursus
      </Text>
      <Text className={"text-7xl"}>DevOps CI/CD</Text>
      <Text className={"text-2xl"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec eros
        eu urna imperdiet imperdiet. Suspendisse potenti. Phasellus euismod, dui
        eu feugiat feugiat, augue diam accumsan est, non pretium dui enim id
        risus. Nam sit amet tincidunt est. Vestibulum malesuada, elit at cursus
      </Text>
    </div>
  );
};

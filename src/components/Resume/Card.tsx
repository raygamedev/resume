import { useTranslation } from "react-i18next";
import { ExperienceData } from "./Resume.tsx";

interface ResumeCardProps {
  exp: ExperienceData;
}

export const ResumeCard: React.FC<ResumeCardProps> = ({ exp }) => {
  const { t } = useTranslation();
  return (
    <div
      className={
        "p-4 bg-white font-mono dark:bg-gray-800 rounded shadow-md w-xl h-48" +
        "flex flex-col justify-around"
      }
    >
      <div
        className={
          "flex h-10 min-h-max bg-gray-700 px-3 rounded-md text-center items-center flex-row justify-between"
        }
      >
        <div className="dark:text-gray-900">{exp.jobTitle}</div>
        <div className={""}>{exp.company}</div>
        <div className={""}>{exp.dates}</div>
      </div>
      <div className={"p-3 flex flex-col gap-3"}>
        {exp.responsibilities.map((item, index) => (
          <div
            key={index}
            className={"text-gray-700 dark:text-gray-500 flex flex-row gap-3"}
          >
            <div className={"select-none"}>{t("bullet")}</div>
            <div>{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

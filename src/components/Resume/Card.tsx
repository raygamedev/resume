import { useTranslation } from "react-i18next";

interface ResumeCardProps {
  lol: string;
}

export const ResumeCard: React.FC<ResumeCardProps> = ({ lol }) => {
  const { t, i18n } = useTranslation();
  return <div>{/* <div className="bg-blue-100">{t("title")}</div> */}</div>;
};

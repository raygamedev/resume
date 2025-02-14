import React from "react";
import { useTranslation } from "react-i18next";

export const Profile: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full  h-150 items-center flex flex-row justify-around shadow-(--neon)">
      <div className="flex flex-col tracking-tighter font-proxima text-yellow-50">
        <div className="flex flex-row gap-3">
          <div className="text-7xl">DAN</div>
          <div className="text-7xl">RAYMOND</div>
        </div>
        <div className="pl-2 text-2xl">{t("job_title")}</div>
      </div>
    </div>
  );
};

import React from "react";
import { useTranslation } from "react-i18next";

export const Profile: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full  h-150 items-center flex flex-row justify-around shadow-(--neon)">
      <div className="flex flex-col tracking-tighter font-mono text-gray-600">
        <div className="flex flex-row gap-3">
          <div className="text-7xl">Dan</div>
          <div className="text-7xl">Raymond</div>
        </div>
        <div className="pl-2 text-2xl">{t("job_title")}</div>
        <button className="w-30 h-10 bg-blue-600">Contact</button>
      </div>
      <div></div>
      <div className="rounded-full border-4 border-blue-300 p-1">
        <div className="rounded-full border-4 border-orange-300 p-1">
          <div className="relative w-100 h-100 overflow-hidden rounded-full">
            <img
              src="/profilePicture.jpg"
              alt="Profile"
              className="w-full h-full object-center object-cover shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

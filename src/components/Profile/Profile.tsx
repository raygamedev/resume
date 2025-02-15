import React from "react";
import { useTranslation } from "react-i18next";
import { ProfileData } from "../../types.ts";
import { Text } from "../Text/Text.tsx";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export const Profile: React.FC = () => {
  const { t } = useTranslation();
  const profileData = t("resume.profile", {
    returnObjects: true,
  }) as ProfileData;

  return (
    <div className="flex flex-row w-3/5 mx-auto font-proxima justify-around items-stretch min-h-[600px] dark:text-yellow-50">
      {/* About Section */}
      <div className="flex-1 flex flex-col justify-start h-full">
        <div className="text-dark-700">ABOUT:</div>
        {/* Name Section */}
        <div className="flex flex-row gap-3 justify-start">
          <Text className="text-6xl" text="DAN" />
          <Text className="text-6xl" text="RAYMOND" />
        </div>
        {/* Title/Location Section */}
        <Text className="text-2xl" text={t("job_title")} />
        <Text className={"mt-10 text-dark-700"} text={"LOCATION:"} />
        <div className="flex flex-row gap-1">
          <Text className="text-xl" text={profileData.location.city} />
          <Text className="text-xl" text={profileData.location.country} />
        </div>
        {/* Contact Section */}
        <Text className="mt-10 text-dark-700" text={"CONTACT:"} />
        <div className={"flex flex-row gap-1 items-center"}>
          <EnvelopeIcon className="w-6 h-6 text-blue-500" />
          <Text text={"dan@raydevs.com"} />
        </div>

        <a
          href="https://linkedin.com/in/ray-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          linkedin.com/in/ray-dev
        </a>
        <Text text={"linkedin.com/in/ray-dev"} />
        <button className="mt-4 px-6 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded transition-colors w-40">
          Contact Me
        </button>
      </div>

      {/* Description Section */}
      <div className="flex-1 flex flex-col justify-start overflow-auto h-full">
        <div className="text-dark-700">DESCRIPTION:</div>
        {profileData.description.map((item, index) => (
          <div key={index} className="flex flex-row gap-1 p-2">
            <div>{t("bullet")}</div>
            <Text className="pl-2 text-xl" text={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

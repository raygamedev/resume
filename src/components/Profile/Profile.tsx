import React from "react";
import { useTranslation } from "react-i18next";
import { ProfileData } from "../../types.ts";
import { Text } from "../Text/Text.tsx";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { LinkedinLogo } from "../../assets/icons/LinkedinLogo.tsx";
import { useMobileStore } from "../../store.ts";

export const Profile: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useMobileStore((state) => state.isMobile);
  const profileData = t("resume.profile", {
    returnObjects: true,
  }) as ProfileData;

  if (isMobile) {
    return (
      <div className="flex flex-col w-screen px-4 font-proxima  dark:text-yellow-50">
        {/* About Section */}
        <div className="flex p-5 flex-col">
          <div className="text-t-semi-dark">ABOUT:</div>
          <Text className="text-4xl">DAN RAYMOND</Text>
          <Text className="text-2xl">{t("job_title")}</Text>
          <div className="mt-6 text-t-semi-dark">LOCATION:</div>
          <div className="flex flex-col gap-1">
            <Text className="text-xl">{profileData.location.city}</Text>
            <Text className="text-xl">{profileData.location.country}</Text>
          </div>
          <div className="mt-6 text-t-semi-dark">CONTACT:</div>
          <div className="flex flex-row gap-3 items-center">
            <EnvelopeIcon className="w-6 h-6 text-blue-500" />
            <Text>dan@raydevs.com</Text>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <LinkedinLogo className="pl-1 w-5 h-5" />
            <a
              href="https://linkedin.com/in/ray-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              Linkedin
            </a>
          </div>
          <button className="mt-4 px-6 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded transition-colors w-full">
            Contact Me
          </button>
        </div>
        {/* Description Section */}
        <div className="flex flex-col gap-10  mt-6">
          <div className="text-t-semi-dark">DESCRIPTION:</div>
          {profileData.description.map((item, index) => (
            <div key={index} className="flex  grow flex-row gap-3 py-1 px-3">
              <div className={"text-t-semi-dark dark:text-t-light"}>
                {t("bullet")}
              </div>
              <Text className="text-xl  w-full grow">{item}</Text>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-row mx-auto font-proxima justify-around items-stretch min-h-[600px] dark:text-yellow-50">
      {/* About Section */}
      <div className="flex-1 flex flex-col justify-start h-full">
        <div className="text-t-semi-dark">ABOUT:</div>
        {/* Name Section */}
        <div className="flex flex-row gap-3 justify-start">
          <Text className="text-[80px]">DAN RAYMOND</Text>
        </div>
        {/* Title/Location Section */}
        <Text className="text-2xl">{t("job_title")}</Text>
        <div className={"mt-10 text-t-semi-dark"}>LOCATION:</div>
        <div className="flex flex-row gap-1">
          <Text className="text-xl w-max">{profileData.location.city}</Text>
          <Text className="text-xl w-max">{profileData.location.country}</Text>
        </div>
        {/* Contact Section */}
        <div className="mt-10 text-t-semi-dark">CONTACT:</div>
        <div className={"flex flex-row gap-3 items-center"}>
          <EnvelopeIcon className="w-6 h-6 text-blue-500" />
          <Text>dan@raydevs.com</Text>
        </div>
        <div className={"flex flex-row gap-3 items-center"}>
          <LinkedinLogo className={"pl-1 w-5 h-5"} />
          <a
            href="https://linkedin.com/in/ray-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            Linkedin
          </a>
        </div>
        <button className="mt-4 px-6 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded transition-colors w-40">
          Contact Me
        </button>
      </div>
      {/* Description Section */}
      <div className="flex-1 flex flex-col justify-start overflow-auto h-full">
        <div className="text-t-semi-dark">DESCRIPTION:</div>
        {profileData.description.map((item, index) => (
          <div key={index} className="flex flex-row gap-3 p-3">
            <div>{t("bullet")}</div>
            <Text className="text-xl">{item}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};

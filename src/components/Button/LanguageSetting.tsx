import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Dropdown, DropdownItem } from "../Dropdown/Dropdown";
import JapanFlag from "../../assets/icons/JapanFlag";
import USAFlag from "../../assets/icons/USAFlag";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import { GlobeAmericasIcon } from "@heroicons/react/24/outline";

export const LanguageSetting: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("en");
  const { t, i18n } = useTranslation();

  const dropdownItems = [
    { value: "en", icon: <USAFlag /> },
    { value: "jp", icon: <JapanFlag /> },
  ];

  useEffect(() => {
    void i18n.changeLanguage(language);
  }, [i18n, language]);

  const onSelectHandler = (item: DropdownItem) => {
    setLanguage(item.value);
  };

  return (
    <div className="relative inline-block">
      <div
        className="flex flex-row cursor-pointer justify-between space-x-0.5 px-2 py-2 w-25 bg-blue-600 hover:bg-blue-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Dropdown
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          items={dropdownItems}
          onSelect={onSelectHandler}
        />
        <div className={"w-7 flex justify-center"}>
          {language === "en" ? (
            <GlobeAmericasIcon className={"w-6"} />
          ) : (
            <GlobeAsiaAustraliaIcon className={"w-6"} />
          )}
        </div>
        <div className={"grow text-center"}>{t(language)}</div>
      </div>
    </div>
  );
};

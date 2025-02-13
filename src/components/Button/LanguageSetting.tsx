import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Dropdown, DropdownItem } from "../Dropdown/Dropdown";
import JapanFlag from "../../assets/icons/JapanFlag";
import USAFlag from "../../assets/icons/USAFlag";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import { GlobeAmericasIcon } from "@heroicons/react/24/outline";

export const LanguageSetting: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("EN");
  const { t, i18n } = useTranslation();
  console.log(i18n.language);

  const dropdownItems = [
    { label: "English", key: "en", icon: <USAFlag /> },
    { label: "日本語", key: "jp", icon: <JapanFlag /> },
  ];

  useEffect(() => {
    void i18n.changeLanguage(language);
  }, [i18n, language]);

  const onSelectHandler = (item: DropdownItem) => {
    setLanguage(item.key);
  };

  return (
    <div className="relative inline-block">
      <div
        className="flex cursor-pointer justify-center space-x-0.5 px-2 py-2 w-25 bg-blue-600 hover:bg-blue-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Dropdown
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          items={dropdownItems}
          onSelect={onSelectHandler}
        />
        {language === "en" ? (
          <GlobeAmericasIcon className={"w-6"} />
        ) : (
          <GlobeAsiaAustraliaIcon className={"w-6"} />
        )}
        <span>{t(language)}</span>
      </div>
    </div>
  );
};

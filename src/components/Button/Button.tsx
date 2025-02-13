import GlobeAltIcon from "@heroicons/react/24/outline/GlobeAltIcon";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Dropdown } from "../Dropdown/Dropdown";
import JapanFlag from "../../assets/icons/JapanFlag";
import USAFlag from "../../assets/icons/USAFlag";

interface ButtonProps {
  text: string;
  icon: string;
  onClick: () => void;
}
export const Button: React.FC<ButtonProps> = ({ text, icon }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  console.log(i18n.language);
  const dropdownItems = [
    { label: "English", icon: <JapanFlag /> },
    { label: "日本語", icon: <USAFlag /> },
    // Add more items as needed
  ];

  return (
    <div className="relative inline-block">
      <div
        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Dropdown isOpen={isOpen} setIsOpen={setIsOpen} items={dropdownItems} />
        <GlobeAltIcon className="h-5 w-5" title="lol" />
        <span>日本語</span>
      </div>
    </div>
  );
};

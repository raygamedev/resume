import React from "react";
import { useTranslation } from "react-i18next";

export interface DropdownItem {
  value: string;
  icon?: React.ReactNode;
}

interface DropdownProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  items: DropdownItem[];
  onSelect: (item: DropdownItem) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  isOpen,
  items,
  onSelect,
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={`absolute dark:bg-gray-700 left-1/2 top-full transform -translate-x-1/2 mt-2 w-max p-2 bg-white shadow rounded transition-all duration-200 ease-out flex-col flex
      ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
    >
      {items.map((item) => {
        return (
          <div
            key={item.value}
            className="hover:bg-yellow-100 dark:hover:bg-gray-600 p-2 duration-200 rounded cursor-pointer flex items-center text-gray-800 dark:text-cyan-50"
            onClick={() => onSelect(item)}
          >
            {/* Render the icon if it exists */}
            {item.icon && <span className="mr-2">{item.icon}</span>}
            {t(item.value)}
          </div>
        );
      })}
    </div>
  );
};

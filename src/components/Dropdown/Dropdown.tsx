import React from "react";

interface DropdownItem {
  label: string;
  icon?: React.ReactNode;
}

interface DropdownProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  items: DropdownItem[];
}

export const Dropdown: React.FC<DropdownProps> = ({ isOpen, items }) => {
  return (
    <div
      className={`absolute dark:bg-gray-700 left-1/2 top-full transform -translate-x-1/2 mt-2 w-max p-2 bg-white shadow rounded transition-all duration-200 ease-out flex-col flex
      ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
    >
      {items.map((item) => (
        <div
          key={item.label}
          className="hover:bg-gray-600 p-2 duration-200 rounded cursor-pointer flex items-center"
        >
          {/* Render the icon if it exists */}
          {item.icon && <span className="mr-2">{item.icon}</span>}
          {item.label}
        </div>
      ))}
    </div>
  );
};

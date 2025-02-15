import React, { useEffect, useRef } from "react";
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
  // Add a ref for the dropdown button.
  buttonRef: React.RefObject<HTMLElement | null>;
}

export const Dropdown: React.FC<DropdownProps> = ({
  isOpen,
  setIsOpen,
  items,
  onSelect,
  buttonRef,
}) => {
  const { t } = useTranslation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // If the click target is outside BOTH the dropdown and the button, close it.
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen, buttonRef]);

  return (
    <div
      ref={dropdownRef}
      className={`absolute dark:bg-zinc-900 left-1/2 top-full transform -translate-x-1/2 mt-2 w-max p-2 shadow rounded transition-all duration-200 ease-out flex-col flex ${
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={item.value} className="relative">
            {!isLast && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 border-b-[1px] border-zinc-700"></div>
            )}
            <div
              className="hover:bg-yellow-100 dark:hover:bg-zinc-800 p-2 duration-200 rounded cursor-pointer flex items-center"
              onClick={() => onSelect(item)}
            >
              {item.icon && <span className="mr-2">{item.icon}</span>}
              {t(item.value)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

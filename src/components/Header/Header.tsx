import { ThemeToggleButton } from "./ThemeToggleButton";
import "./Header.css";
import { LanguageSetting } from "../Button/LanguageSetting.tsx";
import React from "react";

export const Header: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50  border-gray-200 dark:border-gray-700">
      <div className="w-full max-w-[900px] mx-auto px-4 flex items-center justify-between h-16">
        <div
          onClick={() => (window.location.href = "/")}
          className="raydevs font-retro text-lg text-gray-700 cursor-pointer dark:text-cyan-50"
        >
          RAYDEVS
        </div>
        <div className={"flex flex-row gap-4"}>
          <LanguageSetting />
          <ThemeToggleButton />
        </div>
      </div>
    </div>
  );
};

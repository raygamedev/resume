import { ThemeToggleButton } from "./ThemeToggleButton";
import "./Header.css";
import { LanguageSetting } from "../Button/LanguageSetting.tsx";
import React from "react";

export const Header: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#FFFBF1] dark:bg-gray-900 shadow-2xl border-b border-gray-200 dark:border-gray-700">
      <div className="w-full max-w-[900px] mx-auto px-4 flex items-center justify-between h-16">
        <LanguageSetting />
        <div
          onClick={() => (window.location.href = "/")}
          className="raydevs font-retro text-lg text-gray-700 cursor-pointer dark:text-cyan-50"
        >
          RAYDEVS
        </div>
        <ThemeToggleButton />
      </div>
    </div>
  );
};

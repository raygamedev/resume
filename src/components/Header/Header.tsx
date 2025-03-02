import { ThemeToggleButton } from "./ThemeToggleButton";
import { LanguageSetting } from "../Button/LanguageSetting.tsx";
import React from "react";
import { ContentBar } from "../ContentBar.tsx";
import "./Header.css";

export const Header: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <ContentBar />
      <div
        className="
          w-full mx-auto px-4 flex items-center justify-between h-16
          backdrop-blur-[3px] bg-[radial-gradient(rgba(0,0,0,0)_0px,var(--color-light)_1px)] dark:bg-[radial-gradient(rgba(0,0,0,0)_0px,var(--color-dark-900)_2px)] bg-[size:5px_5px]
        "
      >
        <div
          onClick={() => (window.location.href = "/")}
          className="raydevs font-led font-bold text-2xl cursor-pointer text-t-dark dark:text-t-light"
        >
          RAYDEVS
        </div>
        <div className="flex flex-row gap-4">
          <LanguageSetting />
          <ThemeToggleButton />
        </div>
      </div>
    </div>
  );
};

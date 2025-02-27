import { ThemeToggleButton } from "./ThemeToggleButton";
import { LanguageSetting } from "../Button/LanguageSetting.tsx";
import React from "react";
import { ContentBar } from "../ContentBar.tsx";

export const Header: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-light dark:bg-dark-900">
      <ContentBar />
      <div className="w-full  mx-auto px-4 flex items-center justify-between h-16">
        <div
          onClick={() => (window.location.href = "/")}
          className="raydevs font-led font-bold text-2xl cursor-pointer text-t-dark dark:text-t-light "
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

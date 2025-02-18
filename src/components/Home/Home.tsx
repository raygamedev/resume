import { Profile } from "../Profile/Profile";
import React from "react";
import { Skills } from "../Skills/Skills.tsx";
import { Resume } from "../Resume/Resume.tsx";
import { RayHero } from "../RayHero/Ray/Hero.tsx";

export const Home: React.FC = () => {
  return (
    <div className="pt-16 ">
      <div className="flex justify-center  grow overflow-x-hidden">
        <div className="w-3/5 p-4 flex flex-col items-center justify-start gap-30">
          <Profile />
          <Resume />
          <Skills />
        </div>
      </div>
    </div>
  );
};

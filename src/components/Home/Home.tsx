import { Profile } from "../Profile/Profile";
import React from "react";
import { Skills } from "../Skills/Skills.tsx";

export const Home: React.FC = () => {
  return (
    <div className="pt-16">
      <div className="w-screen h-screen flex justify-center  grow ">
        <div className="mx-auto p-4 flex justify-start flex-col">
          <Profile />
          <Skills />
        </div>
      </div>
    </div>
  );
};

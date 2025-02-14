import { Profile } from "../Profile/Profile";
import { Resume } from "../Resume/Resume";
import React from "react";

export const Home: React.FC = () => {
  return (
    <div className="pt-16">
      <div className="w-screen h-max flex justify-center  grow dark:bg-gray-800">
        <div className="container mx-auto p-4 bg-[#FFFBF1] dark:bg-gray-900 side-shadow flex justify-start flex-col">
          <Profile />
          <Resume />
        </div>
      </div>
    </div>
  );
};

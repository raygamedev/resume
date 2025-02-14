import { ReactNode } from "react";

interface SkillCardProps {
  skill: string;
  hero: string;
  icon: ReactNode;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, hero, icon }) => {
  return (
    <div className="w-45 h-52 bg-dark-900 rounded-2xl relative filter saturate-50 transition-all duration-300 ease-in-out transform hover:saturate-100 hover:scale-105">
      <img
        src={hero}
        alt={skill}
        className="w-full h-full object-cover rounded-2xl opacity-60"
      />
      <div className="absolute inset-0 flex justify-center items-center translate-y-7">
        <div className="inline-block drop-shadow-lg">{icon}</div>
      </div>
    </div>
  );
};

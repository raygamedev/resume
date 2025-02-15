import { ReactNode, useEffect, useState } from "react";
import { Vibrant } from "node-vibrant/browser";

interface SkillCardProps {
  skill: string;
  hero: string;
  icon: ReactNode;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, hero, icon }) => {
  const [color, setColor] = useState<string>("#f5f5f6");
  const [hovered, setHovered] = useState<boolean>(false);

  useEffect(() => {
    void Vibrant.from(hero)
      .getPalette()
      .then((palette) => {
        if (palette.DarkVibrant?.hex) setColor(palette.DarkVibrant.hex);
      });
  }, [hero]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-45 h-52 bg-light-100 dark:bg-dark-900 rounded-2xl relative transition-all duration-300 ease-in-out transform hover:scale-105"
      style={{
        filter: `saturate(${hovered ? 1 : 0.5}) drop-shadow(0 0 ${hovered ? "15px" : "0px"} ${color})`,
      }}
    >
      <img
        src={hero}
        alt={skill}
        className="w-full h-full object-cover rounded-2xl opacity-90 dark:opacity-70 transition-all duration-300 ease-in-out"
        style={{
          filter: hovered ? "blur(0px)" : "blur(1px)",
          willChange: "filter",
        }}
      />
      <div className="absolute inset-0 flex justify-center items-center translate-y-7">
        <div
          className="inline-block transition-all duration-300 ease-in-out"
          style={{
            transform: hovered ? "scale(1.05)" : "scale(1)",
            filter: hovered
              ? `drop-shadow(0 0 5px ${color})`
              : `drop-shadow(0 0 0px ${color})`,
          }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

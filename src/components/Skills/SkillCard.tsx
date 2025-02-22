import React, { useEffect, useState } from "react";
import { Vibrant } from "node-vibrant/browser";
import { Skill } from "../../types.ts";
import { PaletteColor } from "../../enum.ts";

interface SkillCardProps {
  skill: Skill;
  className?: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  className = "",
}) => {
  const [color, setColor] = useState<string>("#f5f5f6");
  const [hovered, setHovered] = useState<boolean>(false);

  useEffect(() => {
    void Vibrant.from(skill.hero)
      .getPalette()
      .then((palette) => {
        if (skill.palette === PaletteColor.VIBRANT) {
          if (palette.Vibrant?.hex) setColor(palette.Vibrant.hex);
        } else if (skill.palette === PaletteColor.MUTED) {
          if (palette.Muted?.hex) setColor(palette.Muted.hex);
        } else if (skill.palette === PaletteColor.DARK_VIBRANT) {
          if (palette.DarkVibrant?.hex) setColor(palette.DarkVibrant.hex);
        } else if (skill.palette === PaletteColor.DARK_MUTED) {
          if (palette.DarkMuted?.hex) setColor(palette.DarkMuted.hex);
        } else if (skill.palette === PaletteColor.LIGHT_VIBRANT) {
          if (palette.LightVibrant?.hex) setColor(palette.LightVibrant.hex);
        } else if (skill.palette === PaletteColor.LIGHT_MUTED) {
          if (palette.LightMuted?.hex) setColor(palette.LightMuted.hex);
        }
      });
  }, [skill.hero, skill.palette]);

  return (
    <div className={`relative inline-block ${className}`}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="z-1 w-45 h-52 bg-light-100 dark:bg-dark-900 rounded-2xl relative transition-all duration-300 ease-in-out transform hover:scale-105"
        style={{
          filter: `saturate(${hovered ? 1 : 0.5}) drop-shadow(0 0 ${hovered ? "15px" : "0px"} ${color})`,
        }}
      >
        <img
          src={skill.hero}
          alt={skill.name}
          className="w-full h-full object-cover rounded-2xl opacity-90 dark:opacity-70 transition-all duration-300 ease-in-out"
          style={{
            filter: hovered ? "blur(0px)" : "blur(1px)",
            willChange: "filter",
          }}
        />
        <div className="absolute inset-0 flex justify-center items-center translate-y-7">
          <div
            className="inline-block transition-all duration-300 ease-in-out w-28 h-28"
            style={{
              width: "100px",
              transform: hovered ? "scale(1.05)" : "scale(1)",
              filter: hovered
                ? `drop-shadow(0 0 5px ${color})`
                : `drop-shadow(0 0 0px ${color})`,
            }}
          >
            <img src={skill.icon} alt={`${skill.name} icon`} />
          </div>
        </div>
      </div>
      {/* Tooltip that transitions in from top to bottom and fades in/out */}
      <div
        className={` absolute top-full left-1/2 font-jetbrains transform -translate-x-1/2 mt-2 p-2 bg-white dark:bg-zinc-800 text-yellow-50 dark:text-yellow-50 text-sm rounded shadow-lg transition-all duration-300 ease-out
          ${hovered ? "opacity-100 translate-y-5" : "opacity-0 -translate-y-10"}`}
      >
        {skill.name}
      </div>
    </div>
  );
};

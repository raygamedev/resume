import { SkillCard } from "./SkillCard.tsx";
import { TypescriptSVG } from "./assets/TypescriptSVG.tsx";
import { PythonSVG } from "./assets/PythonSVG.tsx";
import { TailwindSVG } from "./assets/TailwindSVG.tsx";

export const Skills = () => {
  const Skills = {
    title: "Frontend",
    skills: [
      {
        name: "React",
        hero: "/heros/typescriptHero.png",
        icon: <TypescriptSVG className={"w-30"} />,
      },
      {
        name: "Python",
        hero: "/heros/pythonHero.png",
        icon: <PythonSVG className={"w-30"} />,
      },
      {
        name: "TailwindCSS",
        hero: "/heros/tailwindHero.png",
        icon: <TailwindSVG className={"w-30"} />,
      },
      {
        name: "Redux",
        hero: "/heros/typescriptHero.png",
        icon: <TypescriptSVG className={"w-30"} />,
      },
      {
        name: "TypeScript",
        hero: "/heros/typescriptHero.png",
        icon: (
          <TypescriptSVG className="w-30 h-30 drop-shadow-[0_0_10px_rgba(0,128,255,0.75)]" />
        ),
      },
    ],
  };
  return (
    <div className={"flex justify-center flex-row gap-8"}>
      {Skills.skills.map((skill, index) => (
        <SkillCard
          key={index}
          skill={skill.name}
          hero={skill.hero}
          icon={skill.icon}
        />
      ))}
    </div>
  );
};

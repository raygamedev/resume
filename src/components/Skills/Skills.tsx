import { SkillCard } from "./SkillCard.tsx";
import { TypescriptSVG } from "./assets/TypescriptSVG.tsx";
import { PythonSVG } from "./assets/PythonSVG.tsx";
import { TailwindSVG } from "./assets/TailwindSVG.tsx";
import { ReduxSVG } from "./assets/ReduxSVG.tsx";
import { RustSVG } from "./assets/RustSVG.tsx";
import { ReactSVG } from "./assets/ReactSVG.tsx";
import { UnitySVG } from "./assets/UnitySVG.tsx";

export const Skills = () => {
  const Skills = {
    title: "Frontend",
    skills: [
      {
        name: "Unity",
        hero: "/heros/unityHero.png",
        icon: <UnitySVG className="w-30" />,
      },
      {
        name: "React",
        hero: "/heros/reactHero.png",
        icon: <ReactSVG className={"w-30"} />,
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
        hero: "/heros/reduxHero.png",
        icon: <ReduxSVG className={"w-30 drop-shadow-xl"} />,
      },
      {
        name: "TypeScript",
        hero: "/heros/typescriptHero.png",
        icon: <TypescriptSVG className="w-30 h-30" />,
      },
      {
        name: "Rust",
        hero: "/heros/rustHero.png",
        icon: <RustSVG className="w-30 h-30" />,
      },
    ],
  };
  return (
    <div className={"flex flex-col"}>
      <div className={"w-screen flex justify-center flex-row gap-8 "}>
        {Skills.skills.map((skill, index) => (
          <SkillCard
            key={index}
            skill={skill.name}
            hero={skill.hero}
            icon={skill.icon}
          />
        ))}
      </div>
    </div>
  );
};

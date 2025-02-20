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
        icon: <UnitySVG />,
      },
      {
        name: "React",
        hero: "/heros/reactHero.png",
        icon: <ReactSVG />,
      },
      {
        name: "Python",
        hero: "/heros/pythonHero.png",
        icon: <PythonSVG />,
      },
      {
        name: "TailwindCSS",
        hero: "/heros/tailwindHero.png",
        icon: <TailwindSVG />,
      },
      {
        name: "Redux",
        hero: "/heros/reduxHero.png",
        icon: <ReduxSVG />,
      },
      {
        name: "TypeScript",
        hero: "/heros/typescriptHero.png",
        icon: <TypescriptSVG />,
      },
      {
        name: "Rust",
        hero: "/heros/rustHero.png",
        icon: <RustSVG />,
      },
    ],
  };
  return (
    <div className={"flex flex-col h-screen justify-center items-center"}>
      <div className={"w-full flex justify-center flex-row gap-8 "}>
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

import { Skill } from "./types.ts";

export const Skills: { [name: string]: Skill } = {
  react: {
    name: "React",
    icon: "/skills/icons/react.svg",
    hero: "/skills/heroes/reactHero.png",
  },
  redux: {
    name: "Redux",
    icon: "/skills/icons/redux.svg",
    hero: "/skills/heroes/reduxHero.png",
  },
  tailwind: {
    name: "TailwindCSS",
    icon: "/skills/icons/tailwind.svg",
    hero: "/skills/heroes/tailwindHero.png",
  },
  typescript: {
    name: "TypeScript",
    icon: "/skills/icons/typescript.svg",
    hero: "/skills/heroes/typescriptHero.png",
  },
  python: {
    name: "Python",
    icon: "/skills/icons/python.svg",
    hero: "/skills/heroes/pythonHero.png",
  },
  unity: {
    name: "Unity",
    icon: "/skills/icons/unity.svg",
    hero: "/skills/heroes/unityHero.png",
  },
  rust: {
    name: "Rust",
    icon: "/skills/icons/rust.svg",
    hero: "/skills/heroes/rustHero.png",
  },
};

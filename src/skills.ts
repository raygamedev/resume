import { Skill } from "./types.ts";
import { PaletteColor } from "./enum.ts";

export const Skills: { [name: string]: Skill } = {
  react: {
    name: "React",
    icon: "/skills/icons/react.svg",
    hero: "/skills/heroes/reactHero.png",
    palette: PaletteColor.VIBRANT,
  },
  redux: {
    name: "Redux",
    icon: "/skills/icons/redux.svg",
    hero: "/skills/heroes/reduxHero.png",
    palette: PaletteColor.LIGHT_VIBRANT,
  },
  tailwind: {
    name: "TailwindCSS",
    icon: "/skills/icons/tailwind.svg",
    hero: "/skills/heroes/tailwindHero.png",
    palette: PaletteColor.DARK_VIBRANT,
  },
  typescript: {
    name: "TypeScript",
    icon: "/skills/icons/typescript.svg",
    hero: "/skills/heroes/typescriptHero.png",
    palette: PaletteColor.LIGHT_VIBRANT,
  },
  python: {
    name: "Python",
    icon: "/skills/icons/python.svg",
    hero: "/skills/heroes/pythonHero.png",
    palette: PaletteColor.VIBRANT,
  },
  unity: {
    name: "Unity",
    icon: "/skills/icons/unity.svg",
    hero: "/skills/heroes/unityHero.png",
    palette: PaletteColor.LIGHT_MUTED,
  },
  rust: {
    name: "Rust",
    icon: "/skills/icons/rust.svg",
    hero: "/skills/heroes/rustHero.png",
    palette: PaletteColor.VIBRANT,
  },
  csharp: {
    name: "C#",
    icon: "/skills/icons/csharp.svg",
    hero: "/skills/heroes/csharpHero.png",
    palette: PaletteColor.VIBRANT,
  },
};

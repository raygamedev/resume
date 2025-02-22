import { PaletteColor } from "./enum.ts";
export interface ExperienceData {
  jobTitle: string;
  company: string;
  dates: string;
  responsibilities: string[];
}

export interface ProfileData {
  title: string;
  location: { city: string; country: string };
  description: string[];
}

export interface Skill {
  name: string;
  icon: string;
  hero: string;
  palette: PaletteColor;
}

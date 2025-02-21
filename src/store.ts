import { create } from "zustand";
import { Sections } from "./enum.ts";

type NavStore = {
  activeSection: Sections;
  setSection: (section: Sections) => void;
  triggerScroll: Sections;
  setTriggerScroll: (triggerScroll: Sections) => void;
};

export const useNavStore = create<NavStore>((set) => ({
  activeSection: Sections.ABOUT,
  setSection: (section: Sections) => {
    set({ activeSection: section });
  },
  triggerScroll: Sections.NONE,
  setTriggerScroll: (triggerScroll: Sections) => {
    set({ triggerScroll });
  },
}));

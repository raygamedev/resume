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

interface MobileState {
  isMobile: boolean;
  setIsMobile: (value: boolean) => void;
}

export const useMobileStore = create<MobileState>((set) => ({
  isMobile: false,
  setIsMobile: (value) => set({ isMobile: value }),
}));

interface ScrollState {
  isScrolling: boolean;
  setIsScrolling: (value: boolean) => void;
}
export const useScrollStore = create<ScrollState>((set) => ({
  isScrolling: false,
  setIsScrolling: (value) => set({ isScrolling: value }),
}));

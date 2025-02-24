import React from "react";
import { useMobileStore, useNavStore, useScrollStore } from "../store.ts";
import { Sections } from "../enum.ts";

export const ContentBar: React.FC = () => {
  const activeSection = useNavStore((state) => state.activeSection);
  const setTriggerScroll = useNavStore((state) => state.setTriggerScroll);
  const isMobile = useMobileStore((state) => state.isMobile);
  const isScrolling = useScrollStore((state) => state.isScrolling);

  if (isMobile) {
    return (
      <div
        className={`
          fixed top-30 p-3 gap-2 font-proxima flex flex-col
          transition-all duration-300 ease-in-out rounded-2xl
          ${isScrolling ? "backdrop-blur-sm" : "backdrop-blur-none"}
        `}
      >
        {Object.values(Sections).map((item, index) =>
          item === Sections.NONE ? null : (
            <div className="flex items-center h-max gap-2" key={index}>
              <div
                className={`
                  pb-8 rounded
                  transition-all duration-300 ease-in-out
                  ${!isScrolling ? "pl-1" : "pl-2"}
                  ${item === activeSection ? "bg-bright-orange" : "bg-zinc-500"}
                `}
              />
              <div
                className={`
                  text-base
                  transition-all duration-200 ease-in-out
                  ${!isScrolling ? "-translate-x-2 opacity-0" : "translate-x-0 opacity-100"}
                  ${item === activeSection ? "text-t-dark dark:text-t-light" : "text-zinc-500"}
                `}
              >
                {item.toUpperCase()}
              </div>
            </div>
          ),
        )}
      </div>
    );
  }

  // Non-mobile version (unchanged)
  return (
    <div className="fixed top-30 left-3 p-3 gap-2 font-proxima flex flex-col">
      {Object.values(Sections).map((item, index) =>
        item === Sections.NONE ? null : (
          <div
            key={index}
            onClick={() => setTriggerScroll(item)}
            className={`relative p-1 active:text-amber-600 cursor-pointer transition-all duration-200 ease-in-out text-2xl ${
              item === activeSection
                ? "text-t-dark dark:text-t-light scale-110"
                : "text-zinc-500 hover:text-zinc-300 hover:scale-100 scale-90"
            }`}
          >
            {item.toUpperCase()}
            <div
              className={`absolute bottom-0 left-0 ml-1 h-[3px] w-full bg-bright-orange transition-all duration-200 ease-out origin-left transform ${
                item === activeSection ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </div>
        ),
      )}
    </div>
  );
};

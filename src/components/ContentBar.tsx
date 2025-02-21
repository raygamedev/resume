import React from "react";
import { useNavStore } from "../store.ts";
import { Sections } from "../enum.ts";

export const ContentBar: React.FC = () => {
  const activeSection = useNavStore((state) => state.activeSection);
  const setTriggerScroll = useNavStore((state) => state.setTriggerScroll);

  return (
    <div className="fixed top-30 left-3 p-3 gap-2 font-proxima flex flex-col">
      {Object.values(Sections).map((item, index) =>
        item === Sections.NONE ? null : (
          <div
            key={index}
            onClick={() => setTriggerScroll(item)}
            className={`relative p-1 active:text-amber-600 cursor-pointer transition-all duration-200 ease-in-out text-2xl ${
              item === activeSection
                ? "text-yellow-50 scale-110"
                : "text-gray-400 hover:text-gray-300 scale-100"
            }`}
          >
            {item.toUpperCase()}
            <div
              className={`absolute bottom-0 left-0 ml-1 h-[3px] w-full bg-[#ffae00] transition-all duration-200 ease-out origin-left transform ${
                item === activeSection ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </div>
        ),
      )}
    </div>
  );
};

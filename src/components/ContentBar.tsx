import React, { useState, useRef } from "react";
import { useMobileStore, useNavStore, useScrollStore } from "../store.ts";
import { Sections } from "../enum.ts";

export const ContentBar: React.FC = () => {
  const activeSection = useNavStore((state) => state.activeSection);
  const setTriggerScroll = useNavStore((state) => state.setTriggerScroll);
  const isMobile = useMobileStore((state) => state.isMobile);
  const isScrolling = useScrollStore((state) => state.isScrolling);

  // Local state to track if the content is expanded due to a click
  const [isExpanded, setIsExpanded] = useState(false);

  // Reference to store the timeout ID so we can clear it if needed
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Determine if the text should be visible: either scrolling or clicked
  const isTextVisible = isScrolling || isExpanded;

  if (isMobile) {
    return (
      <div
        className={`
          fixed top-30 right-3 p-3 gap-2 font-proxima flex flex-col
          transition-all duration-300 ease-in-out rounded-2xl
          ${isScrolling || isExpanded ? "backdrop-blur-sm side-shadow" : "backdrop-blur-none"}
        `}
        onClick={() => {
          setIsExpanded(true); // Show the text
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current); // Clear any existing timeout
          }
          // Hide the text after 2 seconds
          timeoutRef.current = setTimeout(() => {
            setIsExpanded(false);
          }, 2000);
        }}
      >
        {Object.values(Sections).map((item, index) =>
          item === Sections.NONE ? null : (
            <div
              onClick={isTextVisible ? () => setTriggerScroll(item) : undefined}
              className="flex flex-row-reverse items-center h-max gap-2"
              key={index}
            >
              <div
                className={`
                  pb-8 rounded
                  transition-all duration-300 ease-in-out
                  ${!isTextVisible ? "pr-1" : "pr-2"}
                  ${item === activeSection ? "bg-bright-orange" : "bg-zinc-500"}
                `}
              />
              <div
                className={`
                  text-base
                  transition-all duration-200 ease-in-out
                  ${!isTextVisible ? "translate-x-2 opacity-0" : "translate-x-0 opacity-100"}
                  ${item === activeSection ? "text-t-dark dark:text-t-light" : "text-zinc-300"}
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

  // Non-mobile version remains unchanged
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

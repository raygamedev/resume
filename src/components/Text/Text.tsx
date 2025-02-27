// ts ignore enite comp
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";

interface TextProps {
  children: React.ReactNode;
  className?: string;
  duration?: number; // Total time (in ms) for the typewriter effect
}

export const Text: React.FC<TextProps> = ({
  children,
  className,
  duration = 1000,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [finished, setFinished] = useState(false);
  const divDimensionsRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  useEffect(() => {
    if (!divDimensionsRef.current) return;
    setWidth(divDimensionsRef.current?.offsetWidth || 0);
    setHeight(divDimensionsRef.current?.offsetHeight || 0);
  }, [divDimensionsRef]);

  useEffect(() => {
    const text = children?.toString();
    if (!text) return;
    setFinished(false);
    setDisplayedText("");
    let currentIndex = 0;
    const textLength = text.length;
    const intervalDelay = textLength > 0 ? duration / textLength : duration;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex >= textLength) {
        clearInterval(interval);
        setFinished(true);
      }
    }, intervalDelay);
    return () => clearInterval(interval);
  }, [children, duration]);

  // if (width === 0 || height === 0) {
  //   return (
  //     <div className={`w-full h-full ${className || ""}`}>
  //       {/* Ghost element to reserve the final text layout.
  //         'text-transparent' makes it invisible while still taking up space. */}
  //       <div ref={divDimensionsRef} className="invisible">
  //         {children}
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div
      className={`text-dark-700  dark:text-yellow-50 ${className || ""} `}
      // style={{ width: width + 18, height: height }}
    >
      {children}
      {/*<span*/}
      {/*  className={`ml-1 text-sm transition-opacity duration-300 ${*/}
      {/*    finished ? "opacity-0" : "animate-blink"*/}
      {/*  }`}*/}
      {/*>*/}
      {/*  █*/}
      {/*</span>*/}
    </div>
  );
};

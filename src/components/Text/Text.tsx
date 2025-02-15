import React, { useEffect, useState } from "react";

interface TextProps {
  text: string;
  className?: string;
  duration?: number; // Total time (in ms) for the typewriter effect
}

export const Text: React.FC<TextProps> = ({
  text,
  className,
  duration = 1000,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setFinished(false);
    setDisplayedText("");
    let currentIndex = 0;
    const textLength = text.length;
    // Calculate delay per character so that the whole text types in "duration" ms
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
  }, [text, duration]);

  return (
    <div className={className} style={{ position: "relative" }}>
      {/* Invisible element to reserve the full height */}
      {/* Animated text on top */}
      <div className={"absolute top-0 left-0"}>
        {displayedText}
        <span
          className={`inline-block ml-1 w-2 h-4 bg-current transition-opacity duration-500 ${finished ? "opacity-0" : "animate-blink"}`}
        />
      </div>
      <div className="invisible">{text}</div>
    </div>
  );
};

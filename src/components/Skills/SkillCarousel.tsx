import React, { useRef, useState, TouchEvent } from "react";
import { SkillCard } from "../Skills/SkillCard.tsx";
import { Skill } from "../../types.ts"; // Assuming Skill type is defined

interface SkillCarouselProps {
  skills: Skill[];
}

export const SkillCarousel: React.FC<SkillCarouselProps> = ({ skills }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? skills.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === skills.length - 1 ? 0 : prev + 1));
  };

  // Handle mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setCurrentX(e.clientX);
    e.preventDefault(); // Prevent text selection while dragging
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    finishDrag();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      finishDrag();
    }
  };

  // Handle touch events
  const handleTouchStart = (e: TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    finishDrag();
  };

  // Process the drag when finished
  const finishDrag = () => {
    const dragDistance = currentX - startX;
    const threshold = 50; // Minimum drag distance to trigger navigation

    if (dragDistance > threshold) {
      // Dragged right -> show previous card
      handlePrev();
    } else if (dragDistance < -threshold) {
      // Dragged left -> show next card
      handleNext();
    }

    setIsDragging(false);
  };

  const getCardPosition = (index: number) => {
    const position = (index - activeIndex + skills.length) % skills.length;

    // Calculate base position
    let transform;
    let zIndex;
    let opacity;

    if (position === 0) {
      // Center card (active)
      transform = "translateX(-50%) scale(1)";
      zIndex = 30;
      opacity = 1;
    } else if (position === skills.length - 1) {
      // Left card
      transform = "translateX(-130%) scale(0.85)";
      zIndex = 20;
      opacity = 0.7;
    } else if (position === 1) {
      // Right card
      transform = "translateX(30%) scale(0.85)";
      zIndex = 20;
      opacity = 0.7;
    } else if (position === skills.length - 2) {
      // Far left card
      transform = "translateX(-170%) scale(0.7)";
      zIndex = 10;
      opacity = 0.4;
    } else if (position === 2) {
      // Far right card
      transform = "translateX(70%) scale(0.7)";
      zIndex = 10;
      opacity = 0.4;
    } else {
      // Hidden cards
      const direction = position <= skills.length / 2 ? 1 : -1;
      transform = `translateX(${direction * 200}%) scale(0.5)`;
      zIndex = 0;
      opacity = 0;
    }

    // Add drag effect if currently dragging
    if (isDragging) {
      const dragOffset = (currentX - startX) / 3; // Divide by 3 to reduce sensitivity
      return {
        transform: transform.replace(
          "translateX(",
          `translateX(calc(${dragOffset}px + `,
        ),
        zIndex,
        opacity,
      };
    }

    return { transform, zIndex, opacity };
  };

  return (
    <div className="relative w-full py-16">
      <div
        ref={containerRef}
        className="relative w-full min-h-96 touch-pan-y"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`absolute top-0 left-1/2 ${isDragging ? "" : "transition-all duration-500 ease-in-out"}`}
            style={getCardPosition(index)}
          >
            <SkillCard skill={skill} />
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={handlePrev}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full focus:outline-none transition-colors"
        >
          Previous
        </button>
        <div className="flex gap-2 items-center">
          {skills.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer transition-colors ${
                index === activeIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full focus:outline-none transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
};

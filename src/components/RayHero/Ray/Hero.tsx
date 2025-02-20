import React, { useState, useEffect } from "react";

interface RayHeroProps {
  className?: string;
  ref?: React.RefObject<HTMLDivElement | null>;
  style?: React.CSSProperties;
}
export const RayHero: React.FC<RayHeroProps> = ({ className, ref, style }) => {
  const [frames, setFrames] = useState<string[]>([]);
  const [jumpFrames, setJumpFrames] = useState<string[]>([]);
  const [idleFrames, setIdleFrames] = useState<string[]>([]);
  const [isAirborne, setIsAirborne] = useState<boolean>(false);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);

  const GenerateFramesFromImg = (
    imageSrc: string,
    framesFrom: number = 0,
    framesTo: number = 6,
    scale: number = 1,
  ) => {
    const img = new Image();
    img.src = imageSrc;
    const extractedFrames: string[] = [];
    img.onload = () => {
      // Calculate each frame's width assuming frames are laid out horizontally
      const frameWidth = img.width / 6;
      const frameHeight = img.height;
      const canvas = document.createElement("canvas");
      canvas.width = frameWidth;
      canvas.height = frameHeight;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        for (let i = framesFrom; i < framesTo; i++) {
          // Clear the canvas before drawing the next frame
          ctx.clearRect(0, 0, frameWidth, frameHeight);
          // Draw the specific frame from the spritesheet
          ctx.drawImage(
            img,
            i * frameWidth, // source x
            0, // source y
            frameWidth,
            frameHeight,
            0, // destination x
            0, // destination y
            frameWidth * scale,
            frameHeight * scale,
          );
          // Convert the canvas content to a data URL (base64 image)
          extractedFrames.push(canvas.toDataURL());
        }
      }
    };
    return extractedFrames;
  };

  useEffect(() => {
    const idle: string[] = GenerateFramesFromImg("/rayHero/idle.png");
    setIdleFrames(idle);
    const jump: string[] = GenerateFramesFromImg("/rayHero/jump.png", 2, 4);
    setJumpFrames(jump);
  }, []);

  useEffect(() => {
    if (isAirborne) setFrames(jumpFrames);
    else setFrames(idleFrames);
  }, [idleFrames, jumpFrames, isAirborne]);

  useEffect(() => {}, []);
  // Cycle through frames on an interval
  useEffect(() => {
    setCurrentFrameIndex(0);
    if (frames.length === 0) return;
    const interval = setInterval(() => {
      setCurrentFrameIndex((prev) => (prev + 1) % frames.length);
    }, 100); // 100ms per frame, adjust as needed
    return () => clearInterval(interval);
  }, [frames]);

  return (
    <div
      className={className}
      ref={ref}
      style={style}
      onTransitionStart={() => {
        setIsAirborne(true);
      }}
      onTransitionEnd={(e) => {
        // Check that the transitioned property is 'top'
        if (e.propertyName === "top") {
          setIsAirborne(false);
          // You can update state or call a callback here if needed.
        }
      }}
    >
      <img src={frames[currentFrameIndex]} alt="RayHero Animation" />
    </div>
  );
};

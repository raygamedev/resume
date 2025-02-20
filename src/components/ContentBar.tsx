import React from "react";

export const ContentBar: React.FC<{
  activeItem: string;
  onItemSelect: (item: string) => void;
}> = ({ activeItem, onItemSelect }) => {
  const items = ["ABOUT", "CORE", "SKILLS", "GAME"];
  console.log(activeItem);
  return (
    <div className="fixed top-30 left-3 p-3 gap-2 font-vcr flex flex-col">
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => onItemSelect(item)}
          className={`relative p-1 cursor-pointer transition-all duration-200 ease-in-out text-2xl ${
            item === activeItem
              ? "text-yellow-50 scale-110"
              : "text-gray-400 hover:text-gray-300 scale-100"
          }`}
        >
          {item.toUpperCase()}
          <div
            className={`absolute bottom-0 left-0 ml-1 h-[2px] w-full bg-[#ffae00] transition-all duration-200 ease-out origin-left transform ${
              item === activeItem ? "scale-x-150" : "scale-x-0"
            }`}
          />
        </div>
      ))}
    </div>
  );
};

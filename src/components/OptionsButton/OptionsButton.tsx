import React from "react";
import { Dropdown } from "../Dropdown/Dropdown.tsx";
import { Bars3Icon } from "@heroicons/react/16/solid";

export const OptionsButton: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLDivElement>(null);
  return (
    <div className={"relative "} ref={buttonRef}>
      <Bars3Icon
        className="w-6 h-6 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />
      <Dropdown
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        items={[]}
        buttonRef={buttonRef}
        className={"w-30 right-0  p-10 h-30"}
      />
    </div>
  );
};

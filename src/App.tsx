import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Version } from "./components/Version/Version.tsx";
import { useRef, useState, useEffect } from "react";
import { useMobileStore } from "./store";

const App = () => {
  const floatingRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const [floatingTop, setFloatingTop] = useState<number>(0);

  const { isMobile, setIsMobile } = useMobileStore();

  useEffect(() => {
    // Function to update mobile state
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Example breakpoint for mobile screens
    };

    // Check on mount
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMobile]);

  return (
    <div
      className={`m text-dark-900 
      bg-light
      bg-[linear-gradient(to_right,rgba(240,240,240,1)_0px_1px,transparent_2px_200px),linear-gradient(to_bottom,rgba(240,240,240,1)_0px_1px,transparent_2px_200px)]
      bg-[size:10rem_10rem]
      dark:text-yellow-50 dark:bg-dark-900 
      dark:bg-[linear-gradient(to_right,rgba(25,25,25,1)_0px_1px,transparent_2px_200px),linear-gradient(to_bottom,rgba(25,25,25,1)_0px_1px,transparent_2px_200px)]
      ${isMobile ? "p-4" : "p-8"}`} // adjust padding for mobile/desktop
    >
      <Header />
      <Home setFloatingTop={setFloatingTop} floatingRef={floatingRef} />
      <Version />
    </div>
  );
};

export default App;

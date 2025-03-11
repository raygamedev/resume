import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Version } from "./components/Version/Version.tsx";
import { useRef, useState, useEffect } from "react";
import { useMobileStore, useScrollStore } from "./store";

const App = () => {
  const floatingRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const [floatingTop, setFloatingTop] = useState<number>(0);

  const { isMobile, setIsMobile } = useMobileStore();
  const setIsScrolling = useScrollStore((state) => state.setIsScrolling);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleScroll = () => {
      // Update the ref directly without re-rendering the component
      setIsScrolling(true);
      // Clear the previous timeout if any
      if (timer) clearTimeout(timer);
      // Set a timeout to mark scrolling as stopped after 100ms of inactivity
      timer = setTimeout(() => {
        setIsScrolling(false);
      }, 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsScrolling]);

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
        bg-light bg-fixed overflow-x-hidden
        bg-[linear-gradient(to_right,rgba(240,240,240,1)_0px_1px,transparent_2px_200px),linear-gradient(to_bottom,rgba(240,240,240,1)_0px_1px,transparent_2px_200px)]
        bg-[size:10rem_10rem]
        dark:text-yellow-50 dark:bg-dark-900
        dark:bg-[linear-gradient(to_right,rgba(25,25,25,1)_0px_1px,transparent_2px_200px),linear-gradient(to_bottom,rgba(25,25,25,1)_0px_1px,transparent_2px_200px)]
        relative
        ${isMobile ? "p-4" : "p-8"}`}
    >
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <svg
          // viewBox="1 1 1920 1920"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="1.49"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      <Header />
      <Home setFloatingTop={setFloatingTop} floatingRef={floatingRef} />
      <Version />
    </div>
  );
};

export default App;

import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Version } from "./components/Version/Version.tsx";
import { RayHero } from "./components/RayHero/Ray/Hero.tsx";
import { useRef, useState } from "react";

const App = () => {
  const floatingRef = useRef<HTMLDivElement>(null);
  const [floatingTop, setFloatingTop] = useState<number>(0);
  return (
    <div
      className=" m
  text-dark-900
  bg-[linear-gradient(to_right,rgba(230,230,230,1)_0px_1px,transparent_2px_200px),linear-gradient(to_bottom,rgba(230,230,230,1)_0px_1px,transparent_2px_200px)]
  bg-[size:10rem_10rem]
  dark:text-yellow-50
  dark:bg-dark-900
  dark:bg-[linear-gradient(to_right,rgba(35,35,35,1)_0px_1px,transparent_2px_200px),linear-gradient(to_bottom,rgba(35,35,35,1)_0px_1px,transparent_2px_200px)]"
    >
      <RayHero
        ref={floatingRef}
        style={{
          position: "absolute",
          top: floatingTop,
          left: "5%",
          transition: "top 0.5s ease",
        }}
      />
      <Header />
      <Home setFloatingTop={setFloatingTop} floatingRef={floatingRef} />
      <Version />
    </div>
  );
};
export default App;

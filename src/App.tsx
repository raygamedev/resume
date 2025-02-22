import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Version } from "./components/Version/Version.tsx";
import { useRef, useState } from "react";

const App = () => {
  const floatingRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const [floatingTop, setFloatingTop] = useState<number>(0);
  return (
    <div
      className=" m
  text-dark-900
  bg-[linear-gradient(to_right,rgba(230,230,230,1)_0px_1px,transparent_2px_200px),linear-gradient(to_bottom,rgba(230,230,230,1)_0px_1px,transparent_2px_200px)]
  bg-[size:10rem_10rem]
  dark:text-yellow-50
  dark:bg-dark-900
  dark:bg-[linear-gradient(to_right,rgba(25,25,25,1)_0px_1px,transparent_2px_200px),linear-gradient(to_bottom,rgba(25,25,25,1)_0px_1px,transparent_2px_200px)]"
    >
      <Header />
      <Home setFloatingTop={setFloatingTop} floatingRef={floatingRef} />
      <Version />
    </div>
  );
};
export default App;

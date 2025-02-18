import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Version } from "./components/Version/Version.tsx";
import { RayHero } from "./components/RayHero/Ray/Hero.tsx";

const App = () => {
  return (
    <div
      className=" min-h-screen w-screen
  text-dark-900
  bg-[linear-gradient(to_right,rgba(230,230,230,1)_0px_1px,transparent_2px_200px),linear-gradient(to_bottom,rgba(230,230,230,1)_0px_1px,transparent_2px_200px)]
  bg-[size:10rem_10rem]
  dark:text-yellow-50
  dark:bg-dark-900
  dark:bg-[linear-gradient(to_right,rgba(35,35,35,1)_0px_1px,transparent_2px_200px),linear-gradient(to_bottom,rgba(35,35,35,1)_0px_1px,transparent_2px_200px)]"
    >
      <RayHero className={"absolute left-40 top-180"} />
      <Header />
      <Home />
      <Version />
    </div>
  );
};
export default App;

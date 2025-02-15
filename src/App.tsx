import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Version } from "./components/Version/Version.tsx";

const App = () => {
  return (
    <div className="h-screen w-screen text-dark-900 dark:text-yellow-50 dark:bg-dark-900 dark:bg-[linear-gradient(to_right,rgb(25,25,25)_0px_1px,transparent_2px_200px),linear-gradient(to_bottom,rgb(25,25,25)_0px_1px,transparent_2px_200px)] bg-[size:10rem_10rem]">
      <Header />
      <Home />
      <Version />
    </div>
  );
};
export default App;

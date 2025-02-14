import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Version } from "./components/Version/Version.tsx";

const App = () => {
  return (
    <div className="h-max w-screen  dark:bg-dark-900">
      <Header />
      <Home />
      <Version />
    </div>
  );
};
export default App;

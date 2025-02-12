import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";

const App = () => {
  return (
    <div className="overflow-hidden h-screen w-screen bg-white dark:bg-gray-900">
      <Header lol="lol" />
      <Home lol="lol" />
    </div>
  );
};
export default App;

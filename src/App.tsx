import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";

const App = () => {
  return (
    <div className="h-max w-screen bg-white dark:bg-gray-900">
      <Header />
      <Home />
    </div>
  );
};
export default App;

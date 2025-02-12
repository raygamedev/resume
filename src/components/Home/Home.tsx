import { ThemeToggleButton } from "../Header/ThemeToggleButton";
import { Profile } from "../Profile/Profile";
import { Resume } from "../Resume/Resume";

interface HomeProps {
  lol: string;
}

export const Home: React.FC<HomeProps> = ({ lol }) => {
  return (
    <div className="pt-16">
      <div className="w-screen flex justify-center h-screen grow dark:bg-gray-800">
        <div className="container mx-auto p-4 bg-[#FFFBF1] dark:bg-gray-900 side-shadow flex justify-center">
          <Profile />
          <Resume />
        </div>
      </div>
    </div>
  );
};

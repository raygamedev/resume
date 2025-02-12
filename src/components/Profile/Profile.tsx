interface ProfileProps {
  lol: string;
}

export const Profile: React.FC<ProfileProps> = () => {
  return (
    <div className="w-full font-[Roboto_Mono] h-150 items-center flex flex-row justify-around">
      <div className="flex flex-col  font-[Roboto_Mono] text-gray-600">
        <div className="text-7xl">Dan Raymond</div>
        <div className="pl-2 text-2xl">Fullstack Software Engineer</div>
        <button className="w-30 h-10 bg-blue-600">Contact</button>
      </div>
      <div className="rounded-full border-4 border-blue-300 p-1">
        <div className="rounded-full border-4 border-orange-300 p-1">
          <div className="relative w-100 h-100 overflow-hidden rounded-full">
            <img
              src="/profilePicture.jpg"
              alt="Profile"
              className="w-full h-full object-center object-cover shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

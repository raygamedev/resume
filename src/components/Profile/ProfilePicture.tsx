export const ProfilePicture = () => {
  return (
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
  );
};

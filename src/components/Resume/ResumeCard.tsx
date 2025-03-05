import { ExperienceData } from "../../types";

interface ResumeCardProps {
  exp: ExperienceData;
  className?: string;
}

export const ResumeCard: React.FC<ResumeCardProps> = ({ exp, className }) => {
  return (
    <div
      key={exp.jobTitle}
      className={`h-[300px] w-[600px] border-1 border-zinc-600 overflow-hidden bg-zinc-800 font-jetbrains ${className} rounded-lg`}
    >
      <p className=" p-2 text-md  uppercase text-t-light border-b-1 border-zinc-600 rounded-tl-lg rounded-tr-lg   backdrop-blur-lg">
        {exp.jobTitle}
      </p>
      <div className="flex bg-zinc-900 p-3 flex-col justify-start h-full">
        {exp.responsibilities.map((responsibility, index) => (
          <p key={index} className=" h-full w-full text-xs font-jetbrains">
            {responsibility}
          </p>
        ))}
      </div>
    </div>
  );
};

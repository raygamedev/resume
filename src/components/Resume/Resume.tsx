import { ResumeCard } from "./Card";

interface ResumeProps {
  lol: string;
}

export const Resume: React.FC<ResumeProps> = ({ lol }) => {
  return (
    <div>
      <ResumeCard lol="lol" />
      <ResumeCard lol="lol" />
      <ResumeCard lol="lol" />
      <ResumeCard lol="lol" />
    </div>
  );
};

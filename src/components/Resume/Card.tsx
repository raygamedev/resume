interface ResumeCardProps {
  lol: string;
}

export const ResumeCard: React.FC<ResumeCardProps> = ({ lol }) => {
  return <div className="bg-white">{lol}</div>;
};

// Inside ResumeCard.jsx/tsx
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};
import { ExperienceData } from "../../types";

interface ResumeCardProps {
  exp: ExperienceData;
  className?: string;
}

export const ResumeCard: React.FC<ResumeCardProps> = ({ exp, className }) => {
  return (
    <motion.div
      className={`resume-card w-3/5 h-max flex flex-col dark:text-t-light ${className}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="text-3xl font-jetbrains">
        {exp.jobTitle.toUpperCase()}
      </div>
      <div>{exp.dates}</div>
      <div key={exp.jobTitle} className={`h-max w-full `}>
        <div className="flex mt-5 flex-col gap-5 justify-start h-full">
          {exp.responsibilities.map((responsibility, index) => (
            <p
              key={index}
              className="h-full w-full text-sm text-zinc-400 font-jetbrains"
            >
              {responsibility}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

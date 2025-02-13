interface DropdownFieldProps {
  text: string;
}

export const DropdownField: React.FC<DropdownFieldProps> = ({ text }) => {
  return <div>{text}</div>;
};

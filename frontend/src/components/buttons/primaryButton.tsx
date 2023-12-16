import { CustomButtonProps } from "../../types/index";

const PrimaryButton: React.FC<CustomButtonProps> = ({ text, url, style }) => {
  return (
    <button
      className={`bg-customGreen text-white text-4xl h-10 px-[72px] rounded-md ${style}`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;

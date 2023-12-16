import { CustomButtonProps } from "../../types/index";

const PrimaryButton: React.FC<CustomButtonProps> = ({ text, style }) => {
  return (
    <button
      className={`bg-customGreen text-white text-3xl h-9 px-12 sm:text-4xl sm:h-10 sm:px-[72px] rounded-md ${style}`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;

import { Link } from "react-router-dom";
import { CustomButtonProps } from "../../types/index";

const PrimaryButton: React.FC<CustomButtonProps> = ({ text, url, style }) => {
  return (
    <div className={style}>
      <Link to={url}>{text}</Link>
    </div>
  );
};

export default PrimaryButton;

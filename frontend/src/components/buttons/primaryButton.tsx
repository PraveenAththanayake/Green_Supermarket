import { Link } from "react-router-dom";
import { CustomButtonProps } from "../../types/index";

const PrimaryButton: React.FC<CustomButtonProps> = ({ text, url, style }) => {
  return (
    <Link to={url}>
      <div className={style}>{text}</div>
    </Link>
  );
};

export default PrimaryButton;

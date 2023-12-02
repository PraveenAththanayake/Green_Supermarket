import { Link } from "react-router-dom";
import { CustomButtonProps } from "../../interfaces/index";

const primaryButton: React.FC<CustomButtonProps> = ({ text, url, style }) => {
  return (
    <div className={style}>
      <Link to={url}>{text}</Link>
    </div>
  );
};

export default primaryButton;

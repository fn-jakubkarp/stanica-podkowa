import { useNavigate } from "react-router-dom";
import { brandAssets } from "../../../utils/assets";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  const navigate = useNavigate();
  const logo = brandAssets.logo;

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center gap-2">
      <img
        src={logo}
        alt="Logo"
        className={`h-auto w-[100px] lg:w-[175px] ${className} cursor-pointer`}
        onClick={handleClick}
      />
    </div>
  );
};

export default Logo;

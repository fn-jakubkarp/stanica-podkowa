import { useNavigate } from "react-router-dom";
import { logo, logoDark } from "../../../utils/assets";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

const Logo: React.FC<LogoProps> = ({ className, variant = "light" }) => {
  const navigate = useNavigate();
  const logoSrc = variant === "dark" ? logoDark : logo;

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center gap-2">
      <img
        src={logoSrc}
        alt="Logo"
        className={`h-auto w-[100px] lg:w-[175px] ${className} cursor-pointer`}
        onClick={handleClick}
      />
    </div>
  );
};

export default Logo;

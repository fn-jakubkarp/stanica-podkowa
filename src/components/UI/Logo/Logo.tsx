import { logo } from "../../../utils/assets";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className="flex items-center gap-2">
      <img src={logo} alt="Logo" className={`h-auto w-[100px] lg:w-[175px] ${className}`} />
    </div>
  );
};

export default Logo;

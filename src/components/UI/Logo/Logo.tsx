import { logo } from "../../../utils/assets";

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={logo} alt="Logo" className="h-auto w-[100px] " />
      {/* <span className="text-text">Stanica Podkowa</span> */}
    </div>
  );
};

export default Logo;

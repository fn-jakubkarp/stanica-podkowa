import logo from "../../../../public/logo.svg";

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return (
    <div className="flex gap-2 items-center">
      <img src={logo} alt="Logo" className="w-8" />
      <span className="text-text">Stanica Podkowa</span>
    </div>
  );
};

export default Logo;

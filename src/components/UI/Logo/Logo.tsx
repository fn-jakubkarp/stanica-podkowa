import LOGOTYP from "../../../assets/LOGOTYP.svg";

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={LOGOTYP} alt="Logo" className="h-auto w-[100px] " />
      {/* <span className="text-text">Stanica Podkowa</span> */}
    </div>
  );
};

export default Logo;

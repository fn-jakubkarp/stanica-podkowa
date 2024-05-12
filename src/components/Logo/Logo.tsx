interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return (
    <div className="flex gap-2 items-center">
      <img src="/public/logo.svg" alt="Logo" className="w-8" />
      <span>Stanica Podkowa</span>
    </div>
  );
};

export default Logo;

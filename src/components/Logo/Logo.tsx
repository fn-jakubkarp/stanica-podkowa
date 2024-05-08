interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return (
    <div className="flex items-center gap-2">
      <img src="/public/logo.svg" alt="Logo" />
      <span>Stanica</span>
    </div>
  );
};

export default Logo;

interface HamburgerMenuProps {
  clicked: boolean;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ clicked }) => {
  return (
    <>
      <span
        id="line-1"
        className={`block h-0.5 w-full bg-background transition-transform duration-300 ${clicked ? "transform rotate-45 translate-y-2" : ""}`}
      ></span>
      <span
        id="line-2"
        className={`block h-0.5 w-full bg-background transition-opacity duration-300 ${clicked ? "opacity-0" : "opacity-100"}`}
      ></span>
      <span
        id="line-3"
        className={`block h-0.5 w-full bg-background transition-transform duration-300 ${clicked ? "transform -rotate-45 -translate-y-2 " : ""}`}
      ></span>
    </>
  );
};

export default HamburgerMenu;

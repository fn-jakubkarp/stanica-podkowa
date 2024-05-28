import { animated, useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";
import HamburgerMenu from "../../UI/HamburgerMenu/HamburgerMenu";
import Logo from "../../UI/Logo/Logo";
const ExperimentalNavbar: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const threshold = 15;

      if (currentScrollY > lastScrollY && currentScrollY > threshold) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  //   Hiding animation off screen
  const headerSpring = useSpring({
    to: { transform: hidden ? "translateY(-100%)" : "translateY(0%)" },
    config: { duration: 350 },
  });

  //   Drawer logic
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <animated.header
        className="fixed flex w-screen justify-between p-4 bg-white z-20"
        style={headerSpring}
      >
        <Logo />
        <button onClick={toggleDrawer} className="">
          <HamburgerMenu clicked={isDrawerOpen} />
        </button>
      </animated.header>

      {isDrawerOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-red-500">
          <nav className="h-screen">
            <ul className="flex flex-col justify-around py-16">
              <li className="h-auto flex-1 border">
                <a className="flex h-full w-full items-center px-8 text-center">
                  O nas
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default ExperimentalNavbar;

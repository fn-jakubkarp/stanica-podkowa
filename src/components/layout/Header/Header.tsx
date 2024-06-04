import { animated, useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";
import Logo from "../../UI/Logo/Logo";
import Navbar from "../Navbar/Navbar";

const Header = () => {
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
  return (
    <animated.header
      style={headerSpring}
      className="defaultPaddings sticky top-0 z-20 flex  flex-wrap items-center justify-between border-b border-text-DARK bg-white md:px-16 lg:mx-auto lg:w-full lg:px-32"
    >
      <div className="mx-auto flex w-full max-w-screen-2xl flex-wrap items-center justify-between">
        <Logo />
        <Navbar />
      </div>
    </animated.header>
  );
};

export default Header;

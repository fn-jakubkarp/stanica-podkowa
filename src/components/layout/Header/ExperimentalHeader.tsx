import { animated, useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";
import Logo from "../../UI/Logo/Logo";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isInHero, setIsInHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const threshold = 15;
      const heroHeight = document.getElementById("hero")?.offsetHeight || 0;

      // Set hidden state based on scroll direction and threshold
      if (currentScrollY > lastScrollY && currentScrollY > threshold) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      // Check if the user is within the Hero section
      setIsInHero(currentScrollY < heroHeight);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Hiding animation off screen
  const headerSpring = useSpring({
    to: { transform: hidden ? "translateY(-100%)" : "translateY(0%)" },
    config: { duration: 350 },
  });

  // Set variant and styles based on scroll position
  const currentVariant = isInHero ? "dark" : "light";
  const backgroundColor =
    currentVariant === "light" ? "bg-white" : "bg-gray-900 bg-opacity-90";
  const borderColor =
    currentVariant === "light" ? "border-b-[#64554F]" : "border-b";

  return (
    <animated.header
      style={headerSpring}
      className={`defaultPaddings fixed top-0 z-50 flex w-full flex-wrap items-center justify-between border-b md:px-16 lg:mx-auto lg:px-32 ${backgroundColor} ${borderColor}`}
    >
      <div className="mx-auto flex w-full max-w-screen-2xl flex-wrap items-center justify-between">
        <Logo variant={currentVariant} />
        <Navbar variant={currentVariant} />
      </div>
    </animated.header>
  );
};

export default Header;

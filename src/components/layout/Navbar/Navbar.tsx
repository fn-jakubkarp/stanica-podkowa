import { useEffect, useState } from "react";
import HamburgerMenu from "../../UI/HamburgerMenu/HamburgerMenu";
import Logo from "../../UI/Logo/Logo";

import { animated, useSpring } from "@react-spring/web";

const Navbar: React.FC = () => {
  // Hide/show navigation on mobile
  const [isNavVisible, setIsNavVisible] = useState(false);
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsNavVisible(!isNavVisible);
    } else {
      console.error(`Element with id '${sectionId}' not found.`);
    }
  };

  // Hide navigation on page scroll
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

  const headerSpring = useSpring({
    to: { transform: hidden ? "translateY(-100%)" : "translateY(0%)" },
    config: { duration: 350 },
  });

  return (
    <animated.header
      className="fixed left-0 top-0 z-20 flex  w-screen items-center justify-between p-4 md:p-8"
      style={headerSpring}
    >
      <button>
        <a href="#hero">
          <Logo />
        </a>
      </button>
      <div
        className={`fixed inset-0 z-10 bg-opacity-75 transition-opacity duration-300 ${isNavVisible ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <nav className="h-screen bg-accent">
          <ul className="flex h-screen flex-col justify-around py-16 text-white">
            <li className="h-auto flex-1 border">
              <a
                href="#o-nas"
                onClick={() => scrollToSection("o-nas")}
                className="flex h-full w-full items-center px-8 text-center"
              >
                O nas
              </a>
            </li>
            <li className="h-auto flex-1 border">
              <a
                href="#atrakcje"
                className="flex h-full w-full items-center px-8 text-center"
                onClick={() => scrollToSection("atrakcje")}
              >
                Atrakcje
              </a>
            </li>
            <li className="h-auto flex-1 border">
              <a
                href="#galeria"
                className="flex h-full w-full items-center px-8 text-center"
                onClick={() => scrollToSection("galeria")}
              >
                Galeria
              </a>
            </li>
            <li className="h-auto flex-1 border">
              <a
                href="#jak-dojechac"
                className="flex h-full w-full items-center px-8 text-center"
                onClick={() => scrollToSection("jak-dojechac")}
              >
                Jak dojechać
              </a>
            </li>
            <li className="h-auto flex-1 border">
              <a
                href="#kontakt"
                className="flex h-full w-full items-center px-8 text-center"
                onClick={() => scrollToSection("kontakt")}
              >
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="text-text z-30 flex h-6 w-6 items-center justify-center text-2xl lg:hidden">
        <button
          onClick={toggleNav}
          aria-expanded={isNavVisible}
          className="flex h-full w-full flex-col items-end justify-around"
        >
          <HamburgerMenu clicked={isNavVisible} />
        </button>
      </div>
    </animated.header>
  );
};

export default Navbar;

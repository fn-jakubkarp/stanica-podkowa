import { useState } from "react";
import Logo from "../../UI/Logo/Logo";
import HamburgerMenu from "../../UI/HamburgerMenu/HamburgerMenu";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";

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
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // @ts-ignore
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      className="flex justify-between items-center w-full p-4 fixed top-0 left-0 z-20"
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <button>
        <a href="#hero">
          <Logo />
        </a>
      </button>
      <div
        className={`fixed inset-0 bg-opacity-75 z-10 transition-opacity duration-300 ${isNavVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <nav className="bg-accent h-screen">
          <ul className="text-white flex flex-col h-screen justify-around py-16">
            <li className="border flex-1 h-auto">
              <a
                href="#o-nas"
                onClick={() => scrollToSection("o-nas")}
                className="h-full w-full text-center flex items-center px-8"
              >
                O nas
              </a>
            </li>
            <li className="border flex-1 h-auto">
              <a
                href="#atrakcje"
                className="h-full w-full text-center flex items-center px-8"
                onClick={() => scrollToSection("atrakcje")}
              >
                Atrakcje
              </a>
            </li>
            <li className="border flex-1 h-auto">
              <a
                href="#galeria"
                className="h-full w-full text-center flex items-center px-8"
                onClick={() => scrollToSection("galeria")}
              >
                Galeria
              </a>
            </li>
            <li className="border flex-1 h-auto">
              <a
                href="#jak-dojechac"
                className="h-full w-full text-center flex items-center px-8"
                onClick={() => scrollToSection("jak-dojechac")}
              >
                Jak dojechać
              </a>
            </li>
            <li className="border flex-1 h-auto">
              <a
                href="#kontakt"
                className="h-full w-full text-center flex items-center px-8"
                onClick={() => scrollToSection("kontakt")}
              >
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex h-6 w-6 md:hidden text-2xl text-text z-30 items-center justify-center">
        <button
          onClick={toggleNav}
          aria-expanded={isNavVisible}
          className="flex flex-col justify-around h-full w-full items-end"
        >
          <HamburgerMenu clicked={isNavVisible} />
        </button>
      </div>
    </motion.header>
  );
};

export default Navbar;

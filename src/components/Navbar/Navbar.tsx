import { useState } from "react";
import Logo from "../Logo/Logo";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

const Navbar: React.FC = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <header className="flex justify-between items-center w-full p-4 fixed top-0 left-0 z-20 bg-background">
      <Logo />
      <div
        className={`fixed inset-0 bg-text bg-opacity-75 z-10 transition-opacity duration-300 ${isNavVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <nav className="bg-accent h-screen">
          <ul className="text-white flex flex-col h-screen justify-around py-16">
            <li className="border flex-1 h-auto">
              <a
                href="#"
                className="h-full w-full text-center flex items-center px-8"
              >
                O nas
              </a>
            </li>
            <li className="border flex-1 h-auto">
              <a
                href="#"
                className="h-full w-full text-center flex items-center px-8"
              >
                Atrakcje
              </a>
            </li>
            <li className="border flex-1 h-auto">
              <a
                href="#"
                className="h-full w-full text-center flex items-center px-8"
              >
                Galeria
              </a>
            </li>
            <li className="border flex-1 h-auto">
              <a
                href="#"
                className="h-full w-full text-center flex items-center px-8"
              >
                Jak dojechać
              </a>
            </li>
            <li className="border flex-1 h-auto">
              <a
                href="#"
                className="h-full w-full text-center flex items-center px-8"
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
    </header>
  );
};

export default Navbar;

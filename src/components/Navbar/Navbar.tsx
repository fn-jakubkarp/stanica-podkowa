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
          <ul className="text-white flex flex-col h-screen justify-around p-16">
            <li className="border">
              <a href="#">O nas</a>
            </li>
            <li>
              <a href="#">Atrakcje</a>
            </li>
            <li>
              <a href="#">Galeria</a>
            </li>
            <li>
              <a href="#">Jak dojechać</a>
            </li>
            <li>
              <a href="#">Kontakt</a>
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
// }
// className={`${isNavVisible ? "flex" : "hidden"} md:flex md:absolute md:bg-white md:min-h-[60vh] md:flex-col  md:top-1/2 md:right-0 md:translate-y-[-50%] md:w-[200px] md:items-center md:gap-4`}

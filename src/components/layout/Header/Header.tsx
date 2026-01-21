import { animated } from "@react-spring/web";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../UI/Logo/Logo";

const NavLinks = ({ onNavLinkClick }: { onNavLinkClick: () => void }) => {
  const linkClasses =
    "font-josefin text-primary-700 hover:text-primary-500 transition-colors duration-200";
  const activeLinkClasses = "text-primary-500 font-bold";

  const handleNavLinkClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    onNavLinkClick();
  };

  return (
    <>
      <NavLink
        to="/"
        onClick={handleNavLinkClick}
        className={({ isActive }) =>
          `${linkClasses} ${isActive ? activeLinkClasses : ""}`
        }
      >
        Strona główna
      </NavLink>
      <NavLink
        to="/cennik"
        onClick={handleNavLinkClick}
        className={({ isActive }) =>
          `${linkClasses} ${isActive ? activeLinkClasses : ""}`
        }
      >
        Cennik
      </NavLink>
      <NavLink
        to="/galeria"
        onClick={handleNavLinkClick}
        className={({ isActive }) =>
          `${linkClasses} ${isActive ? activeLinkClasses : ""}`
        }
      >
        Galeria
      </NavLink>
    </>
  );
};

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <animated.header className="fixed left-0 right-0 top-0 z-50 border-b border-primary-100 bg-primary-50 shadow-sm backdrop-blur-sm">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-8">
              <NavLinks onNavLinkClick={closeDrawer} />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleDrawer}
            className="p-2 text-primary-700 transition-colors hover:text-primary-500 md:hidden"
            aria-label="Toggle menu"
          >
            {isDrawerOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isDrawerOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 px-2 py-4">
              <NavLinks onNavLinkClick={closeDrawer} />
            </div>
          </div>
        )}
      </div>
    </animated.header>
  );
};

export default Header;

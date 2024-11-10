import { animated } from "@react-spring/web";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../UI/Logo/Logo";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);

  const NavLinks = () => {
    const linkClasses = "font-josefin text-primary-700 hover:text-primary-500 transition-colors duration-200";
    const activeLinkClasses = "text-primary-500 font-bold";

    return (
      <>
        <NavLink 
          to="/" 
          onClick={closeDrawer}
          className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}
        >
          Strona główna
        </NavLink>
        <NavLink 
          to="/cennik" 
          onClick={closeDrawer}
          className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}
        >
          Cennik
        </NavLink>
        <NavLink 
          to="/galeria" 
          onClick={closeDrawer}
          className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}
        >
          Galeria
        </NavLink>
      </>
    );
  };

  return (
    <animated.header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-primary-100 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-8">
              <NavLinks />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleDrawer}
            className="md:hidden p-2 text-primary-700 hover:text-primary-500 transition-colors"
            aria-label="Toggle menu"
          >
            {isDrawerOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isDrawerOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 py-4 px-2">
              <NavLinks />
            </div>
          </div>
        )}
      </div>
    </animated.header>
  );
};

export default Header;
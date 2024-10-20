import { useState } from "react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

interface NavLinksProps {
  closeDrawer: () => void;
  variant?: "light" | "dark";
}

const NavLinks: React.FC<NavLinksProps> = ({
  closeDrawer,
  variant = "light",
}) => {
  const linkClasses =
    variant === "dark"
      ? "text-white hover:underline lg:h-full lg:text-2xl"
      : "text-black hover:underline lg:h-full lg:text-2xl";

  return (
    <>
      <NavLink to="/" className={linkClasses} onClick={closeDrawer}>
        Strona główna
      </NavLink>
      <NavLink to="/cennik" className={linkClasses} onClick={closeDrawer}>
        Cennik
      </NavLink>
      <NavLink to="/galeria" className={linkClasses} onClick={closeDrawer}>
        Galeria
      </NavLink>
    </>
  );
};

interface NavbarProps {
  variant?: "light" | "dark";
}

const Navbar: React.FC<NavbarProps> = ({ variant = "light" }) => {
  // Drawer logic
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const buttonColor = variant === "dark" ? "text-white" : "text-black";

  return (
    <>
      <nav className={`flex justify-end sm:w-1/2 lg:h-full lg:items-center`}>
        <div className="hidden h-full w-full items-center justify-between md:flex">
          <NavLinks closeDrawer={closeDrawer} variant={variant} />
        </div>
        <div className="h-[24px] md:hidden">
          <button onClick={toggleDrawer} className={buttonColor}>
            {isDrawerOpen ? (
              <IoCloseOutline size={24} />
            ) : (
              <IoMenuOutline size={24} />
            )}
          </button>
        </div>
      </nav>
      {isDrawerOpen && (
        <div className="flex basis-full flex-col items-center gap-2 pt-8 text-2xl">
          <NavLinks closeDrawer={closeDrawer} variant={variant} />
        </div>
      )}
    </>
  );
};

export default Navbar;

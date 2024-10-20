import { useState } from "react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

interface NavLinksProps {
  closeDrawer: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ closeDrawer }) => {
  return (
    <>
      <NavLink
        to="/"
        className="hover:underline lg:h-full lg:text-2xl"
        onClick={closeDrawer}
      >
        Strona główna
      </NavLink>
      <NavLink
        to="/cennik"
        className="hover:underline lg:h-full lg:text-2xl"
        onClick={closeDrawer}
      >
        Cennik
      </NavLink>
      <NavLink
        to="/galeria"
        className="hover:underline lg:h-full lg:text-2xl"
        onClick={closeDrawer}
      >
        Galeria
      </NavLink>
    </>
  );
};

const Navbar: React.FC = () => {
  //   Drawer logic
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <nav className="flex justify-end sm:w-1/2 lg:h-full lg:items-center">
        <div className="hidden h-full w-full items-center justify-between md:flex">
          <NavLinks closeDrawer={closeDrawer} />
        </div>
        <div className="h-[24px] md:hidden">
          <button onClick={toggleDrawer} className="">
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
          <NavLinks closeDrawer={closeDrawer} />
        </div>
      )}
    </>
  );
};

export default Navbar;

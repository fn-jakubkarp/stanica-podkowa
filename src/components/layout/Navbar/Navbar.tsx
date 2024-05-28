import { useState } from "react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/" className="hover:underline">
        Strona główna
      </NavLink>
      <NavLink to="/cennik" className="hover:underline">
        Cennik
      </NavLink>
      <NavLink to="/galeria" className="hover:underline">
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

  return (
    <>
      <nav className="flex w-1/3 justify-end">
        <div className="hidden md:flex w-full justify-between">
          <NavLinks />
        </div>
        <div className="md:hidden h-[24px]">
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
        <div className="flex basis-full flex-col items-center pt-8 text-2xl gap-2">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Navbar;

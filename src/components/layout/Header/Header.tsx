import { animated } from "@react-spring/web";
import Logo from "../../UI/Logo/Logo";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <animated.header
      className={`defaultPaddings fixed top-0 z-50 flex w-full flex-wrap items-center justify-between border-b md:px-16 lg:mx-auto lg:px-32`}
    >
      <div className="mx-auto flex w-full max-w-screen-2xl flex-wrap items-center justify-between">
        <Logo />
        <Navbar />
      </div>
    </animated.header>
  );
};

export default Header;

import { Outlet } from "react-router-dom";

import StickyContact from "../components/UI/StickyContact/StickyContact";
import Footer from "../components/layout/Footer/Footer";
import ExperimentalNavbar from "../components/layout/Navbar/ExperimentalNavbar";

const RootLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <Navbar /> */}
      <ExperimentalNavbar />
      <main className="">
        <Outlet />
      </main>
      <StickyContact />
      <Footer />
    </div>
  );
};

export default RootLayout;

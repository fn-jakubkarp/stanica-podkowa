import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";
import StickyContact from "../components/UI/StickyContact/StickyContact";

const RootLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="">
        <Outlet />
      </main>
      <StickyContact />
      <Footer />
    </div>
  );
};

export default RootLayout;

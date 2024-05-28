import { Outlet } from "react-router-dom";

import StickyContact from "../components/UI/StickyContact/StickyContact";
import Footer from "../components/layout/Footer/Footer";
import Header from "../components/layout/Header/Header";

const RootLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="">
        <Outlet />
      </main>
      <StickyContact />
      <Footer />
    </div>
  );
};

export default RootLayout;

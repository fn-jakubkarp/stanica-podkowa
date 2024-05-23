import "./styles/main.css";

// Import layout components
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";

// Import section components
import Hero from "./components/sections/Hero/Hero";
import AboutUs from "./components/sections/AboutUs/AboutUs";
import OurOffer from "./components/sections/OurOffer/OurOffer";
import Directions from "./components/sections/Directions/Directions";
import Contact from "./components/sections/Contact/Contact";
import Faq from "./components/sections/Faq/Faq";

// Import UI components
import ScrollGallery from "./components/UI/ScrollGallery/ScrollGallery";
import StickyContact from "./components/UI/StickyContact/StickyContact";

function App() {
  return (
    <>
      <main className="flex h-full flex-col items-center justify-center overflow-hidden scroll-smooth">
        <Navbar />
        <StickyContact />

        {/* SECTIONS */}
        <Hero />
        <AboutUs />
        <OurOffer />
        <ScrollGallery />
        <Contact />
        <Directions />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

export default App;

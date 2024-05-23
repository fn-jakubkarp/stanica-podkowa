import "./styles/main.css";

// Import layout components
import Navbar from "./components/sections/Navbar/Navbar";
import Hero from "./components/sections/Hero/Hero";
import AboutUs from "./components/sections/AboutUs/AboutUs";
import ScrollGallery from "./components/UI/ScrollGallery/ScrollGallery";
import Directions from "./components/sections/Directions/Directions";
import Contact from "./components/sections/Contact/Contact";
import Faq from "./components/sections/Faq/Faq";
import Footer from "./components/sections/Footer/Footer";

// Import UI components
import StickyContact from "./components/UI/StickyContact/StickyContact";

function App() {
  return (
    <>
      <main className="flex flex-col h-full justify-center items-center scroll-smooth">
        <Navbar />
        <StickyContact />

        {/* SECTIONS */}
        <Hero />
        <AboutUs />
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

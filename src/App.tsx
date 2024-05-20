import "./styles/main.css";

// Import layout components
import Navbar from "./components/sections/Navbar/Navbar";
import Footer from "./components/sections/Footer/Footer";
import Hero from "./components/sections/Hero/Hero";
import ScrollGallery from "./components/sections/ScrollGallery/ScrollGallery";
// import ONas from "./components/sections/ONas/ONas";
// import Atrakcje from "./components/sections/Atrakcje/Atrakcje";
// import JakDojechac from "./components/sections/JakDojechac/JakDojechac";
import Kontakt from "./components/sections/Kontakt/Kontakt";
import Faq from "./components/sections/Faq/Faq";

// Import UI components
// import StickyContact from "./components/UI/StickyContact/StickyContact";

function App() {
  return (
    <>
      <main className="flex flex-col min-h-screen justify-center items-center scroll-smooth">
        <Navbar />

        {/* <StickyContact /> */}

        {/* SECTIONS */}
        <Hero />
        <p>PIZDA NAD GŁOWĄ</p>
        {/* <ScrollGallery /> */}
        {/* <ONas /> */}
        {/* <Atrakcje /> */}
        {/* <JakDojechac /> */}
        <Kontakt />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

export default App;

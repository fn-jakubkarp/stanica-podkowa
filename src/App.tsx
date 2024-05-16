import "./styles/main.css";

// Import layout components
import Navbar from "./components/sections/Navbar/Navbar";
import Footer from "./components/sections/Footer/Footer";
import Hero from "./components/sections/Hero/Hero";
// import ONas from "./components/sections/ONas/ONas";
// import Atrakcje from "./components/sections/Atrakcje/Atrakcje";
// import Galeria from "./components/sections/Galeria/Galeria";
// import JakDojechac from "./components/sections/JakDojechac/JakDojechac";
// import Kontakt from "./components/sections/Kontakt/Kontakt";
// import Faq from "./components/sections/Faq/Faq";

// Import UI components
// import StickyContact from "./components/UI/StickyContact/StickyContact";

function App() {
  return (
    <>
      <main className=" flex flex-col min-h-screen flex-column justify-center items-center scroll-smooth">
        <Navbar />

        {/* <StickyContact /> */}

        {/* SECTIONS */}
        <Hero />
        {/* <ONas /> */}
        {/* <Atrakcje />
        <Galeria />
        <JakDojechac />
        <Kontakt />
        <Faq /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;

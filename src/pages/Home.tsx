// Import layout components

// Import section components
import AboutUs from "../components/sections/AboutUs/AboutUs";
import Hero from "../components/sections/Hero/Hero";
import OurOffer from "../components/sections/OurOffer/OurOffer";
// import Directions from "../components/sections/Directions/Directions";
// import Contact from "../components/sections/Contact/Contact";
// import Faq from "../components/sections/Faq/Faq";
import AroundUs from "../components/sections/AroundUs/AroundUs";

// Import UI components
// import ScrollGallery from "../components/UI/ScrollGallery/ScrollGallery";

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <AboutUs />
      <OurOffer />
      <AroundUs />
      {/* <ScrollGallery /> */}
      {/* <Contact />
      <Directions />
      <Faq /> */}
    </div>
  );
};

export default Home;

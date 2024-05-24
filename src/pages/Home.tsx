// Import layout components

// Import section components
import Hero from "../components/sections/Hero/Hero";
import AboutUs from "../components/sections/AboutUs/AboutUs";
import OurOffer from "../components/sections/OurOffer/OurOffer";
import Directions from "../components/sections/Directions/Directions";
import Contact from "../components/sections/Contact/Contact";
import Faq from "../components/sections/Faq/Faq";

// Import UI components
import ScrollGallery from "../components/UI/ScrollGallery/ScrollGallery";

const Home: React.FC = () => {
  return (
    <div className="">
      <Hero />
      <AboutUs />
      <OurOffer />
      <ScrollGallery />
      <Contact />
      <Directions />
      <Faq />
    </div>
  );
};

export default Home;

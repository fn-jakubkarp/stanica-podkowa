// Import layout components

// Import section components
import AboutUs from "../components/sections/AboutUs/AboutUs";
import Attractions from "../components/sections/Attractions/Attractions";
import Contact from "../components/sections/Contact/Contact";
import Directions from "../components/sections/Directions/Directions";
import Faq from "../components/sections/Faq/Faq";
import Hero from "../components/sections/Hero/Hero";
import OurOffer from "../components/sections/OurOffer/OurOffer";

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <AboutUs />
      <OurOffer />
      <Attractions />

      <Contact />
      <Directions />
      <Faq />
    </div>
  );
};

export default Home;

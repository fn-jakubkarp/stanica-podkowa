import { useScrollToElement } from "../hooks/useScrollToElement";
// Import section components
import AboutUs from "../components/sections/AboutUs/AboutUs";
import Attractions from "../components/sections/Attractions/Attractions";
import Contact from "../components/sections/Contact/Contact";
import Directions from "../components/sections/Directions/Directions";
import Faq from "../components/sections/Faq/Faq";
import Hero from "../components/sections/Hero/Hero";
import Offer from "../components/sections/Offer/Offer";

const Home: React.FC = () => {
  useScrollToElement();

  return (
    <div className="overflow-hidden">
      <Hero />
      <AboutUs />
      <Offer />
      <Attractions />
      <Contact />
      <Directions />
      <Faq />
    </div>
  );
};

export default Home;

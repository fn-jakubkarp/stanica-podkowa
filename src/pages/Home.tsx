import AboutUs from "../components/views/AboutUs/AboutUs";
import Attractions from "../components/views/Attractions/Attractions";
import Contact from "../components/views/Contact/Contact";
import Hero from "../components/views/Hero/Hero";
import Offer from "../components/views/Offer/Offer";

import { useScrollToElement } from "../hooks/useScrollToElement";

const Home: React.FC = () => {
  useScrollToElement();

  return (
    <div className="overflow-hidden">
      <Hero />
      <AboutUs />
      <Offer />
      <Attractions />
      <Contact />
    </div>
  );
};

export default Home;

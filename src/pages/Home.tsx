import { useScrollToElement } from "../hooks/useScrollToElement";
// Import section components
import AboutUs from "../components/views/AboutUs/AboutUs";
import Attractions from "../components/views/Attractions/Attractions";
import Contact from "../components/views/Contact/Contact";
import Directions from "../components/views/Directions/Directions";
import Hero from "../components/views/Hero/Hero";
// import Faq from "../components/views/Faq/Faq";
// import ExpHero from "../components/views/Hero/ExperimentalHero";
import Offer from "../components/views/Offer/Offer";

const Home: React.FC = () => {
  useScrollToElement();

  return (
    <div className="overflow-hidden">
      <Hero />
      {/* <ExpHero /> */}
      <AboutUs />
      <Offer />
      <Attractions />
      <Contact />
      <Directions />
      {/* <Faq /> */}
    </div>
  );
};

export default Home;

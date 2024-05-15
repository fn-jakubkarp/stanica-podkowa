import { motion } from "framer-motion";
import background from "../../../assets/background.webp";

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <>
      <motion.section
        id="hero"
        className="flex flex-col h-screen justify-center"
      >
        <img
          src={background}
          className="absolute top-0 left-0 h-screen object-cover object-left"
        />
        <h1 className="text-4xl z-10 text-background text-center">
          Stanica Podkowa
        </h1>
      </motion.section>
    </>
  );
};

export default Hero;

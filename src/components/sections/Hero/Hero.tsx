import AnimatedImage from "../AnimatedImage/AnimatedImage";
import Uroki from "../Uroki/Uroki";

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <>
      <AnimatedImage />
      <Uroki />
    </>
  );
};

export default Hero;

import background from "../../../assets/background.webp";
import { animated } from "@react-spring/web";

interface AnimatedImageProps {}

const AnimatedImage: React.FC<AnimatedImageProps> = ({}) => {
  return (
    <>
      <animated.section
        id="hero"
        className="flex flex-col min-h-screen h-[100dvh] justify-center w-screen overflow-x-hidden overflow-y-hidden"
      >
        <animated.img
          src={background}
          className="absolute top-0 left-0 h-screen object-cover object-left"
        />
        <animated.h1 className="text-4xl z-10 text-background text-center">
          Stanica Podkowa
        </animated.h1>
      </animated.section>
    </>
  );
};

export default AnimatedImage;

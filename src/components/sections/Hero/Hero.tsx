import background from "../../../assets/background.webp";
import { animated, useScroll, useSpring } from "@react-spring/web";
interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  const { scrollYProgress } = useScroll();

  const imageClip = useSpring({
    clipPath: scrollYProgress.to(
      [0, 0.2],
      ["inset(0% 0% 0% 0%)", "inset(55% 0% 25% 0%)"],
    ),
  });

  const imageTransform = useSpring({
    transform: scrollYProgress.to(
      [0, 0.4], // Adjust range to start after clipPath
      ["translateX(0%)", "translateX(50%)"],
    ),
  });

  const sectionCrop = useSpring({
    height: scrollYProgress.to([0, 0.2], ["100vh", "10vh"]),
  });

  return (
    <animated.div
      className="relative w-dvw overflow-hidden"
      style={sectionCrop}
    >
      <animated.section
        id="hero"
        className="flex flex-col relative  min-h-screen h-screen justify-center w-screen overflow-hidden top-0"
      >
        <animated.img
          src={background}
          style={{
            ...imageClip,
            ...imageTransform,
          }}
          className="absolute top-0 left-0 h-full w-full object-cover object-left"
        />
        <animated.h1 className="text-5xl z-10 text-text-LIGHT text-center relative bottom-1/4">
          Stanica Podkowa
        </animated.h1>
      </animated.section>
    </animated.div>
  );
};
export default Hero;

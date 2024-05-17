import background from "../../../assets/background.webp";
import { animated, useScroll, useSpring } from "@react-spring/web";

interface AnimatedImageProps {}

const AnimatedImage: React.FC<AnimatedImageProps> = ({}) => {
  const { scrollYProgress } = useScroll();

  const imageClip = useSpring({
    clipPath: scrollYProgress.to(
      [0, 0.2],
      ["inset(0% 0% 0% 0%)", "inset(25% 0% 25% 0%)"],
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
      className="relative w-screen overflow-hidden"
      style={sectionCrop}
    >
      <animated.section
        id="hero"
        className="flex flex-col min-h-screen h-screen justify-center w-screen overflow-hidden top-0"
      >
        <animated.img
          src={background}
          style={{ ...imageClip, ...imageTransform }}
          className="absolute top-0 left-0 h-full w-full object-cover"
        />
        <animated.h1 className="text-4xl z-10 text-background text-center">
          Stanica Podkowa
        </animated.h1>
      </animated.section>
    </animated.div>
  );
};
export default AnimatedImage;

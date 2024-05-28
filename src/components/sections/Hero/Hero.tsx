import nocne_niebo from "../../../assets/nocne_niebo.webp";

import { animated } from "@react-spring/web";
import useInViewTrailAnimation from "../../../hooks/useInViewTrailAnimation";
interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  const letters = ["P", "O", "Z", "N", "A", "J"];
  const words = ["NASZE", "UROKI"];

  const { ref: lettersRef, trail: lettersTrail } = useInViewTrailAnimation(
    letters,
    200,
    false,
  );
  const { ref: wordsRef, trail: wordsTrail } = useInViewTrailAnimation(
    words,
    400,
    false,
  );

  return (
    <>
      <animated.section className="Hero mt-8 flex h-full w-screen flex-col items-center justify-center gap-y-6 py-4 md:py-8">
        <div className="px-4 md:px-8 w-screen">
          <animated.div className="flex" ref={lettersRef}>
            {lettersTrail.map((props, index) => (
              <animated.h1 key={index} className="text-7xl pr-1 " style={props}>
                {letters[index]}
              </animated.h1>
            ))}
          </animated.div>

          {/* Nasze uroki span */}
          <animated.h3
            ref={wordsRef}
            className="flex items-end justify-end md:text-3xl"
          >
            {wordsTrail.map((props, index) => (
              <animated.span key={index} className="mr-1 mt-4" style={props}>
                {words[index]}
              </animated.span>
            ))}
          </animated.h3>
        </div>

        <img
          src={nocne_niebo}
          alt="Zdjęcie nocnego nieba"
          className="h-[320px] w-[320px] self-end rounded-l-md object-cover md:aspect-square md:h-auto md:w-2/3"
        />
        <animated.div className="text-3xl md:text-5xl">
          <span className="">ODKRYJ </span>
          <span className="">PERFEKCJĘ.</span>
        </animated.div>
      </animated.section>
    </>
  );
};

export default Hero;

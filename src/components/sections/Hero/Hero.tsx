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
      <animated.section className="Hero mt-16 flex h-full w-screen flex-col items-center justify-center gap-y-6 py-4 md:py-8">
        <div className="px-4 md:px-8 w-screen">
          <animated.div className="flex text-7xl" ref={lettersRef}>
            {lettersTrail.map((props, index) => (
              <animated.h1
                key={index}
                className="pr-1 text-text-DARK"
                style={props}
              >
                {letters[index]}
              </animated.h1>
            ))}
          </animated.div>

          {/* Nasze uroki span */}
          <animated.div
            ref={wordsRef}
            className="flex items-end justify-end font-open text-xl md:text-3xl font-light text-text-DARK"
          >
            {wordsTrail.map((props, index) => (
              <animated.span key={index} className="mr-1" style={props}>
                {words[index]}
              </animated.span>
            ))}
          </animated.div>
        </div>

        <img
          src={nocne_niebo}
          alt="Zdjęcie nocnego nieba"
          className="h-[320px] w-[320px] self-end rounded-l-md object-cover md:aspect-square md:h-auto md:w-2/3"
        />
        <animated.div className="font-open text-3xl md:text-5xl font-light text-text-DARK">
          <span className="">ODKRYJ </span>
          <span className="">PERFEKCJĘ.</span>
        </animated.div>
      </animated.section>
    </>
  );
};

export default Hero;

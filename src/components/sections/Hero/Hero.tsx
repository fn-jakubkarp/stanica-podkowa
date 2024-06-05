import { hero_night_sky } from "../../../utils/assets";

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
      <animated.section className="mx-auto mt-8 flex h-full w-screen max-w-screen-2xl flex-col items-center justify-center gap-y-6 pt-4 md:pt-8">
        <div className="w-full max-w-[820px] px-4 md:px-8">
          {/* POZNAJ */}
          <animated.div className="flex" ref={lettersRef}>
            {lettersTrail.map((props, index) => (
              <animated.h1
                key={index}
                className="pr-1 text-7xl sm:text-[9rem]"
                style={props}
              >
                {letters[index]}
              </animated.h1>
            ))}
          </animated.div>

          {/* NASZE UROKI */}
          <animated.h3 ref={wordsRef} className="flex justify-end ">
            {wordsTrail.map((props, index) => (
              <animated.span
                key={index}
                className="mr-1 mt-4 text-3xl sm:text-4xl"
                style={props}
              >
                {words[index]}
              </animated.span>
            ))}
          </animated.h3>
        </div>

        <img
          src={hero_night_sky}
          alt="Zdjęcie nocnego nieba"
          className="h-[320px] w-[320px] self-end rounded-l-md object-cover   sm:aspect-video sm:h-full sm:w-full sm:self-center"
        />
        <animated.div className="defaultPaddings mx-auto flex max-w-screen-2xl flex-wrap items-center justify-center">
          <span className="text-5xl pr-4 sm:pr-6  sm:text-[7rem]">ODKRYJ</span>
          <span className="text-5xl sm:text-[7rem]">PERFEKCJĘ.</span>
        </animated.div>
      </animated.section>
    </>
  );
};

export default Hero;

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
  );
  const { ref: wordsRef, trail: wordsTrail } = useInViewTrailAnimation(
    words,
    400,
  );

  return (
    <>
      <animated.section
        className="Hero flex flex-col w-screen items-center py-4 justify-center gap-y-12 mt-16 h-full"
        ref={lettersRef}
      >
        <div className="POZNAJ relative inline-block text-7xl mx-4 my-2 self-start">
          {lettersTrail.map((props, index) => (
            <animated.span
              key={index}
              className="text-text-LIGHT font-josefin pr-1"
              style={props}
            >
              {letters[index]}
            </animated.span>
          ))}

          {/* Nasze uroki span */}
          <animated.div
            ref={wordsRef}
            className="NASZEUROKI absolute inset-0 text-xl text-text-DARK font-light flex items-end justify-end pr-1.5 font-open"
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
          className="h-[350px] w-[350px] object-cover self-end rounded-l-md"
        />
        <animated.div className="text-text-DARK text-3xl -mt-6 font-light font-open">
          <span className="">ODKRYJ </span>
          <span className="">PERFEKCJĘ.</span>
        </animated.div>
      </animated.section>
    </>
  );
};

export default Hero;

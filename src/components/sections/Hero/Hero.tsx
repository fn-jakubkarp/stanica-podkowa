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
        className="Hero mt-16 flex h-full w-screen flex-col items-center justify-center gap-y-12 py-4"
        ref={lettersRef}
      >
        <div className="POZNAJ relative mx-4 my-2 inline-block self-start text-7xl">
          {lettersTrail.map((props, index) => (
            <animated.span
              key={index}
              className="pr-1 font-josefin text-text-LIGHT"
              style={props}
            >
              {letters[index]}
            </animated.span>
          ))}

          {/* Nasze uroki span */}
          <animated.div
            ref={wordsRef}
            className="NASZEUROKI absolute inset-0 flex items-end justify-end pr-1.5 font-open text-xl font-light text-text-DARK"
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
          className="h-[350px] w-[350px] self-end rounded-l-md object-cover"
        />
        <animated.div className="-mt-6 font-open text-3xl font-light text-text-DARK">
          <span className="">ODKRYJ </span>
          <span className="">PERFEKCJĘ.</span>
        </animated.div>
      </animated.section>
    </>
  );
};

export default Hero;

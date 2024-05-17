import nocne_niebo from "../../../assets/nocne_niebo.webp";

import { animated } from "@react-spring/web";
import useInViewTrailAnimation from "../../../hooks/useInViewTrailAnimation";
interface UrokiProps {}

const Uroki: React.FC<UrokiProps> = ({}) => {
  const poznajLetters = ["P", "O", "Z", "N", "A", "J"];
  const naszeUrokiWords = ["NASZE", "UROKI"];

  const { ref: poznajRef, trail: poznajTrail } = useInViewTrailAnimation(
    poznajLetters,
    200,
  );
  const { ref: naszeUrokiWordsRef, trail: naszeUrokiWordsTrail } =
    useInViewTrailAnimation(naszeUrokiWords, 400);

  return (
    <>
      <animated.section
        className="flex flex-col w-full items-center justify-center py-8 gap-y-12"
        ref={poznajRef}
      >
        <div className="relative inline-block text-7xl self-end pr-4">
          {poznajTrail.map((props, index) => (
            <animated.span
              key={index}
              className="text-[#eae6e0] pr-1"
              style={props}
            >
              {poznajLetters[index]}
            </animated.span>
          ))}

          <animated.div
            ref={naszeUrokiWordsRef}
            className="absolute inset-0 text-xl text-[#928474] font-thin flex items-end justify-end pr-6"
          >
            {naszeUrokiWordsTrail.map((props, index) => (
              <animated.span key={index} className="mr-1" style={props}>
                {naszeUrokiWords[index]}
              </animated.span>
            ))}
          </animated.div>
        </div>
        <img
          src={nocne_niebo}
          alt="Zdjęcie nocnego nieba"
          className="h-[150px] w-[350px] object-cover self-start"
        />
        <animated.div className="text-[#928474] text-3xl -mt-6 font-light">
          <span className="">TRUE </span>
          <span className="">PERFECTION.</span>
        </animated.div>
      </animated.section>
    </>
  );
};

export default Uroki;

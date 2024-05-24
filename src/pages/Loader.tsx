import { animated } from "@react-spring/web";

import useInViewTrailAnimation from "../hooks/useInViewTrailAnimation";

const Loader: React.FC = () => {
  const letters = ["Ł", "A", "D", "U", "J", "E", "M", "Y"];

  const { ref: lettersRef, trail: lettersTrail } = useInViewTrailAnimation(
    letters,
    200,
    true
  );

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-8">
      <div ref={lettersRef}>
        {lettersTrail.map((props, index) => (
          <animated.span
            key={index}
            className="pr-1 font-josefin text-text-DARK"
            style={props}
          >
            {letters[index]}
          </animated.span>
        ))}
      </div>
    </div>
  );
};

export default Loader;

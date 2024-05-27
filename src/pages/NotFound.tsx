import { animated } from "@react-spring/web";

import useInViewTrailAnimation from "../hooks/useInViewTrailAnimation";

const NotFound: React.FC = () => {
  const letters = ["N", "O", "T", " ", "F", "O", "U", "N", "D"];

  const { ref: lettersRef, trail: lettersTrail } = useInViewTrailAnimation(
    letters,
    200,
    true,
  );

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-8">
      <div ref={lettersRef}>
        {lettersTrail.map((props, index) => (
          <animated.span key={index} className="pr-1" style={props}>
            {letters[index]}
          </animated.span>
        ))}
      </div>
    </div>
  );
};

export default NotFound;

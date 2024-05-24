import { useTrail, useInView } from "@react-spring/web";

function useInViewTrailAnimation(
  items: string[],
  duration = 300,
  loop: boolean,
) {
  const [inViewRef, inView] = useInView({});

  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: "translate3d(0,40px,0)" },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translate3d(0,0px,0)" : "translate3d(0,40px,0)",
    },
    config: { mass: 1, tension: 2000, friction: 400, duration, loop },
    reset: true,
  });

  return { ref: inViewRef, trail };
}

export default useInViewTrailAnimation;

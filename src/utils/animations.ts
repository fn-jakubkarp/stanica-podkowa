export const revealImageFromBelow = (inView: boolean) => ({
  transform: inView ? "translateY(0)" : "translateY(100%)",
  transition: "transform 1s",
});

export const slidingText = (inView: boolean) => ({
  opacity: inView ? "1" : "0.5",
  transform: inView ? "translateY(0)" : "translateY(50%)",
  transition:
    "transform 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000), opacity 1s cubic-bezier(0.215, 0.610, 0.355, 1.000)",
});

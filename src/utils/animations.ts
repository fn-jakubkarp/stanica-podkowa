export const revealImageFromBelow = (inView: boolean) => ({
  transform: inView ? "translateY(0)" : "translateY(100%)",
  transition: "transform 1s",
});

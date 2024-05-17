// import { useRef, useEffect } from "react";
import AnimatedImage from "../AnimatedImage/AnimatedImage";
import Uroki from "../Uroki/Uroki";

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  // const AnimatedImageRef = useRef(null);
  // const UrokiRef = useRef(null);
  // let lastScrollTop = 0;

  // const handleScroll = () => {
  //   const scrollTop = window.scrollY || document.documentElement.scrollTop;

  //   if (scrollTop > lastScrollTop) {
  //     // Scrolling down
  //     // @ts-expect-error
  //     AnimatedImageRef.current.scrollIntoView({ behavior: "smooth" });
  //   } else {
  //     // Scrolling up
  //     // @ts-expect-error
  //     UrokiRef.current.scrollIntoView({ behavior: "smooth" });
  //   }

  //   lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      {/* <div ref={AnimatedImageRef}>
        <AnimatedImage />
      </div>
      <div ref={UrokiRef}>
        <Uroki />
      </div> */}

      <AnimatedImage />

      <div className="relative">
        <Uroki />
      </div>
    </>
  );
};

export default Hero;

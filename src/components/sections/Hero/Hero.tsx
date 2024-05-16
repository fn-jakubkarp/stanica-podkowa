import { useRef } from "react";
import background from "../../../assets/background.webp";
import nocne_niebo from "../../../assets/nocne_niebo.webp";

import { motion, useTransform, useScroll, useInView } from "framer-motion";

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const poznajSpanRef = useRef(null);
  const inView = useInView(poznajSpanRef, { once: false });

  const scale = useTransform(scrollYProgress, [0, 300], [1, 0.25]);
  const y = useTransform(scrollYProgress, [50, 100], [0, 100]);
  const x = useTransform(scrollYProgress, [0, 200], [0, 300]);

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 1,
      },
    }),
  };

  return (
    <>
      <motion.section
        id="hero"
        className="flex flex-col min-h-screen h-screen justify-center w-screen overflow-x-hidden overflow-y-hidden"
      >
        <motion.img
          src={background}
          className="absolute top-0 left-0 h-screen object-cover object-left"
          style={{ y, x, scale }}
        />
        <motion.h1 className="text-4xl z-10 text-background text-center">
          Stanica Podkowa
        </motion.h1>
      </motion.section>

      <motion.section className="flex flex-col w-full items-center justify-center py-8 gap-y-12">
        <div
          className="relative inline-block text-7xl self-end pr-4"
          ref={poznajSpanRef}
        >
          {["P", "O", "Z", "N", "A", "J"].map((letter, index) => (
            <motion.span
              key={index}
              className="text-[#eae6e0] pr-1"
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={letterVariants}
            >
              {letter}
            </motion.span>
          ))}
          <motion.div
            className="absolute inset-0 text-xl text-[#928474] font-thin flex items-end justify-end pr-6"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={wordVariants}
          >
            <span className="mr-1">NASZE</span>
            <span>UROKI</span>
          </motion.div>
        </div>
        <img
          src={nocne_niebo}
          alt="Zdjęcie nocnego nieba"
          className="h-[150px] w-[350px] object-cover self-start"
        />
        <motion.div
          className="text-[#928474] text-3xl -mt-6"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={wordVariants}
        >
          <span className="">TRUE </span>
          <span className="">PERFECTION.</span>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Hero;

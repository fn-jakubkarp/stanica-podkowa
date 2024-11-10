import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { heroImages } from "../../../utils/assets";

const Hero = () => {
  const letters = "POZNAJ".split("");
  const words = ["NASZE", "UROKI"];
  const heroImage = heroImages.plain;

  // Animation variants
  const letterVariants = {
    hidden: { y: "100%" },
    visible: (i: number) => ({
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
      },
    }),
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    }),
  };

  return (
    <section
      id="hero"
      className="bg-primary-700 relative h-screen w-full overflow-hidden"
    >
      {/* Hero Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Drewniany domek na tle gwieździstego nieba"
          className="h-full w-full object-cover object-center"
        />
        <div className="from-primary-700/10 via-primary-700/20 to-primary-700/60 absolute inset-0 bg-gradient-to-b" />
      </div>

      {/* Content Container */}
      <div className="container-custom relative z-10 flex h-full flex-col items-center justify-center text-center">
        {/* Main Heading */}
        <h1 className="mb-8">
          {/* Animated Letters */}
          <motion.div
            className="flex justify-center overflow-hidden"
            initial="hidden"
            animate="visible"
          >
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                custom={index}
                className="font-josefin text-6xl font-bold text-white sm:text-8xl lg:text-9xl"
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>

          {/* Subheading */}
          <motion.div
            variants={fadeUpVariants}
            custom={0.7}
            initial="hidden"
            animate="visible"
            className="text-primary-100 mt-4 font-josefin text-2xl font-medium sm:text-3xl lg:text-4xl"
          >
            {words.join(" ")}
          </motion.div>
        </h1>

        {/* CTA Button */}
        <motion.button
          variants={fadeUpVariants}
          custom={1.1}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-primary text-primary-700 hover:bg-primary-50 hover:text-primary-500 bg-white px-8 py-4 text-lg"
        >
          Rozpocznij podróż
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          variants={fadeUpVariants}
          custom={1.3}
          initial="hidden"
          animate="visible"
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="h-8 w-8 animate-bounce text-white opacity-80" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

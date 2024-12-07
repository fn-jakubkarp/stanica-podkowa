import { motion, Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { heroImages } from "../../../utils/assets";
import HeroCTA from "../../UI/HeroCTA";

const Hero = () => {
  const letters = "POZNAJ".split("");
  const words = ["NASZE", "UROKI"];
  const heroImage = heroImages.plain;

  const handleScroll = () => {
    const element = document.getElementById("o-nas");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const letterVariants: Variants = {
    hidden: { y: "100%" },
    visible: (i: number) => ({
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
      },
    }),
  };

  const fadeUpVariants: Variants = {
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
      className="bg-primary-900 relative h-screen w-full overflow-hidden"
      id="glowna"
    >
      {/* Background Image Container */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <img
          src={heroImage}
          alt="Drewniany domek na tle gwieździstego nieba"
          className="h-full w-full object-cover object-center"
        />
        <div className="from-primary-900/70 via-primary-900/50 to-primary-900/80 absolute inset-0 bg-gradient-to-b" />
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto flex h-full items-center justify-center px-4">
        <div className="z-10 text-center">
          {/* Main Heading with Animated Letters */}
          <div className="mb-6">
            <motion.div
              initial="hidden"
              animate="visible"
              className="flex justify-center"
            >
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  custom={index}
                  className="font-josefin text-7xl font-bold text-white sm:text-8xl lg:text-9xl"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Subheading */}
          <motion.div
            variants={fadeUpVariants}
            custom={0.7}
            initial="hidden"
            animate="visible"
            className="mb-12"
          >
            <h2 className="font-josefin text-3xl font-medium text-primary-100 lg:text-4xl">
              {words.join(" ")}
            </h2>
          </motion.div>

          <HeroCTA onClick={handleScroll}>Rozpocznij podróż</HeroCTA>
        </div>
      </div>

      <motion.div
        variants={fadeUpVariants}
        custom={1.3}
        initial="hidden"
        animate="visible"
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-8 w-8 animate-bounce text-white opacity-80" />
      </motion.div>
    </section>
  );
};

export default Hero;

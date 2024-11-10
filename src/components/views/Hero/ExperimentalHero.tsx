import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
// @ts-ignore
import { heroImages } from "../../../utils/assets";
const ExpHero = () => {
  const letters = "POZNAJ".split("");
  const words = ["NASZE", "UROKI"];
  const heroImage = heroImages.plain;
  return (
    <section
      className="relative h-screen w-full overflow-hidden text-white"
      id="hero"
    >
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Drewniany domek na tle gwieździstego nieba"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 to-slate-900/10"></div>
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4">
          <motion.div
            className="flex justify-center overflow-hidden text-6xl font-bold sm:text-8xl"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="font-open text-7xl text-white sm:text-[9rem]"
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            className="mt-2 text-3xl text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {words.join(" ")}
          </motion.div>
        </h1>

        <motion.button
          className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-text-DARK transition-all hover:bg-opacity-90"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          Rozpocznij podróż
        </motion.button>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.5 }}
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default ExpHero;

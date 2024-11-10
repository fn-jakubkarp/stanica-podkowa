import { animated } from "@react-spring/web";
import { motion } from "framer-motion";
import useInViewTrailAnimation from "../hooks/useInViewTrailAnimation";
import RoomsPriceList from "../components/UI/RoomsPriceList/RoomsPriceList";
import DetailedPriceList from "../components/UI/DetailedPriceList/DetailedPriceList";

const animations = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  item: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  },
};

const PriceList = () => {
  const letters = ["C", "E", "N", "N", "I", "K"];
  const { ref: lettersRef, trail: lettersTrail } = useInViewTrailAnimation(
    letters,
    200,
    true // Changed to true to ensure animation triggers
  );

  return (
    <div className="min-h-screen bg-primary-50">
      <div className="bg-primary-700 py-12 sm:py-16 md:py-24 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <animated.header 
            className="flex justify-center items-center gap-1 sm:gap-2" 
            ref={lettersRef}
          >
            {lettersTrail.map((props, index) => (
              <animated.h1
                key={index}
                className="font-josefin text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold"
                style={props}
              >
                {letters[index]}
              </animated.h1>
            ))}
          </animated.header>
        </div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={animations.container}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16"
      >
        <motion.div variants={animations.item} className="mb-8 sm:mb-12 md:mb-16 text-center">
          <h2 className="mb-4 sm:mb-6 font-josefin text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-700">
            NASZA OFERTA
          </h2>
          <p className="mx-auto max-w-3xl text-base sm:text-lg text-primary-700/80">
            W gospodarstwie posiadamy drewniany klimatyczny dom o powierzchni
            120m2, który wynajmowany jest w całości na wyłączność. Do Waszej
            dyspozycji oddajemy również pokoje gościnne w drugim budynku.
          </p>
        </motion.div>

        <RoomsPriceList />
        <DetailedPriceList />
        
        <motion.div variants={animations.item} className="mt-8 sm:mt-12 md:mt-16 space-y-8 sm:space-y-12">
          <div className="card p-4 sm:p-6 md:p-8">
            <h3 className="mb-3 sm:mb-4 text-center font-josefin text-xl sm:text-2xl md:text-3xl font-bold text-primary-700">
              Potwierdzenie rezerwacji
            </h3>
            <p className="text-sm sm:text-base text-primary-700/80">
              Rezerwacji pobytu można dokonać osobiście, telefonicznie lub
              pocztą elektroniczną. Potwierdzeniem rezerwacji jest wpłata 40%
              kosztów pobytu w formie zadatku. Na wpłatę lub przesłanie
              potwierdzenia czekamy 3 dni. Pozostała kwota należności uiszczana
              jest w dniu przyjazdu. Na potrzeby wynajmu doba rozpoczyna się o
              15.00 w dniu przyjazdu, kończy o godzinie 11.00 w dniu wyjazdu.
            </p>
          </div>

          <div className="card p-4 sm:p-6 md:p-8">
            <div className="text-center">
              <h3 className="mb-1 sm:mb-2 font-josefin text-xl sm:text-2xl md:text-3xl font-bold text-primary-700">
                Dane do przelewu
              </h3>
              <p className="mb-4 sm:mb-6 text-lg sm:text-xl md:text-2xl text-primary-700/80">
                na poczet zadatku
              </p>
            </div>
            <ul className="space-y-2 rounded-lg bg-primary-50 p-4 sm:p-6">
              <li className="font-josefin text-base sm:text-lg font-medium text-primary-700">
                Kamil Haluch
              </li>
              <li className="text-sm sm:text-base text-primary-700/80">
                Męcina Wielka 115, 38-307 Sękowa
              </li>
              <li className="font-mono text-sm sm:text-base md:text-lg font-medium text-primary-700 break-all">
                04862700013028370086260001
              </li>
              <li className="text-sm sm:text-base text-primary-700/80">
                Tytułem: Zadatek - Imię Nazwisko - termin rezerwacji
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PriceList;
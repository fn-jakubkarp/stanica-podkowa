import { motion } from "framer-motion";
import { FlameKindling, Home, PlayCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Offer = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cards = [
    {
      icon: <Home className="h-6 w-6" />,
      title: "Noclegi",
      description:
        "Zapraszamy do naszych dwóch uroczych domów na wynajem. Każdy oferuje przestronne, przytulnie urządzone pokoje oraz w pełni wyposażoną kuchnię. Z balkonu rozciąga się malowniczy widok, który zachwyca o każdej porze roku.",
      iconBg: "bg-primary-100",
      iconColor: "text-primary-500",
    },
    {
      icon: <FlameKindling className="h-6 w-6" />,
      title: "Grill",
      description:
        "Nasza przestrzeń grillowa to idealne miejsce na wieczorne spotkania z rodziną i przyjaciółmi. Oferujemy przytulne miejsce do biesiadowania na świeżym powietrzu. Ciesz się smakiem grillowanych potraw w wyjątkowej atmosferze!",
      iconBg: "bg-earth-100",
      iconColor: "text-earth-500",
    },
    {
      icon: <PlayCircle className="h-6 w-6" />,
      title: "Atrakcje dla Dzieci",
      description:
        "Dla najmłodszych mamy prosty plac zabaw z huśtawkami, zjeżdżalnią i piaskownicą. Jest to idealne miejsce na beztroską zabawę na świeżym powietrzu. Dbamy o to, aby dzieci miały wspaniałe wspomnienia z pobytu.",
      iconBg: "bg-accent-100",
      iconColor: "text-accent-500",
    },
  ];

  return (
    <section className="bg-primary-50 py-12 md:py-24 ">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-8 text-center"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-3xl font-bold text-primary-700 sm:text-4xl md:text-5xl">
              NASZA OFERTA
            </h3>
            <p className="mx-auto max-w-2xl text-lg text-primary-700/80 md:text-xl">
              Poznaj bogactwo atrakcji i możliwości wypoczynku, jakie oferuje
              nasza agroturystyka.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <button
              onClick={() => navigate("/cennik")}
              className="btn btn-primary text-lg"
            >
              Odkryj ofertę w całości
            </button>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            variants={containerVariants}
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="card group p-6 transition-all duration-300 hover:shadow-xl"
              >
                <div
                  className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full ${card.iconBg} ${card.iconColor} transition-colors duration-300 group-hover:bg-primary-500 group-hover:text-white`}
                >
                  {card.icon}
                </div>
                <h4 className="mb-3 text-xl font-bold text-primary-700">
                  {card.title}
                </h4>
                <p className="text-primary-700/70">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Offer;

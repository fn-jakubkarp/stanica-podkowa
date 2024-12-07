import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { COffer, OfferCardData } from "./content";
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

  return (
    <section className="bg-primary-50 py-6 md:py-4">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-8 text-center"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-3xl font-bold text-primary-700 sm:text-4xl md:text-5xl">
              {COffer.header}
            </h3>
            <p className="mx-auto max-w-2xl text-lg text-primary-700/80 md:text-xl">
              {COffer.description}
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <button
              onClick={() => navigate("/cennik")}
              className="btn btn-primary text-lg"
            >
              {COffer.button}
            </button>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {OfferCardData.map((card, index) => (
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

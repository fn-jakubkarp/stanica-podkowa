import my from "../../../assets/my.jpg";
import Charms from "./Charms/Charms";

interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = ({}) => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Charms />
        <section
          id="o-nas"
          className="flex flex-col justify-center gap-2 text-text-DARK font-light text-sm "
        >
          <h3 className="text-3xl px-4">Poznaj nas</h3>
          <p className="px-4 text-justify">
            Witaj w <span className="font-bold">Stanicy Podkowa</span>, gdzie
            oferujemy autentyczne agroturystyczne doświadczenie. Naszą misją
            jest zapewnienie wyjątkowego doświadczenia, które połączy Cię z
            pięknem życia na farmie.
          </p>
          <img
            src={my}
            className="w-[350px] h-[150px] object-cover self-end my-4"
          />
          <p className="px-4 text-justify">
            Stanica Podkowa was founded in 2000. What started as a small family
            farm has grown into a thriving agrotourism destination, attracting
            visitors from all over the world.
          </p>
        </section>
      </div>
    </>
  );
};

export default AboutUs;

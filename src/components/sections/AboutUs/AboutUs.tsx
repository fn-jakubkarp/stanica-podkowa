import my from "../../../assets/my.jpg";

interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = ({}) => {
  return (
    <>
      <div className="flex flex-col h-full">
        <section
          id="o-nas"
          className="flex flex-col justify-center  text-text-DARK font-light text-sm"
        >
          <p className="px-4 text-justify font-josefin">
            Witaj w <span className="font-bold">Stanicy Podkowa</span>, gdzie
            oferujemy autentyczne agroturystyczne doświadczenie. Naszą misją
            jest zapewnienie wyjątkowego doświadczenia, które połączy Cię z
            pięknem życia na farmie.
          </p>
          <img
            src={my}
            className="w-[350px] h-[250px] object-cover self-start my-4 rounded-r-md"
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

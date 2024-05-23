import my from "../../../assets/my.jpg";
import { useInView } from "react-intersection-observer";
import { slidingText } from "../../../utils/animations";

interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = ({}) => {
  const { ref: textRef, inView: textView } = useInView({ threshold: 0.5 });

  return (
    <>
      <div className="mb-4 flex h-full flex-col">
        <section
          id="o-nas"
          className="flex flex-col justify-center  text-sm font-light text-text-DARK"
          ref={textRef}
        >
          <p className="px-4 text-justify font-josefin">
            Witaj w <span className="font-bold">Stanicy Podkowa</span>, gdzie
            oferujemy autentyczne agroturystyczne doświadczenie. Naszą misją
            jest zapewnienie wyjątkowego doświadczenia, które połączy Cię z
            pięknem życia na farmie.
          </p>
          <img
            src={my}
            className="my-4 h-[250px] w-[350px] self-start rounded-r-md object-cover"
          />
          <p className="px-4 text-justify" style={slidingText(textView)}>
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

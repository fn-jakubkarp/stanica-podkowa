import { useInView } from "react-intersection-observer";
import { slidingText } from "../../../utils/animations";
import { hero_us } from "../../../utils/assets";

interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = ({}) => {
  const { ref: textRef, inView: textView } = useInView({ threshold: 0.25 });

  return (
    <>
      <div className="mb-4 flex h-full flex-col">
        <section id="o-nas" className="flex flex-col justify-center ">
          <p className="px-4 md:px-8 text-justify">
            Witaj w <span className="font-bold">Stanicy Podkowa</span>, gdzie
            oferujemy autentyczne agroturystyczne doświadczenie. Naszą misją
            jest zapewnienie wyjątkowego doświadczenia, które połączy Cię z
            pięknem życia na farmie.
          </p>
          <div className="flex flex-col md:flex-row md:items-center">
            <img
              src={hero_us}
              className="my-4 h-[230px] w-[320px] self-start rounded-r-md object-cover md:h-auto md:w-3/5"
            />
            <p
              className="px-4 text-justify md:pl-4 md:pr-8 md:text-left"
              style={slidingText(textView)}
              ref={textRef}
            >
              Stanica Podkowa was founded in 2000. What started as a small
              family farm has grown into a thriving agrotourism destination,
              attracting visitors from all over the world.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;

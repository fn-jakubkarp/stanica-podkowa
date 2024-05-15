import my from "../../../assets/my.jpg";

interface ONasProps {}

const ONas: React.FC<ONasProps> = ({}) => {
  return (
    <>
      <section
        id="o-nas"
        className="flex flex-col h-screen justify-center px-4 gap-2"
      >
        <h2 className="text-4xl">Doświadcz uroku Stanicy Podkowa</h2>
        <p>
          Witaj w Stanicy <span>Podkowa</span>, gdzie oferujemy autentyczne
          agroturystyczne doświadczenie. Naszą misją jest zapewnienie
          wyjątkowego doświadczenia, które połączy Cię z pięknem życia na
          farmie.
        </p>
        <p>
          Stanica Podkowa was founded in 2000. What started as a small family
          farm has grown into a thriving agrotourism destination, attracting
          visitors from all over the world.
        </p>
        <p>
          Our mission is to provide a welcoming environment where guests can
          experience the joys of farm life. We are committed to sustainable
          farming practices and fostering a sense of community.
        </p>
        <h3 className="text-3xl">Poznaj nas</h3>
        <img src={my} className="w-[200px]" />
        <ul>
          <li>Authentic farm experiences</li>
          <li>Sustainable farming practices</li>
          <li>Family-friendly activities</li>
          <li>Highly rated by our visitors</li>
        </ul>
      </section>
    </>
  );
};

export default ONas;

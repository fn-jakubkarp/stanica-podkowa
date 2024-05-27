import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import ListItem from "../../UI/ListItem/ListItem";

// Custom animations
import { revealImageFromBelow, slidingText } from "../../../utils/animations";

// Assets
import macro from "../../../assets/macro.jpg";
import stary_dom from "../../../assets/stary_dom.jpg";

interface OurOfferProps {}

const OurOffer: React.FC<OurOfferProps> = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cennik");
  };

  const { ref: imageRef, inView: imageView } = useInView({ threshold: 0.5 });
  const { ref: textRef, inView: textView } = useInView({ threshold: 0.5 });
  const { ref: liRef, inView: liView } = useInView({ threshold: 0.25 });

  return (
    <>
      <section className="relative mt-20 flex w-screen flex-col items-center justify-center bg-secondary py-4">
        {/* Image reveal */}
        <div
          className="absolute left-8 top-[-50px] h-[100px] w-[100px] overflow-hidden bg-accent"
          ref={imageRef}
        >
          <img
            src={macro}
            className="relative left-0 top-0 h-full w-full object-cover"
            alt="Doniczka"
            style={revealImageFromBelow(imageView)}
          />
        </div>

        {/* Header (nasze, twoje domki) */}
        <div className="flex w-screen flex-col">
          <div className="mt-2 flex w-full justify-center text-3xl">
            <span className="italic line-through">NASZE</span>
          </div>
          <div className="ml-6 flex w-full justify-center text-3xl">
            <span className="mr-3 pl-12">TWOJE</span>
            <span>DOMKI</span>
          </div>
        </div>

        <div className="overflow-hidden" ref={textRef}>
          <p style={slidingText(textView)} className="px-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium corporis nisi nobis, nihil totam est illum fugiat natus,
            vel temporibus facilis? Unde commodi maxime aspernatur tenetur esse
            impedit sit. Consectetur?
          </p>
        </div>
        <div className="p-4">
          <img src={stary_dom} className="rounded-md" />
        </div>
        <ul
          className="flex h-full w-full flex-col items-start justify-start px-4"
          ref={liRef}
          style={slidingText(liView)}
        >
          <ListItem>
            <span>Domek z kominkiem</span>
          </ListItem>
          <ListItem>
            <span>Przystulne 3 pokojowe poddasze</span>
          </ListItem>
          <ListItem>
            <span>Do 10 osób</span>
          </ListItem>
          <li onClick={handleClick} className="mt-2 underline">
            Poznaj całą ofertę
          </li>
        </ul>
      </section>
    </>
  );
};

export default OurOffer;

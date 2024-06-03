import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import ListItem from "../../UI/ListItem/ListItem";

// Custom animations
import { revealImageFromBelow, slidingText } from "../../../utils/animations";

// Assets

import { hero_macro } from "../../../utils/assets";

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
      <section className="relative mt-20 flex w-screen flex-col items-center justify-center bg-secondary py-4 sm:mt-24">
        {/* Image reveal */}
        <div
          className="bg-accent absolute left-8 top-[-50px] h-[100px] w-[100px] overflow-hidden sm:top-[-75px] sm:h-[150px] sm:w-[150px]"
          ref={imageRef}
        >
          <img
            src={hero_macro}
            className="relative left-0 top-0 h-full w-full object-cover"
            alt="Doniczka"
            style={revealImageFromBelow(imageView)}
          />
        </div>

        {/* Header (nasze, twoje domki) */}

        <div className="defaultPaddings overflow-hidden" ref={textRef}>
          <div className="flex pb-4 pt-12">
            <span className="pr-2 text-3xl">TWOJE</span>
            <span className="text-3xl">DOMKI</span>
          </div>
          <p style={slidingText(textView)} className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium corporis nisi nobis, nihil totam est illum fugiat natus,
            vel temporibus facilis? Unde commodi maxime aspernatur tenetur esse
            impedit sit. Consectetur?
          </p>
        </div>

        <ul
          className="defaultPaddings flex h-full w-full flex-col items-start justify-start"
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

import { useInView } from "react-intersection-observer";

// Custom animations
import { revealImageFromBelow, slidingText } from "../../../utils/animations";

// Assets
import macro from "../../../assets/macro.jpg";
import stary_dom from "../../../assets/stary_dom.jpg";

interface OurOfferProps {}

const OurOffer: React.FC<OurOfferProps> = () => {
  const { ref: imageRef, inView: imageView } = useInView({ threshold: 0.75 });
  const { ref: textRef, inView: textView } = useInView({ threshold: 0.5 });

  return (
    <>
      <section className="relative mt-20 flex w-screen flex-col items-center justify-center bg-secondary py-4">
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

        {/* Nasze, twoje domki */}
        <div className="flex w-screen flex-col" ref={textRef}>
          <div className="mt-2 flex w-full justify-center font-open text-3xl font-light text-text-DARK">
            <span className="italic line-through">NASZE</span>
          </div>
          <div className="ml-6 flex w-full justify-center font-open text-3xl font-light text-text-DARK">
            <span className="mr-3 pl-12">TWOJE</span>
            <span>DOMKI</span>
          </div>

          <div className="overflow-hidden">
            <p
              style={slidingText(textView)}
              className="font-joseph px-4 text-sm text-text-DARK"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium corporis nisi nobis, nihil totam est illum fugiat
              natus, vel temporibus facilis? Unde commodi maxime aspernatur
              tenetur esse impedit sit. Consectetur?
            </p>
            <div className="p-4">
              <img src={stary_dom} className="rounded-md" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurOffer;

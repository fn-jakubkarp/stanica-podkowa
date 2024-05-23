import { useInView } from "react-intersection-observer";

import React from "react";
import macro from "../../../assets/macro.jpg";
import { revealImageFromBelow } from "../../../utils/animations";
interface OurOfferProps {}

const OurOffer: React.FC<OurOfferProps> = () => {
  const { ref, inView } = useInView({ threshold: 0.75 });

  return (
    <>
      <section className="relative mt-[50px] flex w-screen flex-col items-center justify-center bg-secondary">
        <div
          className="absolute left-8 top-[-50px] h-[100px] w-[100px] overflow-hidden bg-accent"
          ref={ref}
        >
          <img
            src={macro}
            className="relative left-0 top-0 h-full w-full object-cover"
            alt="Doniczka"
            style={revealImageFromBelow(inView)}
          />
        </div>

        {/* Nasze, twoje domki */}
        <div className="flex flex-col">
          <div className="mt-2 flex w-full justify-center font-open text-3xl font-light text-text-DARK">
            <span className="italic line-through">NASZE</span>
          </div>
          <div className="ml-6 flex w-full justify-center font-open text-3xl font-light text-text-DARK">
            <span className="mr-3 pl-12">TWOJE</span>
            <span>DOMKI</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurOffer;

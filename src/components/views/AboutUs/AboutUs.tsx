import React from "react";
import { heroImages } from "../../../utils/assets";

const AboutUs: React.FC = () => {
  const aboutUsImage = heroImages.nightSky;

  return (
    <section
      id="o-nas"
      className="container-custom mt-8 py-8 md:py-12 lg:py-24"
    >
      <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
        <div className="card">
          <img
            src={aboutUsImage}
            width="550"
            height="550"
            alt="Dom i altana na tle lasu"
            className="aspect-square w-full object-cover object-center"
          />
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-balance">Nasza agroturystyka</h2>
            <p className="text-pretty text-lg text-gray-800">
              Witajcie w{" "}
              <span className="font-bold text-primary-500">
                Stanicy Podkowa
              </span>
              , oazie spokoju i relaksu pośród malowniczych krajobrazów. Nasza
              posiadłość oferuje dwa urocze domy na wynajem, idealne na rodzinne
              wakacje lub romantyczne wypady. W sercu natury znajdziecie tu
              wszystko, czego potrzeba do pełnego relaksu – od przestronnych
              terenów zielonych po zaciszne zakątki, gdzie można odetchnąć
              świeżym powietrzem i zapomnieć o codziennych troskach.
            </p>
          </div>

          <div>
            <p className="text-pretty text-lg text-gray-800">
              Nasza agroturystyka to również miejsce idealne na wspólne
              biesiadowanie przy grillu . Dzieci mogą bawić się na placu zabaw,
              a dorośli cieszyć się wieczornymi biesiadami pod gołym niebem.
              Wszystko to w otoczeniu pięknych krajobrazów, które zachwycą
              każdego.
            </p>
          </div>

          <div className="space-y-4">
            <h3>Wypoczynek</h3>
            <p className="text-pretty text-lg text-gray-800">
              Jako miłośnicy aktywnego wypoczynku znajdziecie w pobliżu mnóstwo
              atrakcji – od pieszych wędrówek po licznych szlakach, po
              malownicze przejażdżki rowerowe. Beskid Niski jest idealnym
              miejscem by spędzać wolny czas w taki właśnie sposób.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

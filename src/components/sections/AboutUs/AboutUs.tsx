import { hero_plain } from "../../../utils/assets";
interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = ({}) => {
  return (
    <>
      <section
        id="o-nas"
        className="defaultPaddings mx-auto flex w-full max-w-screen-xl justify-center py-12 md:py-24"
      >
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <img
            src={hero_plain}
            width="550"
            height="550"
            alt="Dom i altana na tle lasu"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="pb-2 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Nasza agroturystyka
              </h3>
              <p className=" overflow-hidden md:text-xl">
                Witajcie w <span className="font-bold">Stanicy Podkowa</span>,
                oazie spokoju i relaksu pośród malowniczych krajobrazów. Nasza
                posiadłość oferuje dwa urocze domy na wynajem, idealne na
                rodzinne wakacje lub romantyczne wypady. W sercu natury
                znajdziecie tu wszystko, czego potrzeba do pełnego relaksu – od
                przestronnych terenów zielonych po zaciszne zakątki, gdzie można
                odetchnąć świeżym powietrzem i zapomnieć o codziennych troskach.
              </p>
            </div>
            <div className="space-y-2">
              <p className=" md:text-lg ">
                Nasza agroturystyka to również miejsce idealne na duże imprezy i
                grille. Rozbudowany dziedziniec pozwala na organizację
                niezapomnianych przyjęć, gdzie dzieci mogą bawić się na placu
                zabaw, a dorośli cieszyć się wieczornymi biesiadami pod gołym
                niebem. Wszystko to w otoczeniu pięknych krajobrazów, które
                zachwycą każdego.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Wypoczynek</h3>
              <p className=" md:text-lg ">
                Jako miłośnicy aktywnego wypoczynku znajdziecie w pobliżu
                mnóstwo atrakcji – od pieszych wędrówek po licznych szlakach, po
                malownicze przejażdżki rowerowe. Beskid Niski jest idealnym
                miejscem by spędzać wolny czas w taki właśnie sposób. Nasze
                konie są gotowe, by zabrać Was na wspaniałe wyprawy po okolicy,
                gdzie natura odsłania swoje najpiękniejsze oblicze.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

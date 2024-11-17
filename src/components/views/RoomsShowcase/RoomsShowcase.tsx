import { showcaseCottage, showcaseNewHouse } from "../../../utils/galleryData";
import ImageCarousel from "../../UI/ImageCarousel/ImageCarousel";
export default function RoomsShowcase() {
  return (
    <section className="">
      <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
        <div className="card">
          <div className="h-64 w-full sm:h-72 md:h-80 lg:h-96">
            <ImageCarousel images={showcaseNewHouse} />
          </div>
          <div className="bg-primary-50 p-4 md:p-6">
            <h3 className="text-xl font-bold text-primary-700 md:text-2xl">
              Pokoje gościnne
            </h3>
            <p className="my-3 text-primary-700/80 md:my-4">
              4 funkcjonalne pokoje wraz z prywatną łazienką
            </p>
            <p className="text-lg font-semibold text-primary-500 md:text-xl">
              Od 130 zł / noc
            </p>
          </div>
        </div>

        <div className="card">
          <div className="h-64 w-full sm:h-72 md:h-80 lg:h-96">
            <ImageCarousel images={showcaseCottage} />
          </div>
          <div className="bg-primary-50 p-4 md:p-6">
            <h3 className="text-xl font-bold text-primary-700 md:text-2xl">
              Drewniany dom
            </h3>
            <p className="my-3 text-primary-700/80 md:my-4">
              Przestronny dom z 4 sypialniami, salonem, jadalnią oraz tarasem
            </p>
            <p className="text-lg font-semibold text-primary-500 md:text-xl">
              Cena ustalana indywidualnie
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

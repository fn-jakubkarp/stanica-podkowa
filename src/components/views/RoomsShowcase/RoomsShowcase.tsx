import { showcaseCottage, showcaseNewHouse } from "../../../utils/galleryData";
import ImageCarousel from "../../UI/ImageCarousel/ImageCarousel";
import { CRoomsShowcase } from "./content";
export default function RoomsShowcase() {
  return (
    <section>
      <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
        <div className="card">
          <div className="h-64 w-full sm:h-72 md:h-80 lg:h-96">
            <ImageCarousel images={showcaseNewHouse} />
          </div>
          <div className="bg-primary-50 p-4 md:p-6">
            <h3 className="text-xl font-bold text-primary-700 md:text-2xl">
              {CRoomsShowcase.newHouse.title}
            </h3>
            <p className="my-3 text-primary-700/80 md:my-4">
              {CRoomsShowcase.newHouse.description}
            </p>
            <p className="mt-10 text-lg font-semibold text-primary-500 md:text-xl">
              {CRoomsShowcase.newHouse.price}
            </p>
          </div>
        </div>

        <div className="card">
          <div className="h-64 w-full sm:h-72 md:h-80 lg:h-96">
            <ImageCarousel images={showcaseCottage} />
          </div>
          <div className="bg-primary-50 p-4 md:p-6">
            <h3 className="text-xl font-bold text-primary-700 md:text-2xl">
              {CRoomsShowcase.cottage.title}
            </h3>
            <p className="my-3 text-primary-700/80 md:my-4">
              {CRoomsShowcase.cottage.description}
            </p>
            <p className="text-lg font-semibold text-primary-500 md:text-xl">
              {CRoomsShowcase.cottage.price}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

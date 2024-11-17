import { cottageImages, newHouseImages } from "../../../utils/assets";
import { CardType } from "../../UI/Card/CardType";
import ImageCarousel from "../../UI/ImageCarousel/ImageCarousel";

export default function RoomsShowcase() {
  return (
    <section className="container py-8 md:py-16">
      <div className="space-y-12 md:space-y-16">
        {/* Accommodation Cards */}
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {/* Guest Rooms Card */}
          <div className="card group">
            <div className="h-64 w-full sm:h-72 md:h-80 lg:h-96">
              <ImageCarousel images={cards_new_house} />
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

          {/* Wooden House Card */}
          <div className="card group">
            <div className="h-64 w-full sm:h-72 md:h-80 lg:h-96">
              <ImageCarousel images={cards_old_house} />
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
      </div>
    </section>
  );
}

const cards_new_house: CardType[] = [
  {
    url: newHouseImages.rooms.double,
    alt: "Zdjęcie pokoju",
    id: 1,
  },
  {
    url: newHouseImages.bathroom.top,
    alt: "Zdjęcie łazienki",
    id: 2,
  },
  {
    url: newHouseImages.livingRoom.main,
    alt: "Zdjęcie salonu",
    id: 3,
  },
  {
    url: newHouseImages.kitchen.main,
    alt: "Zdjęcie kuchnii",
    id: 4,
  },
  {
    url: newHouseImages.kidsArea,
    alt: "Zdjęcie sekcji dla dzieci",
    id: 5,
  },
];

const cards_old_house: CardType[] = [
  {
    url: cottageImages.room.double,
    alt: "Zdjęcie pokoju",
    id: 1,
  },
  {
    url: cottageImages.bathroom.bottom,
    alt: "Zdjęcie łazienki",
    id: 2,
  },
  {
    url: cottageImages.livingRoom,
    alt: "Zdjęcie salonu",
    id: 3,
  },
  {
    url: cottageImages.kitchen,
    alt: "Zdjęcie kuchnii",
    id: 4,
  },
];

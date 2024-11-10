import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { cottageImages, newHouseImages } from "../../../utils/assets";
import CardPictureOnly from "../Card/CardPictureOnly";
import { CardType } from "../Card/CardType";

export default function RoomsPriceList() {
  return (
    <section className="container py-8 md:py-16">
      <div className="space-y-12 md:space-y-16">
        {/* Accommodation Cards */}
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {/* Guest Rooms Card */}
          <div className="card group">
            <Swiper
              direction="horizontal"
              slidesPerView={1}
              loop={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              freeMode={true}
              modules={[Autoplay, Pagination, FreeMode]}
              className="h-64 w-full sm:h-72 md:h-80 lg:h-96"
              style={
                {
                  "--swiper-pagination-color": "#4d7c3f",
                  "--swiper-pagination-bullet-inactive-color": "#e8f0e3",
                } as React.CSSProperties
              }
            >
              {cards_new_house.map((card) => (
                <SwiperSlide key={card.id}>
                  <CardPictureOnly
                    card={card}
                    className="h-full w-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
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
            <Swiper
              direction="horizontal"
              slidesPerView={1}
              loop={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              freeMode={true}
              modules={[Autoplay, Pagination, FreeMode]}
              className="h-64 w-full sm:h-72 md:h-80 lg:h-96"
              style={
                {
                  "--swiper-pagination-color": "#4d7c3f",
                  "--swiper-pagination-bullet-inactive-color": "#e8f0e3",
                } as React.CSSProperties
              }
            >
              {cards_old_house.map((card) => (
                <SwiperSlide key={card.id}>
                  <CardPictureOnly
                    card={card}
                    className="h-full w-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
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

        {/* Price List Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="mb-6 text-2xl font-bold text-primary-700 md:text-4xl lg:text-5xl">
              Cennik pokoi gościnnych
            </h3>
            <p className="text-sm text-primary-700/80 md:text-base">
              <span className="mr-2 text-accent-500">*</span>
              Ceny za pokój przy wynajmnie na minimum 2 doby. Przy wynajmie na
              jedną dobę ceny ustalane są indywidualnie
            </p>
          </div>

          <div className="overflow-hidden rounded-xl bg-white shadow-lg">
            <table className="w-full table-auto">
              <tbody>
                {[
                  { people: "1 osoba", price: "130" },
                  { people: "2 osoby", price: "200" },
                  { people: "3 osoby", price: "270" },
                  { people: "4 osoby", price: "320" },
                ].map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-primary-100 last:border-none"
                  >
                    <td className="p-4 md:p-6">
                      <h4 className="text-lg font-medium text-primary-700 md:text-xl lg:text-2xl">
                        {row.people}
                      </h4>
                    </td>
                    <td className="p-4 text-right text-lg font-medium text-primary-500 md:p-6 md:text-xl lg:text-2xl">
                      {row.price} zł / noc
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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

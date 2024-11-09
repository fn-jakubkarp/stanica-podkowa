import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { cottageImages, newHouseImages } from "../../../utils/assets";
import CardPictureOnly from "../Card/CardPictureOnly";
import { CardType } from "../Card/CardType";

export default function RoomsPriceList() {
  return (
    <section className="defaultPaddings mx-auto w-full max-w-screen-xl py-6 md:py-8">
      <div className="grid gap-8 md:gap-12">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out  hover:shadow-xl">
            <Swiper
              direction={"horizontal"}
              slidesPerView={1}
              spaceBetween={1}
              loop={true}
              width={600}
              height={400}
              pagination={true}
              freeMode={true}
              style={{
                // @ts-expect-error
                "--swiper-pagination-color": "#fff",
              }}
              modules={[Autoplay, Pagination, FreeMode]}
              className="mySwiper"
            >
              {cards_new_house.map((card) => (
                <SwiperSlide key={card.id} className="">
                  <CardPictureOnly
                    card={card}
                    className="h-auto w-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="bg-secondary p-4">
              <h3 className="font-bold">Pokoje gościnne</h3>
              <p className="my-4">
                4 funkcjonalne pokoje wraz z prywatną łazienką
              </p>
              <h4 className="text-lg font-semibold md:text-xl">
                Od 130 zł / noc
              </h4>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <Swiper
              direction={"horizontal"}
              slidesPerView={1}
              spaceBetween={1}
              loop={true}
              width={600}
              height={400}
              pagination={true}
              freeMode={true}
              style={{
                // @ts-expect-error
                "--swiper-pagination-color": "#fff",
              }}
              modules={[Autoplay, Pagination, FreeMode]}
              className="mySwiper "
            >
              {cards_old_house.map((card) => (
                <SwiperSlide key={card.id} className="">
                  <CardPictureOnly card={card} className="object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="bg-secondary p-4">
              <h3 className="font-bold">Drewniany dom</h3>
              <p className="my-4">
                Przestronny dom z 4 sypialniami, salonem, jadalnią oraz tarasem
              </p>
              <h4 className="text-lg font-semibold md:text-xl">
                Cena ustalana indywidualnie
              </h4>
            </div>
          </div>
        </div>
        <div className="defaultPaddings mx-auto w-full max-w-screen-xl lg:py-12">
          <h3 className="flex w-full justify-center text-3xl font-bold md:text-5xl ">
            Cennik pokoi gościnnych
          </h3>
          <p className="flex py-8 sm:w-full">
            <span>*</span>Ceny za pokój przy wynajmnie na minimum 2 doby. Przy
            wynajmie na jedną dobę ceny ustalane są indywidualnie
          </p>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <tbody>
                <tr className="border-b border-gray-200 ">
                  <td className="flex items-center gap-4 px-4 py-4">
                    <div>
                      <h3 className="text-base font-medium sm:text-3xl">
                        1 osoba
                      </h3>
                    </div>
                  </td>

                  <td className="px-4 py-4 text-right font-medium">
                    130 zł / noc
                  </td>
                </tr>
                <tr className="border-b border-gray-200 ">
                  <td className="flex items-center gap-4 px-4 py-4">
                    <div>
                      <h3 className="text-base font-medium sm:text-3xl">
                        2 osoby
                      </h3>
                    </div>
                  </td>

                  <td className="px-4 py-4 text-right font-medium">
                    200 zł / noc
                  </td>
                </tr>
                <tr className="border-b border-gray-200 ">
                  <td className="flex items-center gap-4 px-4 py-4">
                    <div>
                      <h3 className="text-base font-medium sm:text-3xl">
                        3 osoby
                      </h3>
                    </div>
                  </td>

                  <td className="px-4 py-4 text-right font-medium">
                    270 zł / noc
                  </td>
                </tr>
                <tr className="border-b border-gray-200 ">
                  <td className="flex items-center gap-4 px-4 py-4">
                    <div>
                      <h3 className="text-base font-medium sm:text-3xl">
                        4 osoby
                      </h3>
                    </div>
                  </td>

                  <td className="px-4 py-4 text-right font-medium">
                    320 zł / noc
                  </td>
                </tr>
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

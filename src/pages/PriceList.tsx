// Libraries
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
// ---
import { animated } from "@react-spring/web";
import useInViewTrailAnimation from "../hooks/useInViewTrailAnimation";
// Custom components
import CardPictureOnly from "../components/UI/Card/CardPictureOnly";
import { CardType } from "../components/UI/Card/CardType";

import {
  nh_bathroom,
  nh_kid_section,
  nh_kitchen,
  nh_living_room,
  nh_room,
  oh_bathroom,
  oh_kitchen,
  oh_living_room,
  oh_room,
  pricelist_header,
} from "../utils/assets";

const PriceList: React.FC = () => {
  const letters = ["C", "E", "N", "N", "I", "K"];
  const { ref: lettersRef, trail: lettersTrail } = useInViewTrailAnimation(
    letters,
    200,
    false,
  );

  return (
    <div className="flex flex-col h-full w-screen items-center justify-center bg-secondary px-4 gap-12">
      <div className="w-screen relative flex justify-center items-center">
        <img
          src={pricelist_header}
          alt="Tło strony, zdjęcie pokoju"
          className="opacity-70 masked"
        />
        <animated.header className="flex absolute" ref={lettersRef}>
          {lettersTrail.map((props, index) => (
            <animated.h1
              key={index}
              className="text-5xl pr-1 sm:text-7xl"
              style={props}
            >
              {letters[index]}
            </animated.h1>
          ))}
        </animated.header>
      </div>
      <div className="flex flex-col">
        <h2 className="sm:mb-2 sm:text-5xl ">Pokoje</h2>
        <p>
          W gospodarstwie posiadamy stary, drewniany klimatyczny domek oraz nowo
          powstały dom. Drewniany domek posiada 3 dwuosobowe sypialnie oraz
          salon w którym pomieści się do czterech osób.
        </p>
        <p>
          Nowy dom posiada 4 odrębne sypialnie, każda wyposażona w osobną
          łazienkę
        </p>
      </div>
      <div className="gap-2 flex flex-col items-center justify-center h-full w-full">
        <h3 className="self-start w-full f;ex">Nowy dom</h3>
        <div className="w-full flex items-center">
          <Swiper
            direction={"horizontal"}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            pagination={true}
            freeMode={true}
            autoplay={{
              delay: 750,
              disableOnInteraction: false,
              stopOnLastSlide: false,
            }}
            style={{
              // @ts-expect-error
              "--swiper-pagination-color": "#fff",
            }}
            speed={1500}
            modules={[Autoplay, Pagination, FreeMode]}
            className="flex mySwiper w-full masked2"
          >
            {cards_new_house.map((card) => (
              <SwiperSlide key={card.id} className="w-full object-cover ">
                <CardPictureOnly card={card} className="" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex flex-col items-center w-full sm:w-1/2">
            <p>
              <span>*</span>Ceny:
            </p>
            <ul>
              <li>1 osoba/130 zł</li>
              <li>2 osoby/200 zł</li>
              <li>3 osoby/270 zł</li>
              <li>4 osoby/320 zł</li>
            </ul>
          </div>
        </div>
        <p className="flex sm:px-4 sm:w-screen">
          <span>*</span>Ceny za pokój przy wynajmnie na minimum 2 doby. Przy
          wynajmie na jedną dobę ceny ustalane są indywidualnie
        </p>
      </div>
      <div className="gap-2 flex flex-col items-center justify-center h-full w-full">
        <h3 className="self-start text-3xl">Stary domek</h3>
        <Swiper
          direction={"horizontal"}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          pagination={true}
          freeMode={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
          style={{
            // @ts-expect-error
            "--swiper-pagination-color": "#fff",
          }}
          speed={1500}
          modules={[Autoplay, Pagination, FreeMode]}
          className="mySwiper w-full masked2"
        >
          {cards_old_house.map((card) => (
            <SwiperSlide key={card.id} className="w-full object-cover">
              <CardPictureOnly card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
        <p>
          Domek wynajmowany jest jako całość i mieści do 10 osób. Cena jest
          ustalana indywidualnie.{" "}
        </p>
      </div>
      <div className="flex gap-2 flex-col items-center justify-center h-full w-full sm:items-start">
        <h3 className="self-start text-3xl">Dodatkowe atrakcje</h3>
        <ul>
          <li>Sauna & Balia - cena ustalana indywidualnie</li>
          <li>Śniadania/obiad - cena ustalana indywidualnie</li>
          <li>Grill (taczka drewna) / 50 zł</li>
        </ul>
      </div>
      <div className="flex gap-2 flex-col items-center justify-center h-full w-full sm:items-start">
        <h3 className="self-start text-3xl">Potwierdzenie rezerwacji</h3>
        <p className="">
          Rezerwacji pobytu można dokonać osobiście, telefonicznie lub pocztą
          elektroniczną. Potwierdzeniem rezerwacji jest wpłata 40% kosztów
          pobytu w formie zadatku. Na wpłatę lub przesłanie potwierdzenia
          czekamy 3 dni. Pozostała kwota należności uiszczana jest w dniu
          przyjazdu. Na potrzeby wynajmu doba rozpoczyna się o 15.00 w dniu
          przyjazdu, kończy o godzinie 11.00 w dniu wyjazdu.
        </p>
      </div>
      <div className="flex gap-2 flex-col items-center justify-center h-full w-full pb-12 sm:items-start">
        <h3 className="self-start text-3xl">Dane do przelewu</h3>
        <span className="self-start">na poczet zadatku</span>
        <ul>
          <li className="font-bold">Kamil Haluch</li>
          <li className="font-bold">Męcina Wielka 115, 38-307 Sękowa</li>
          <li className="font-bold">04862700013028370086260001</li>
          <li className="font-bold">
            Tytułem: Zadatek - Imię Nazwisko - termin rezerwacji
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PriceList;

const cards_new_house: CardType[] = [
  {
    url: nh_room,
    alt: "Zdjęcie pokoju",
    id: 1,
  },
  {
    url: nh_bathroom,
    alt: "Zdjęcie łazienki",
    id: 2,
  },
  {
    url: nh_living_room,
    alt: "Zdjęcie salonu",
    id: 3,
  },
  {
    url: nh_kitchen,
    alt: "Zdjęcie kuchnii",
    id: 4,
  },
  {
    url: nh_kid_section,
    alt: "Zdjęcie sekcji dla dzieci",
    id: 5,
  },
];

const cards_old_house: CardType[] = [
  {
    url: oh_room,
    alt: "Zdjęcie pokoju",
    id: 1,
  },
  {
    url: oh_bathroom,
    alt: "Zdjęcie łazienki",
    id: 2,
  },
  {
    url: oh_living_room,
    alt: "Zdjęcie salonu",
    id: 3,
  },
  {
    url: oh_kitchen,
    alt: "Zdjęcie kuchnii",
    id: 4,
  },
];

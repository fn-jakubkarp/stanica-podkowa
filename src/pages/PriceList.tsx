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

// Assets
import bathroom from "../assets/Inside/New_house/bathroom.jpg";
import kid_section from "../assets/Inside/New_house/kid_section.jpg";
import kitchen from "../assets/Inside/New_house/kitchen.jpg";
import living_room from "../assets/Inside/New_house/living_room.jpg";
import room from "../assets/Inside/New_house/room.jpg";
import headerPricelist from "../assets/headerPricelist.jpg";

import bathroom_old from "../assets/Inside/Old_house/bathroom_old.jpg";
import kitchen_old from "../assets/Inside/Old_house/kitchen_old.jpg";
import livingroom_old from "../assets/Inside/Old_house/livingroom_old.jpg";
import room_old from "../assets/Inside/Old_house/room_old.jpg";

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
          src={headerPricelist}
          alt="Tło strony, zdjęcie pokoju"
          className="opacity-70 masked"
        />
        <animated.header className="flex absolute" ref={lettersRef}>
          {lettersTrail.map((props, index) => (
            <animated.h1 key={index} className=" text-5xl pr-1" style={props}>
              {letters[index]}
            </animated.h1>
          ))}
        </animated.header>
      </div>
      <div className="flex flex-col">
        <h2>Pokoje</h2>
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
        <h3 className="self-start text-3xl">Nowy dom</h3>
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
          className="mySwiper w-full masked2"
        >
          {cards_new_house.map((card) => (
            <SwiperSlide key={card.id} className="w-full object-cover ">
              <CardPictureOnly card={card} />
            </SwiperSlide>
          ))}
        </Swiper>

        <p>
          <span>*</span>Ceny:
        </p>
        <ul>
          <li>1 osoba/130 zł</li>
          <li>2 osoby/200 zł</li>
          <li>3 osoby/270 zł</li>
          <li>4 osoby/320 zł</li>
        </ul>
        <p>
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
          className="mySwiper w-full masked2"
        >
          {cards_old_house.map((card) => (
            <SwiperSlide key={card.id} className="w-full object-cover ">
              <CardPictureOnly card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
        <p>
          Domek wynajmowany jest jako całość i mieści do 10 osób. Cena jest
          ustalana indywidualnie.{" "}
        </p>
      </div>
      <div className="flex gap-2 flex-col items-center justify-center h-full w-full">
        <h3 className="self-start text-3xl">Dodatkowe atrakcje</h3>
        <ul>
          <li>Sauna & Balia - cena ustalana indywidualnie</li>
          <li>Śniadania/obiad - cena ustalana indywidualnie</li>
          <li>Grill (taczka drewna) / 50 zł</li>
        </ul>
      </div>
      <div className="flex gap-2 flex-col items-center justify-center h-full w-full">
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
      <div className="flex gap-2 flex-col items-center justify-center h-full w-full pb-12">
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
    url: room,
    alt: "Zdjęcie pokoju",
    id: 1,
  },
  {
    url: bathroom,
    alt: "Zdjęcie łazienki",
    id: 2,
  },
  {
    url: living_room,
    alt: "Zdjęcie salonu",
    id: 3,
  },
  {
    url: kitchen,
    alt: "Zdjęcie kuchnii",
    id: 4,
  },
  {
    url: kid_section,
    alt: "Zdjęcie sekcji dla dzieci",
    id: 5,
  },
];

const cards_old_house: CardType[] = [
  {
    url: room_old,
    alt: "Zdjęcie pokoju",
    id: 1,
  },
  {
    url: bathroom_old,
    alt: "Zdjęcie łazienki",
    id: 2,
  },
  {
    url: livingroom_old,
    alt: "Zdjęcie salonu",
    id: 3,
  },
  {
    url: kitchen_old,
    alt: "Zdjęcie kuchnii",
    id: 4,
  },
];

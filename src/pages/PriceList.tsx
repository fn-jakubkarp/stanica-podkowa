// Libraries
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Custom components
import CardPictureOnly from "../components/UI/Card/CardPictureOnly";
import { CardType } from "../components/UI/Card/CardType";

// Assets
import bathroom from "../assets/Inside/New_house/bathroom.jpg";
import kid_section from "../assets/Inside/New_house/kid_section.jpg";
import kitchen from "../assets/Inside/New_house/kitchen.jpg";
import living_room from "../assets/Inside/New_house/living_room.jpg";
import room from "../assets/Inside/New_house/room.jpg";

const PriceList: React.FC = () => {
  return (
    <div className="flex flex-col w-screen items-center justify-center">
      <h2>Pokoje</h2>
      <h3>Wybierz opcję dopasowaną do Twoich potrzeb!</h3>
      <div className="border-red-500 border flex flex-col items-center justify-center h-1/2 w-full">
        <h3>Nowy dom</h3>
        <Swiper
          direction={"horizontal"}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          parallax={true}
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
          className="mySwiper w-2/3"
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id} className="w-full object-cover">
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
      <div className="border-red-500 border flex flex-col items-center justify-center h-1/2 w-full">
        <h3>Stary domek</h3>
        <Swiper
          direction={"horizontal"}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          parallax={true}
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
          className="mySwiper w-2/3"
        >
          {cards.map((card) => (
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
      <div className="border-red-500 border flex flex-col items-center justify-center h-1/2 w-full">
        <h3>Dodatkowe atrakcje</h3>
        <ul>
          <li>Sauna & Balia - cena ustalana indywidualnie</li>
          <li>Śniadania/obiad - cena ustalana indywidualnie</li>
          <li>Grill (taczka drewna) / 50 zł</li>
        </ul>
      </div>
      <div className="border-red-500 border flex flex-col items-center justify-center h-full w-full">
        <h3 className="text-xl">Potwierdzenie rezerwacji</h3>
        <p className="">
          Każda rezerwacja musi być potwierdzona zatadkiem w wysokości 30%
          kosztu pobytu. Pozostałość jest uregulowywana w dniu przyjazdu. W
          przypadku anulowania rezerwacji, zadatek nie podlega zwrotowi.
        </p>
        <p>
          Przedstawione kwoty nie obejmują opłaty klimatycznej w wysokości
          2zł/dzień od osoby
        </p>
      </div>
    </div>
  );
};

export default PriceList;

const cards: CardType[] = [
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

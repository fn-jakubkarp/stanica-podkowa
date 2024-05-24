// Swiper imports
import { Autoplay, FreeMode, Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "../../../styles/main.css";

import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/pagination";

import grill from "../../../assets/grill.jpg";
import imprezy from "../../../assets/imprezy.jpg";
import konie from "../../../assets/konie.jpg";
import noclegi from "../../../assets/noclegi.jpg";
import paintball from "../../../assets/paintball.jpg";
import sauna from "../../../assets/sauna.jpg";

// Custom card component
import CardSwiper from "../../UI/Card/CardSwiper";
import { CardType } from "../../UI/Card/CardType";

const AroundUs = () => {
  return (
    <>
      <div className="relative my-8 h-1/2 w-full px-4 md:w-1/2">
        <Swiper
          direction={"horizontal"}
          slidesPerView={1.5}
          spaceBetween={30}
          // mousewheel={true}
          loop={true}
          parallax={true}
          freeMode={true}
          autoplay={{
            delay: 50,
            disableOnInteraction: false,
          }}
          speed={5000}
          modules={[Mousewheel, Autoplay, Pagination, FreeMode]}
          className="mySwiper h-full w-full rounded-md px-4"
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <CardSwiper card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default AroundUs;

const cards: CardType[] = [
  {
    url: grill,
    title: "Grill",
    alt: "Grill",
    text: "Rozkoszuj się soczystymi grillowanymi potrawami w naszym ogrodzie!",
    id: 1,
  },
  {
    url: imprezy,
    title: "Imprezy",
    alt: "Imprezy",
    text: "Organizujemy niezapomniane imprezy i wydarzenia w malowniczej scenerii.",
    id: 2,
  },
  {
    url: konie,
    title: "Konie",
    alt: "Konie",
    text: "Odkryj piękno natury podczas jazdy konnej z naszymi doświadczonymi instruktorami.",
    id: 3,
  },
  {
    url: noclegi,
    title: "Noclegi",
    alt: "Noclegi",
    text: "Oferujemy komfortowe noclegi w przytulnych pokojach z widokiem na naturę.",
    id: 4,
  },
  {
    url: sauna,
    title: "Sauna",
    alt: "Sauna",
    text: "Zrelaksuj się w naszej autentycznej fińskiej banii i saunie, odprężając ciało i umysł",
    id: 5,
  },
  {
    url: paintball,
    title: "Paintball",
    alt: "Paintball",
    text: "Adrenalina i zabawa czekają na Ciebie na naszym polu do paintballa",
    id: 6,
  },
];

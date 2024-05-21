// Swiper imports
import { Mousewheel, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "../../../styles/main.css";

import "swiper/css";
import "swiper/css/mousewheel";

// Custom card component
import { CardType } from "../../UI/Card/Card";
import Card from "../../UI/Card/Card";

const ScrollGallery = () => {
  return (
    <>
      <div className="relative w-full h-1/2 md:w-1/2">
        <Swiper
          direction={"horizontal"}
          slidesPerView={"auto"}
          spaceBetween={30}
          mousewheel={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Mousewheel, Autoplay]}
          className="mySwiper w-full h-full"
        >
          {cards.map((card) => (
            <SwiperSlide>
              <Card key={card.id} card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ScrollGallery;

const cards: CardType[] = [
  {
    url: "/src/assets/grill.jpg",
    text: "Grill",
    alt: "Grill",
    id: 1,
  },
  {
    url: "/src/assets/imprezy.jpg",
    text: "Imprezy",
    alt: "Imprezy",
    id: 2,
  },
  {
    url: "/src/assets/konie.jpg",
    text: "Konie",
    alt: "Konie",
    id: 3,
  },
  {
    url: "/src/assets/noclegi.jpg",
    text: "Noclegi",
    alt: "Noclegi",
    id: 4,
  },
  {
    url: "/src/assets/sauna.jpg",
    text: "Sauna",
    alt: "Sauna",
    id: 5,
  },
  {
    url: "/src/assets/paintball.jpg",
    text: "Paintball",
    alt: "Paintball",
    id: 6,
  },
];

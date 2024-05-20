import { animated } from "@react-spring/web";
import { CardType } from "../../UI/Card/Card";
import Card from "../../UI/Card/Card";
import Slider from "react-slick";

const ScrollGallery = () => {
  return (
    // <div className="flex w-[300vw] overflow-y-hidden items-center">
    //   <animated.div className="flex w-full h-full overflow-x-scroll scroll">
    //     {cards.map((card) => (
    //       <Card key={card.id} card={card} />
    //     ))}
    //   </animated.div>
    // </div>
    <Slider>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </Slider>
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

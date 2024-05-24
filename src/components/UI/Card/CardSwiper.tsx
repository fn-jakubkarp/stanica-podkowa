import { CardType } from "./CardType";

const CardSwiper = ({ card }: { card: CardType }) => {
  return (
    <div className="">
      <img
        src={card.url}
        alt={card.alt}
        loading="lazy"
        className="aspect-video h-full max-h-60 w-full object-cover"
      />
    </div>
  );
};

export default CardSwiper;

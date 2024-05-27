import { CardType } from "./CardType";

const CardSwiper = ({ card }: { card: CardType }) => {
  const isEven = card.id % 2 === 0;

  return (
    <div className="flex justify-center flex-col items-start">
      {isEven && <p className=" pb-2 pl-2">{card.title}</p>}
      <div className="">
        <img
          src={card.url}
          alt={card.alt}
          loading="lazy"
          className="aspect-video h-full max-h-60 w-full object-cover"
        />
      </div>
      {!isEven && <p className="pt-2 pl-2">{card.title}</p>}
    </div>
  );
};

export default CardSwiper;

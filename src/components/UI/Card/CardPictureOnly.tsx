import { CardType } from "./CardType";

const CardPictureOnly = ({ card }: { card: CardType }) => {
  return (
    <div className="flex justify-center flex-col items-start">
      <div className="">
        <img
          src={card.url}
          alt={card.alt}
          loading="lazy"
          className="aspect-video h-full max-h-60 w-full object-cover"
        />
      </div>
    </div>
  );
};

export default CardPictureOnly;

import { CardType } from "./CardType";
const CardPictureOnly = ({
  card,

  className = "",
}: {
  card: CardType;

  className?: string;
}) => {
  return (
    <div className="flex justify-center flex-col items-start">
      <div className="">
        <img
          src={card.url}
          alt={card.alt}
          loading="lazy"
          className={`aspect-video h-full max-h-60 w-full object-cover ${className}`}
        />
      </div>
    </div>
  );
};

export default CardPictureOnly;

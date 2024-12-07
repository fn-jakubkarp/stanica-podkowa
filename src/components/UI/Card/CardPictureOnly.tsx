import { CardType } from "./CardType";
const CardPictureOnly = ({
  card,
  className = "",
}: {
  card: CardType;

  className?: string;
}) => {
  return (
    <div className="flex flex-col items-start justify-center">
      <div className="">
        <img
          src={card.url}
          alt={card.alt}
          loading="lazy"
          className={`aspect-video h-full w-full object-cover ${className}`}
        />
      </div>
    </div>
  );
};

export default CardPictureOnly;

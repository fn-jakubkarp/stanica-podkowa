import { CardType } from "./CardType";
const CardPictureOnly = ({
  card,
  onLoad,
  className = "",
}: {
  card: CardType;
  onLoad?: () => void;
  className?: string;
}) => {
  return (
    <div className="flex justify-center flex-col items-start">
      <div className="">
        <img
          src={card.url}
          alt={card.alt}
          onLoad={onLoad}
          loading="lazy"
          className={`aspect-video h-full max-h-60 w-full object-cover ${className}`}
        />
      </div>
    </div>
  );
};

export default CardPictureOnly;

const Card = ({ card }: { card: CardType }) => {
  return (
    <>
      <div className="relative overflow-hidden shadow-lg group md:rounded-md h-1/2 w-screen">
        <img
          src={card.url}
          alt={card.alt}
          loading="lazy"
          className="group-hover:scale-110 transition-transform duration-300 aspect-video object-cover max-h-60 w-full h-full"
        />
        <div className="absolute flex inset-0 items-end bg-gradient-to-t from-black/60 to-transparent">
          <div className="p-4 text-background disabled">
            <p>{card.text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

export type CardType = {
  url: string;
  alt: string;
  text: string;
  id: number;
};

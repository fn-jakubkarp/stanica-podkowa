const Card = ({ card }: { card: CardType }) => {
  return (
    <>
      <div className="group relative h-1/2 w-screen overflow-hidden shadow-lg md:rounded-md">
        <img
          src={card.url}
          alt={card.alt}
          loading="lazy"
          className="aspect-video h-full max-h-60 w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 to-transparent">
          <div className="disabled p-4 pb-8 text-background">
            <h3 className="mb-2 font-open text-3xl">{card.title}</h3>
            <p className="font-joseph flex flex-wrap pr-8 text-sm">
              {card.text}
            </p>
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
  title: string;
  text: string;
  id: number;
};

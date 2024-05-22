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
        <div className="absolute flex inset-0 items-end bg-gradient-to-t from-black/50 to-transparent">
          <div className="p-4 text-background disabled pb-8">
            <h3 className="text-3xl mb-2 font-open">{card.title}</h3>
            <p className="font-joseph text-sm flex flex-wrap pr-8">
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

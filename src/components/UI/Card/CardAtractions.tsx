import { CardType } from "./CardType";

const CardAtractions = ({ card }: { card: CardType }) => {
  return (
    <>
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md ">
        <h3 className="text-xl font-bold">{card.title}</h3>
        <p className="mt-2 text-gray-500 ">{card.text}</p>
      </div>
    </>
  );
};

export default CardAtractions;

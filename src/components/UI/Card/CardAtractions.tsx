import { CardType } from "./CardType";

const CardAttractions = ({ card }: { card: CardType }) => {
  return (
    <div className="card p-6 transition-all duration-200 hover:shadow-xl">
      <h4 className="text-xl font-bold text-primary-700">{card.title}</h4>
      <p className="mt-2 text-pretty text-gray-500">{card.text}</p>
    </div>
  );
};

export default CardAttractions;

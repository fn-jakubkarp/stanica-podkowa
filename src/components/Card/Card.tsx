interface CardProps {
  image: string;
  name: string;
}

const Card: React.FC<CardProps> = ({ image, name }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <img src={image} className="rounded-md object-cover" />
      <h3>{name}</h3>
    </div>
  );
};

export default Card;

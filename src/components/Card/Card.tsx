interface CardProps {
  image: string;
  alt: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ image, alt, children, ...props }) => {
  return (
    <div
      {...props}
      className="relative overflow-hidden shadow-lg group md:rounded-md"
    >
      <img
        src={image}
        alt={alt}
        className="group-hover:scale-110 transition-transform duration-300 object-cover h-full "
      />
      <div className="absolute flex inset-0 items-end bg-gradient-to-t from-black/60 to-transparent">
        <div className="p-4 text-background">{children}</div>
      </div>
    </div>
  );
};

export default Card;

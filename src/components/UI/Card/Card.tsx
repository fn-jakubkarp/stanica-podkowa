interface CardProps {
  image: string;
  alt: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ image, alt, children, ...props }) => {
  return (
    <div
      {...props}
      className="relative overflow-hidden shadow-lg group md:rounded-md h-full w-full"
    >
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className="group-hover:scale-110 transition-transform duration-300 aspect-video object-cover max-h-60 w-full h-full"
      />
      <div className="absolute flex inset-0 items-end bg-gradient-to-t from-black/60 to-transparent">
        <div className="p-4 text-background">{children}</div>
      </div>
    </div>
  );
};

export default Card;

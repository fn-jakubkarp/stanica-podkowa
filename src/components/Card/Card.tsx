interface CardProps {
  image: string;
  alt: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ image, alt, children, ...props }) => {
  return (
    // <div className="flex flex-col items-center gap-2 ">
    //   <img src={image} className="absolute object-cover" />
    //   <div className="content">
    //     <h3 className="relative text-text text-3xl ">{name}</h3>
    //   </div>
    // </div>
    <div {...props} className="relative overflow-hidden shadow-lg group">
      <img
        src={image}
        alt={alt}
        className="group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute flex inset-0 items-end bg-gradient-to-t from-black/60 to-transparent">
        <div className="p-4 text-background">{children}</div>
      </div>
    </div>
  );
};

export default Card;

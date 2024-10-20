import { GalleryItemType } from "../../../utils/galleryData";

interface GalleryItemProps {
  item: GalleryItemType;
  onClick: () => void;
  className?: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  item,
  onClick,
  className,
}) => (
  <div
    className={`group relative overflow-hidden rounded-lg shadow-lg ${className}`}
  >
    <p onClick={onClick} className="absolute inset-0 z-10 cursor-pointer">
      <span className="sr-only">View</span>
    </p>
    <img
      src={item.image}
      alt={item.alt}
      className="h-64 w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
    />
    <div className="bg-white p-4">
      <h3 className="text-lg font-bold">{item.title}</h3>
      <p>{item.description}</p>
    </div>
  </div>
);

export default GalleryItem;

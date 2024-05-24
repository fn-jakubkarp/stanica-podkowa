import bullet_point from "../../../assets/bullet_point.svg";

interface ListItemProps {
  children: React.ReactNode;
  className?: string;
}

const ListItem: React.FC<ListItemProps> = ({ children, className = "" }) => {
  return (
    <li className={`flex h-full w-full items-center ${className}`}>
      <img src={bullet_point} className="h-6 " />
      <p
        className={`ml-2 font-open text-lg font-light text-text-DARK ${className}`}
      >
        {children}
      </p>
    </li>
  );
};

export default ListItem;

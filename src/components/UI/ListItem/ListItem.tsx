import bullet_point from "../../../assets/bullet_point.svg";

interface ListItemProps {
  children: React.ReactNode;
  className?: string;
}

const ListItem: React.FC<ListItemProps> = ({ children, className = "" }) => {
  return (
    <li
      className={`flex h-full w-full items-center justify-center ${className}`}
    >
      <img src={bullet_point} />
      <p className={`ml-4 font-open text-lg text-text-DARK ${className}`}>
        {children}
      </p>
    </li>
  );
};

export default ListItem;

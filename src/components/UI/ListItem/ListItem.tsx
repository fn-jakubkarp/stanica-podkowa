import React from "react";
import { brandAssets } from "../../../utils/assets";

interface ListItemProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const ListItem: React.FC<ListItemProps> = ({ children, className = "" }) => {
  const bulletPoint = brandAssets.bulletPoint;
  return (
    <li className={`flex h-full w-full items-center ${className}`}>
      <img src={bulletPoint} className="h-4" />
      <p className={`ml-2 text-lg  ${className}`}>{children}</p>
    </li>
  );
};

export default ListItem;

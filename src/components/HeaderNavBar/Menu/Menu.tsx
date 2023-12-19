import React, { PropsWithChildren } from "react";
import "./Menu.css";

type MenuButtonProps = PropsWithChildren<{
  isOpen?: boolean;
  onClick?: () => void;
}>;

const MenuButton: React.FC<MenuButtonProps> = ({
  children,
  isOpen = false,
  onClick,
}) => {
  return (
    <div className="dropdown">
      <button className="btn" onClick={onClick}>
        Select menu type <i className={`arrow ${isOpen ? "up" : "down"}`}></i>
      </button>
      <div className={`dropdown-menu ${isOpen ? "show" : ""}`}>{children}</div>
    </div>
  );
};

export default MenuButton;

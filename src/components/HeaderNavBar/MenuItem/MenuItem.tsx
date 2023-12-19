import React from "react";
import "./MenuItem.css";

type MenuItemProps = {
  label: string;
  active?: boolean;
  onClick: () => void;
};

const MenuItem: React.FC<MenuItemProps> = ({ label, active, onClick }) => (
  <button
    type="button"
    className={`dropdown-item ${active ? "active" : ""}`}
    onClick={onClick}
  >
    {label}
  </button>
);

export default MenuItem;

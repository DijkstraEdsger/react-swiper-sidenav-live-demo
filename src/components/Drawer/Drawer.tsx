import { Link } from "react-router-dom";
import { SideNav } from "react-swiper-sidenav";
import { useDataContext } from "contexts/DataContext";

type CustomLinkProps = {
  to: string;
  label?: string;
};

const CustomLink = ({ to, label }: CustomLinkProps) => {
  return <Link to={to}>{label}</Link>;
};

type NavProps = {
  open: boolean;
  onClose: () => void;
};

const Drawer = ({ open, onClose }: NavProps) => {
  const { items } = useDataContext();

  return (
    <SideNav
      navItems={items}
      open={open}
      onClose={onClose}
      navProps={{
        "aria-label": "main menu",
      }}
      renderLink={CustomLink}
    >
      <div className="sideNavHead">
        <h2>Side Nav</h2>
        <button
          type="button"
          className="close-button"
          onClick={onClose}
          aria-label="toggle sidenav"
        >
          <span></span>
        </button>
      </div>
    </SideNav>
  );
};

export default Drawer;

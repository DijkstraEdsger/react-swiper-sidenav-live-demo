import { Link } from "react-router-dom";

type HeaderNavBarProps = {
  openSidenav: () => void;
};

const HeaderNavBar = ({ openSidenav }: HeaderNavBarProps) => {
  return (
    <header className="header-nav-bar">
      <Link to="/" className="logo">
        HeaderNavBar
      </Link>
      <button type="button" className="primaryButton" onClick={openSidenav}>
        Open
      </button>
    </header>
  );
};

export default HeaderNavBar;

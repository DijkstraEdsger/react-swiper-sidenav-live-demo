type HeaderNavBarProps = {
  openSidenav: () => void;
};

const HeaderNavBar = ({ openSidenav }: HeaderNavBarProps) => {
  return (
    <header className="header-nav-bar">
      HeaderNavBar
      <button type="button" className="primaryButton" onClick={openSidenav}>
        Open
      </button>
    </header>
  );
};

export default HeaderNavBar;

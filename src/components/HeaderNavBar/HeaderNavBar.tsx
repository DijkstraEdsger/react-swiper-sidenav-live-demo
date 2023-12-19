import { useState } from "react";
import { Link } from "react-router-dom";
import MenuButton from "./Menu/Menu";
import MenuItem from "./MenuItem/MenuItem";
import { MenuTypeEnum } from "hooks/useDataState";
import { useDataContext } from "contexts/DataContext";

type HeaderNavBarProps = {
  openSidenav: () => void;
  toggleMenuType: (type: MenuTypeEnum) => void;
};

const HeaderNavBar = ({ openSidenav, toggleMenuType }: HeaderNavBarProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { menuType } = useDataContext();

  const selectMenuOption = (type: MenuTypeEnum) => {
    toggleMenuType(type);
    setOpenMenu(false);
  };

  return (
    <header className="header-nav-bar">
      <Link to="/" className="logo">
        Header
      </Link>
      <div className="row">
        <button type="button" className="primaryButton" onClick={openSidenav}>
          Open
        </button>
        <MenuButton isOpen={openMenu} onClick={() => setOpenMenu(!openMenu)}>
          <MenuItem
            label="Default"
            active={menuType === MenuTypeEnum.DEFAULT}
            onClick={() => selectMenuOption(MenuTypeEnum.DEFAULT)}
          />
          <MenuItem
            label="Dark"
            active={menuType === MenuTypeEnum.DARK}
            onClick={() => selectMenuOption(MenuTypeEnum.DARK)}
          />
          <MenuItem
            label="Multi Styles"
            active={menuType === MenuTypeEnum.MIXED}
            onClick={() => selectMenuOption(MenuTypeEnum.MIXED)}
          />
        </MenuButton>
      </div>
    </header>
  );
};

export default HeaderNavBar;

import { useMemo, useState } from "react";
import { menuItems } from "mock/Sidenav/menu-items/menu-items";
import { menuItemsDark } from "mock/Sidenav/menu-items-dark/menu-items-dark";
import { menuItemsMultiStyles } from "mock/Sidenav/menu-items-multi-styles/menu-items-multi-styles";

export enum MenuTypeEnum {
  DEFAULT = "default",
  DARK = "dark",
  MIXED = "mixed",
}

type MenuType = MenuTypeEnum.DEFAULT | MenuTypeEnum.DARK | MenuTypeEnum.MIXED;

export type DataState = {
  items: any;
  menuType: MenuType;
  toggleMenuType: (type: string) => void;
};

const useDataState = (): DataState => {
  const [menuType, setMenuType] = useState<MenuType>(
    MenuTypeEnum.DEFAULT as MenuType
  );

  const toggleMenuType = (type: string) => {
    setMenuType(type as MenuType);
  };

  const items = useMemo(() => {
    switch (menuType) {
      case "default":
        return menuItems;
      case "dark":
        return menuItemsDark;
      case "mixed":
        return menuItemsMultiStyles;
      default:
        return menuItems;
    }
  }, [menuType]);

  return {
    items,
    menuType,
    toggleMenuType,
  };
};

export default useDataState;

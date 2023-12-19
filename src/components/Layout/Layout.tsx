import Drawer from "components/Drawer/Drawer";
import HeaderNavBar from "components/HeaderNavBar/HeaderNavBar";
import { useDataContext } from "contexts/DataContext";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [open, setOpen] = useState(false);
  const { toggleMenuType } = useDataContext();

  return (
    <>
      <HeaderNavBar
        openSidenav={() => setOpen(true)}
        toggleMenuType={toggleMenuType}
      />
      <Drawer open={open} onClose={() => setOpen(false)} />
      <Outlet />
    </>
  );
};

export default Layout;

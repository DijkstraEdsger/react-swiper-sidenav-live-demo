import Drawer from "components/Drawer/Drawer";
import HeaderNavBar from "components/HeaderNavBar/HeaderNavBar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <HeaderNavBar openSidenav={() => setOpen(true)} />
      <Drawer open={open} onClose={() => setOpen(false)} />
      <Outlet />
    </>
  );
};

export default Layout;

import { NavItems } from "react-swiper-sidenav";

const desktopsChildren: NavItems[] = [
  {
    itemProps: {
      to: "/gaming",
      label: "Gaming",
    },
  },
  {
    itemProps: {
      to: "/workstations",
      label: "Workstations",
    },
  },
  {
    itemProps: {
      to: "/all-in-one",
      label: "All-in-One",
    },
  },
];

const desktops: NavItems = {
  name: "Desktops",
  childrenItems: desktopsChildren,
};

const laptopsChildren: NavItems[] = [
  {
    itemProps: {
      to: "/ultrabooks",
      label: "Ultrabooks",
    },
  },
  {
    itemProps: {
      to: "/convertibles",
      label: "Convertibles",
    },
  },
  {
    itemProps: {
      to: "/lgaming",
      label: "Gaming",
    },
  },
];

const laptops: NavItems = {
  name: "Laptops",
  childrenItems: laptopsChildren,
};

const computers: NavItems = {
  name: "Computers",
  childrenItems: [desktops, laptops],
};

const keyboardsChildren: NavItems[] = [
  {
    itemProps: {
      to: "/mechanical",
      label: "Mechanical",
    },
  },
  {
    itemProps: {
      to: "/wireless",
      label: "Wireless",
    },
  },
  {
    itemProps: {
      to: "/kgaming",
      label: "Gaming",
    },
  },
];

const keyboards: NavItems = {
  name: "Keyboards",
  childrenItems: keyboardsChildren,
};

const miceChildren: NavItems[] = [
  {
    itemProps: {
      to: "/mwireless",
      label: "Wireless",
    },
  },
  {
    itemProps: {
      to: "/mgaming",
      label: "Gaming",
    },
  },
  {
    itemProps: {
      to: "/ergonomic",
      label: "Ergonomic",
    },
  },
];

const mice: NavItems = {
  name: "Mice",
  childrenItems: miceChildren,
};

const accessories: NavItems = {
  name: "Accessories",
  childrenItems: [keyboards, mice],
};

const menuItems: NavItems = {
  name: "Main (Default style)",
  childrenItems: [computers, accessories],
};

export { menuItems };

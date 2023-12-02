import { NavItems } from "react-swiper-sidenav";
import styles from "./multi-styles.module.css";

const desktopsChildren: NavItems[] = [
  {
    itemProps: {
      to: "/gaming",
      label: "Gaming",
    },
    className: styles.gaming,
  },
  {
    itemProps: {
      to: "/workstations",
      label: "Workstations",
    },
    className: styles.workstations,
  },
  {
    itemProps: {
      to: "/all-in-one",
      label: "All-in-One",
    },
    className: styles.all_in_one,
  },
];

const desktops: NavItems = {
  name: "Desktops",
  childrenItems: desktopsChildren,
  classes: {
    container: styles.desktops,
  },
};

const laptopsChildren: NavItems[] = [
  {
    itemProps: {
      to: "/ultrabooks",
      label: "Ultrabooks",
    },
    className: styles.ultrabooks,
  },
  {
    itemProps: {
      to: "/convertibles",
      label: "Convertibles",
    },
    className: styles.convertibles,
  },
  {
    itemProps: {
      to: "/lgaming",
      label: "Gaming",
    },
    className: styles.gaming,
  },
];

const laptops: NavItems = {
  name: "Laptops",
  childrenItems: laptopsChildren,
  classes: {
    container: styles.laptops,
  },
};

const computers: NavItems = {
  name: "Computers",
  childrenItems: [desktops, laptops],
  classes: {
    container: styles.computers,
  },
};

const keyboardsChildren: NavItems[] = [
  {
    itemProps: {
      to: "/mechanical",
      label: "Mechanical",
    },
    className: styles.mechanical,
  },
  {
    itemProps: {
      to: "/wireless",
      label: "Wireless",
    },
    className: styles.wireless,
  },
  {
    itemProps: {
      to: "/kgaming",
      label: "Gaming",
    },
    className: styles.gaming,
  },
];

const keyboards: NavItems = {
  name: "Keyboards",
  childrenItems: keyboardsChildren,
  classes: {
    container: styles.keyboards,
  },
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
  classes: {
    container: styles.mice,
  },
};

const accessories: NavItems = {
  name: "Accessories",
  childrenItems: [keyboards, mice],
  classes: {
    container: styles.accessories,
    back: styles.accessories_back,
  },
  
};

const menuItemsMultiStyles: NavItems = {
  name: "Main (Multi styles)",
  childrenItems: [computers, accessories],
  classes: {
    container: styles.electronics,
  },
};

export { menuItemsMultiStyles };

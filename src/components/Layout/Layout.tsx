import { Outlet, Link } from "react-router-dom";
import {
  SideNav,
  ISideNavProps,
  Variant,
  NavItems,
} from "react-swiper-sidenav";
import styles from "./styles.module.css";
import { useState } from "react";

type CustomDivProps = {
  children: React.ReactNode;
};

const ll = (props: any) => <Link to="/">Hello</Link>;

const CustomDiv = ({ children, ...props }: CustomDivProps) => {
  return (
    <div
      style={{
        backgroundColor: "blue",
      }}
      {...props}
    >
      {children}
    </div>
  );
};

type CustomLinkProps = {
  to: string;
  name?: string;
};

const MyCustomLink = ({ to, name }: CustomLinkProps) => {
  return <Link to={to}>{name}</Link>;
};

const items: NavItems = {
  name: "Main menu",
  childrenItems: [
    {
      name: "Colors",
      childrenItems: [
        {
          name: "Red",
          childrenItems: [
            {
              // name: "Red 1",
              itemProps: {
                to: "/red1",
                name: "Red 1",
                // href: "/red1",
                // children: "Red 1.1",
              },
            },
            {
              name: "Red 2",
              itemProps: {
                to: "/red2",
              },
            },
          ],
        },
        {
          name: "Green",
          childrenItems: [{ name: "Green 1" }, { name: "Green 2" }],
        },
        {
          name: "Blue",
          childrenItems: [{ name: "Blue 1" }, { name: "Blue 2" }],
        },
      ],
    },
    {
      name: "Foo",
      // renderItem: <Link to="/contact">Foo</Link>,
      itemProps: {
        to: "/red1",
        children: "Foo",
      },
    },
    // {
    //   name: "Galaxies",
    //   childrenItems: [
    //     {
    //       name: "Galaxy 1",
    //     },
    //     {
    //       name: "Galaxy 2",
    //     },
    //     {
    //       name: "Galaxy 3",
    //     },
    //   ],
    // },
    // {
    //   name: "Shape",
    //   childrenItems: [
    //     {
    //       name: "2d",
    //       childrenItems: [
    //         {
    //           name: "▲ Triangle",
    //         },
    //         {
    //           name: "■ Square",
    //         },
    //       ],
    //     },
    //     {
    //       name: "3d",
    //       renderItem: <CustomDiv>3D</CustomDiv>,
    //       childrenItems: [
    //         { name: "Sphere" },
    //         { name: "Pyramid" },
    //         {
    //           renderItem: <MyCustomLink to={"/go"}>Go to view...</MyCustomLink>,
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   disableClose: true,
    //   renderItem: (
    //     <div>
    //       <label htmlFor="input-field">Enter text:</label>
    //       <input type="text" id="input-field" placeholder="Type here" />
    //       <br />
    //       <button type="button" onClick={() => console.log("here")}>
    //         Submit
    //       </button>
    //     </div>
    //   ),
    // },
  ],
};

const navItemsStyles = () => {
  let styleLinkButon = {
    color: "white",
    ":hover": {
      backgroundColor: "white",
      color: "black",
      boxShadow: "2px 2px 30px black inset",
    },
  };

  return {
    name: "Main menu",
    frt: "gh",
    classes: {
      container: styles.colors_first,
    },
    childrenItems: [
      {
        name: "Colors",
        classes: {
          container: styles.colors,
          back: styles.colors_back,
          head: styles.color_head,
          items: styles.color_button,
        },
        childrenItems: [
          {
            name: "Red",
            childrenItems: [
              {
                disableClose: true,
                name: "Red 1 (disabled close)",
              },
              {
                name: "Red 2",
              },
            ],
            className: styles.color_red,
            classes: {
              container: styles.color_red_container,
              back: styles.colors_back,
              head: styles.color_head,
              items: styles.link_button,
            },
          },
          {
            name: "Green",
            className: styles.color_green,
            childrenItems: [
              {
                name: "Green 1",
              },
              {
                name: "Green 2",
              },
            ],
            classes: {
              container: styles.color_green,
              back: styles.colors_back,
              head: styles.color_head,
              items: styles.link_button,
            },
          },
          {
            name: "Blue",
            className: styles.color_blue,
            childrenItems: [
              {
                name: "Blue 1",
              },
              {
                name: "Blue 2",
                style: styleLinkButon,
              },
            ],
            classes: {
              container: styles.color_blue,
              back: styles.colors_back,
              head: styles.color_head,
              items: styles.link_button,
            },
          },
        ],
      },
      {
        renderItem: <a style={{ color: "white" }}>Other</a>,
      },
      {
        name: "Lakes",
        classes: {
          container: styles.lakes_container,
          head: styles.lakes_head,
          items: styles.link_lake,
        },
        childrenItems: [
          {
            name: "Lake 1",
          },
          {
            name: "Lake 2",
          },
        ],
      },
    ],
  };
};

const navItemsDarkTransparent = () => {
  return {
    name: "Main menu",
    classes: {
      container: styles.bg_dark,
      back: styles.dark_button,
      head: styles.dark_header,
      items: styles.dark_button,
    },
    childrenItems: [
      {
        name: "Colors",
        childrenItems: [
          {
            name: "Red",
            childrenItems: [
              {
                name: "Red 1",
              },
              {
                name: "Red 2",
              },
            ],
          },
          {
            name: "Green",
            childrenItems: [
              {
                name: "Green 1",
              },
              {
                name: "Green 2",
              },
            ],
          },
          {
            name: "Blue",
            childrenItems: [
              {
                name: "Blue 1",
              },
              {
                name: "Blue 2",
              },
            ],
          },
        ],
      },
      {
        name: "Foo",
      },
      {
        name: "Galaxies",
        childrenItems: [
          {
            name: "Galaxy 1",
          },
          {
            name: "Galaxy 2",
          },
          {
            name: "Galaxy 3",
          },
        ],
      },
    ],
  };
};

const Layout = () => {
  const [state, setState] = useState({
    openSidenav: true,
    navItems: items,
    // navItems: navItemsStyles(),
    // navItems: navItemsDarkTransparent(),
    radioButton: [
      { value: "Default", name: "sidenav", displayValue: "Default" },
      { value: "MultiStyles", name: "sidenav", displayValue: "MultiStyles" },
      {
        value: "DarkTransparent",
        name: "sidenav",
        displayValue: "Dark Transparent",
      },
    ],
  });

  const closeSidenavHandler = () => {
    console.log("closeSidenavHandler");
    
    setState((prevState) => ({
      ...prevState,
      openSidenav: false,
    }));
  };

  const variant: Variant = "persistent";

  return (
    <>
      <SideNav
        navItems={state.navItems}
        open={state.openSidenav}
        onClose={closeSidenavHandler}
        placement="left"
        zIndex={800}
        hideBackdrop
        // variant="persistent"
        // variant="permanent"
        navProps={{
          "aria-label": "main menu",
        }}
        variant={variant}
        renderLink={MyCustomLink}
      >
        <h2>Side Nav</h2>
      </SideNav>

      <Outlet />
    </>
  );
};

export default Layout;

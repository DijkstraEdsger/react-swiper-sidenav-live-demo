import { Outlet, Link } from "react-router-dom";
import {
  SideNav,
  ISideNavProps,
  Variant,
  NavItems,
} from "react-swiper-sidenav";
import styles from "./styles.module.css";
import { useReducer } from "react";

type CustomLinkProps = {
  to: string;
  label?: string;
};

const MyCustomLink = ({ to, label }: CustomLinkProps) => {
  return <Link to={to}>{label}</Link>;
};

const items: NavItems = {
  name: "Default style",
  childrenItems: [
    {
      name: "Computers",
      childrenItems: [
        {
          name: "Desktops",
          childrenItems: [
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
          ],
        },
        {
          name: "Laptops",
          childrenItems: [
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
          ],
        },
      ],
    },
    {
      name: "Foo",
      itemProps: {
        to: "/red1",
        label: "Foo",
      },
    },

    {
      name: "Accessories",
      childrenItems: [
        {
          name: "Keyboards",
          childrenItems: [
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
          ],
        },
        {
          name: "Mice",
          childrenItems: [
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
          ],
        },
      ],
    },
  ],
};

const navItemsMultiStyles = (): NavItems => {
  return {
    name: "Multi styles",
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
                itemProps: {
                  to: "/red1",
                  label: "Red 1",
                },
              },
              {
                itemProps: {
                  to: "/red2",
                  label: "Red 2",
                },
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
                itemProps: {
                  to: "/green1",
                  label: "Green 1",
                },
              },
              {
                itemProps: {
                  to: "/green2",
                  label: "Green 2",
                },
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
                itemProps: {
                  to: "/blue1",
                  label: "Blue 1",
                },
              },
              {
                itemProps: {
                  to: "/blue2",
                  label: "Blue 2",
                },
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
            itemProps: {
              to: "/lake1",
              label: "Lake 1",
            },
          },
          {
            itemProps: {
              to: "/lake2",
              label: "Lake 2",
            },
          },
          {
            itemProps: {
              to: "/lake3",
              label: "Lake 3",
            },
          },
        ],
      },
    ],
  };
};

const navItemsDark = (): NavItems => {
  return {
    name: "Dark style",
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
                itemProps: {
                  to: "/red1",
                  label: "Red 1",
                },
              },
              {
                itemProps: {
                  to: "/red2",
                  label: "Red 2",
                },
              },
            ],
          },
          {
            name: "Green",
            childrenItems: [
              {
                itemProps: {
                  to: "/green1",
                  label: "Green 1",
                },
              },
              {
                itemProps: {
                  to: "/green2",
                  label: "Green 2",
                },
              },
            ],
          },
          {
            name: "Blue",
            childrenItems: [
              {
                itemProps: {
                  to: "/blue1",
                  label: "Blue 1",
                },
              },
              {
                itemProps: {
                  to: "/blue2",
                  label: "Blue 2",
                },
              },
            ],
          },
        ],
      },
      {
        itemProps: {
          to: "/foo",
          label: "Foo",
        },
      },
      {
        name: "Galaxies",
        childrenItems: [
          {
            itemProps: {
              to: "/galaxy1",
              label: "Galaxy 1",
            },
          },
          {
            itemProps: {
              to: "/galaxy2",
              label: "Galaxy 2",
            },
          },
          {
            itemProps: {
              to: "/galaxy3",
              label: "Galaxy 3",
            },
          },
        ],
      },
    ],
  };
};

type State = {
  navItems: NavItems;
  open: boolean;
  placement: "left" | "right";
  hideBackdrop: boolean;
  variant: Variant;
  style: React.CSSProperties;
  spreadCssClasses: boolean;
  renderLink: any;
  navProps: ISideNavProps["navProps"];
};

const initialState: State = {
  navItems: items,
  open: false,
  placement: "left",
  hideBackdrop: false,
  variant: "temporary",
  style: {
    // width: "300px",
    // borderRadius: "0 32px 32px 0",
  },
  spreadCssClasses: true,
  renderLink: MyCustomLink,
  navProps: {
    "aria-label": "main menu",
  },
};

const reducer = (state: any, action: any) => {
  const { type, payload } = action;
  console.log(type, payload);

  switch (type) {
    case "navItems":
      return {
        ...state,
        navItems: payload,
      };
    case "open":
      return {
        ...state,
        open: payload,
      };
    case "placement":
      return {
        ...state,
        placement: payload,
      };
    case "hideBackdrop":
      return {
        ...state,
        hideBackdrop: payload,
      };
    case "variant":
      return {
        ...state,
        variant: payload,
      };
    case "style":
      return {
        ...state,
        style: payload,
      };
    case "spreadCssClasses":
      return {
        ...state,
        spreadCssClasses: payload,
      };
    case "renderLink":
      return {
        ...state,
        renderLink: payload,
      };
    default:
      return state;
  }
};

const Layout = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const action = (type: string, payload: any) => {
    dispatch({ type, payload });
  };

  const closeSidenavHandler = () => {
    action("open", false);
  };

  const onChangeHandler = (e: any) => {
    const { name, value } = e.target;
    action(name, value);
  };

  const onChangeStyleHandler = (value: React.CSSProperties) => {
    const { style } = state;
    let newStyle = {};

    if (Object.keys(style).length > 0) {
      newStyle = {};
    } else {
      newStyle = { ...value };
    }
    action("style", { ...newStyle });
  };

  return (
    <>
      <SideNav
        navItems={state.navItems}
        open={state.open}
        onClose={closeSidenavHandler}
        placement={state.placement}
        zIndex={800}
        hideBackdrop={state.hideBackdrop}
        navProps={state.navProps}
        variant={state.variant}
        renderLink={state.renderLink}
        style={state.style}
      >
        <div className="sideNavHead">
          <h2>Side Nav</h2>
          <button
            type="button"
            className="close-button"
            onClick={() => action("open", !state.open)}
            aria-label="toggle sidenav"
          >
            <span></span>
          </button>
        </div>
      </SideNav>
      <section className="main">
        <fieldset>
          <legend>Nav items</legend>
          <label>
            <input
              type="radio"
              name="navItems"
              checked={state.navItems.name === "Default style"}
              onChange={() => action("navItems", items)}
            />
            Default style
          </label>
          <label>
            <input
              type="radio"
              name="navItems"
              checked={state.navItems.name === "Multi styles"}
              onChange={() => action("navItems", navItemsMultiStyles())}
            />
            Multi styles
          </label>
          <label>
            <input
              type="radio"
              name="navItems"
              checked={state.navItems.name === "Dark style"}
              onChange={() => action("navItems", navItemsDark())}
            />
            Dark style
          </label>
        </fieldset>
        <fieldset>
          <legend>Open/Close</legend>
          <button
            type="button"
            className="primaryButton"
            onClick={() => action("open", !state.open)}
          >
            {state.open ? "Close" : "Open"}
          </button>
        </fieldset>
        <fieldset>
          <legend>Placement</legend>
          <label>
            <input
              type="radio"
              name="placement"
              value="left"
              checked={state.placement === "left"}
              onChange={onChangeHandler}
            />
            Left
          </label>
          <label>
            <input
              type="radio"
              name="placement"
              value="right"
              checked={state.placement === "right"}
              onChange={onChangeHandler}
            />
            Right
          </label>
        </fieldset>
        <fieldset>
          <legend>Hide backdrop</legend>
          <label>
            <input
              type="checkbox"
              name="hideBackdrop"
              checked={state.hideBackdrop}
              onChange={() => action("hideBackdrop", !state.hideBackdrop)}
            />
            Hide backdrop
          </label>
        </fieldset>
        <fieldset>
          <legend>Variant</legend>
          <label>
            <input
              type="radio"
              name="variant"
              value="temporary"
              checked={state.variant === "temporary"}
              onChange={onChangeHandler}
            />
            Temporary
          </label>
          <label>
            <input
              type="radio"
              name="variant"
              value="permanent"
              checked={state.variant === "permanent"}
              onChange={onChangeHandler}
            />
            Permanent
          </label>
        </fieldset>
        <fieldset>
          <legend>SideNav styles example</legend>
          <label className="flex">
            <input
              type="radio"
              name="style"
              checked={Object.keys(state.style).length === 0}
              onChange={() => onChangeStyleHandler({})}
            />
            <pre>
              <code>None</code>{" "}
            </pre>
          </label>
          <label className="flex">
            <input
              type="radio"
              name="style"
              checked={Object.keys(state.style).length > 0}
              onChange={() =>
                onChangeStyleHandler({
                  width: "300px",
                  borderRadius: "0 32px 32px 0",
                })
              }
            />
            <pre>
              <code>
                width: 300px; <br />
                border-radius: 0 32px 32px 0;
              </code>{" "}
            </pre>
          </label>
        </fieldset>
      </section>

      <Outlet />
    </>
  );
};

export default Layout;

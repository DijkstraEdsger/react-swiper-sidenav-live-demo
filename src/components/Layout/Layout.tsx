import { Outlet, Link } from "react-router-dom";
import {
  SideNav,
  ISideNavProps,
  Variant,
  NavItems,
} from "react-swiper-sidenav";
import { useReducer } from "react";
import { menuItems } from "mock/Sidenav/menu-items/menu-items";
import { menuItemsMultiStyles } from "mock/Sidenav/menu-items-multi-styles/menu-items-multi-styles";
import { menuItemsDark } from "mock/Sidenav/menu-items-dark/menu-items-dark";

type CustomLinkProps = {
  to: string;
  label?: string;
};

const MyCustomLink = ({ to, label }: CustomLinkProps) => {
  return <Link to={to}>{label}</Link>;
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
  navItems: menuItems,
  open: false,
  placement: "left",
  hideBackdrop: false,
  variant: "temporary",
  style: {},
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
              checked={state.navItems.name === "Main (Default style)"}
              onChange={() => action("navItems", menuItems)}
            />
            Default style
          </label>
          <label>
            <input
              type="radio"
              name="navItems"
              checked={state.navItems.name === "Main (Dark style)"}
              onChange={() => action("navItems", menuItemsDark)}
            />
            Dark style
          </label>
          <label>
            <input
              type="radio"
              name="navItems"
              checked={state.navItems.name === "Main (Multi styles)"}
              onChange={() => action("navItems", menuItemsMultiStyles)}
            />
            Multi styles
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

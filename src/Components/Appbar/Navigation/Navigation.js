import SideDrawer from "../../Global/SideDrawer/SideDrawer";
import classes from "./Navigation.module.scss";
import categoryData from "../../../categoryData";
import { useState } from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";

function Dropdown(props) {
  return (
    <div
      className={classes.Dropdown}
      style={{
        transform: !props.collapsed ? "translateX(0)" : "translateX(100%)",
      }}
    >
      <SideDrawerActions onClick={props.onClick} />
      {props.children}
    </div>
  );
}

function SideDrawerActions(props) {
  return (
    <div className={classes.SideDrawerActions}>
      <h4>Navigation</h4>
      <GrClose onClick={props.onClick} />
    </div>
  );
}

export default function Navigation(props) {
  const [navData, setNavData] = useState(categoryData);

  const handleNavigationItemVisible = (index, subIndex, close) => {
    const newNavData = [...navData];

    if (!close) {
      if (subIndex !== null) {
        newNavData[index].subCategorys[subIndex].collapsed = false;
      } else {
        newNavData[index].collapsed = false;
      }
    } else {
      if (subIndex !== null) {
        newNavData[index].subCategorys[subIndex].collapsed = true;
      } else {
        newNavData[index].collapsed = true;
      }
    }

    setNavData(newNavData);
  };

  return (
    <SideDrawer className={`${classes.Navigation}`} open={props.open}>
      <SideDrawerActions onClick={props.toggleOpen} />
      <ul>
        <Link onClick={props.toggleOpen} className={classes.Admin} to="/admin">
          Admin Panel
        </Link>
        {navData.map((item, index) => {
          return (
            <li className={classes.Navigation__Item}>
              <div
                className={classes.Navigation__Item__Label}
                onClick={() => {
                  handleNavigationItemVisible(index, null, null);
                }}
              >
                <p style={{ display: "flex", alignItems: "center" }}>
                  {item.icon}
                  <span style={{ marginLeft: "10px", display: "block" }}>
                    {item.category}
                  </span>
                </p>
                <BiChevronRight />
              </div>

              <Dropdown collapsed={item.collapsed} onClick={props.toggleOpen}>
                <div
                  className={classes.MenuText}
                  onClick={() => {
                    handleNavigationItemVisible(index, null, "close");
                  }}
                >
                  <BiChevronLeft />
                  <h5>Back to Menu</h5>
                </div>

                <div className={classes.MenuText}>
                  <h5>{item.category}</h5>
                </div>
                {item.subCategorys.map((subItem, subIndex) => {
                  return (
                    <div className={classes.Navigation__Item}>
                      <div
                        className={classes.Navigation__Item__Label}
                        onClick={() =>
                          handleNavigationItemVisible(index, subIndex, null)
                        }
                      >
                        <p>{subItem.category}</p>
                        <BiChevronRight />
                      </div>

                      <Dropdown
                        collapsed={subItem.collapsed}
                        onClick={props.toggleOpen}
                      >
                        <div
                          className={classes.MenuText}
                          onClick={() =>
                            handleNavigationItemVisible(
                              index,
                              subIndex,
                              "close"
                            )
                          }
                        >
                          <BiChevronLeft />
                          <h5>Back to {item.category}</h5>
                        </div>

                        <div className={classes.MenuText}>
                          <h5>{subItem.category}</h5>
                        </div>
                        {subItem.children.map((child) => {
                          return (
                            <Link
                              onClick={props.toggleOpen}
                              className={classes.NavLink}
                              to={`${child}`}
                            >
                              {child}
                            </Link>
                          );
                        })}
                      </Dropdown>
                    </div>
                  );
                })}
              </Dropdown>
            </li>
          );
        })}
      </ul>
    </SideDrawer>
  );
}

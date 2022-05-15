import classes from "./DesktopNavigation.module.scss";
import categoryData from "../../../../categoryData";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
export default function DesktopNavigation(props) {
    const [navData, setNavData] = useState(categoryData);

    const onNavItemHoverHandler = (index) => {
        const newNavData = [...navData];

        newNavData[index].collapsed = false;

        setNavData(newNavData);
    };

    const onNavItemOffHoverHandler = (index) => {
        const newNavData = [...navData];

        newNavData[index].collapsed = true;

        setNavData(newNavData);
    };

    return (
        <nav className={`${classes.DesktopNavigation} hideMobile`}>
            <ul className={classes.DesktopNavigation__Items}>
                <li className={classes.DesktopNavigation__Item}>
                    <NavLink to="/">
                        <AiFillHome size={20} color="white" />
                    </NavLink>
                </li>
                {navData.map((navItem, index) => (
                    <li
                        className={classes.DesktopNavigation__Item}
                        onMouseEnter={() => {
                            onNavItemHoverHandler(index);
                        }}
                        onMouseLeave={() => {
                            onNavItemOffHoverHandler(index);
                        }}
                    >
                        <NavLink to={`/${navItem.category.toLowerCase()}`}>
                            <p
                                className={`${classes.DesktopNavigation__Item__Label} text-secondary`}
                            >
                                {navItem.category}
                            </p>
                        </NavLink>

                        {!navItem.collapsed && (
                            <div className={classes.Dropdown}>
                                {navItem.subCategorys.map((subCat) => (
                                    <ul className={classes.Category}>
                                        <h4>{subCat.subCategory}</h4>
                                        <li>Placeholder</li>
                                        <li>Placeholder</li>
                                        <li>Placeholder</li>
                                        <li>Placeholder</li>
                                        <li>Placeholder</li>
                                    </ul>
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

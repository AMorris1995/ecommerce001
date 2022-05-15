import classes from "./MobileNavigation.module.scss";
import MobileNavigationTopMenu from "./MobileNavigationTopMenu";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
export default function MobileNavigationItemDropdown(props) {
    return (
        <div
            className={`${classes.MobileNavigation__Item__Dropdown}`}
            style={{
                transform: !props.navItem.collapsed
                    ? "translateX(0)"
                    : "translateX(100%)",
            }}
        >
            <MobileNavigationTopMenu toggleOpen={props.toggleOpen} />
            <h5
                onClick={() => {
                    props.onNavItemClickHandler(props.index, null, "close");
                }}
                style={{
                    padding: "1rem",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <BiChevronLeft style={{ marginRight: "10px" }} /> Back to Menu
            </h5>
            <h5 style={{ padding: ".5rem 1rem " }}>{props.navItem.category}</h5>
            <ul className={classes.Categorys} style={{ padding: "0" }}>
                {props.navItem.subCategorys.map((subCat, subIndex) => (
                    <li className={classes.CategoryItems} key={subIndex}>
                        <div
                            onClick={() =>
                                props.onNavItemClickHandler(
                                    props.index,
                                    subIndex
                                )
                            }
                            className={classes.MobileNavigation__Item__Wrapper}
                        >
                            <p style={{ fontSize: "0.8rem" }}>
                                {subCat.subCategory}
                            </p>
                            {subCat.children && <BiChevronRight />}
                        </div>

                        <div
                            className={classes.MobileNavigation__Item__Dropdown}
                            style={{
                                transform: !subCat.collapsed
                                    ? "translateX(0)"
                                    : "translateX(100%)",
                            }}
                        >
                            <MobileNavigationTopMenu
                                toggleOpen={props.toggleOpen}
                            />
                            <h5
                                onClick={() => {
                                    props.onNavItemClickHandler(
                                        props.index,
                                        subIndex,
                                        "close"
                                    );
                                }}
                                style={{
                                    padding: "1rem",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <BiChevronLeft
                                    style={{ marginRight: "10px" }}
                                />{" "}
                                Back to {props.navItem.category}
                            </h5>
                            <h5
                                style={{
                                    padding: ".5rem 1rem ",
                                    fontSize: "0.8rem",
                                }}
                            >
                                {subCat.subCategory}
                            </h5>
                            {subCat.children &&
                                subCat.children.map((child) => (
                                    <li
                                        key={child}
                                        className={classes.CategoryItems}
                                        style={{
                                            padding: "1rem",
                                            fontSize: "0.8rem",
                                        }}
                                    >
                                        <Link
                                            to={`/${child}`}
                                            onClick={props.toggleOpen}
                                        >
                                            {child}
                                        </Link>
                                    </li>
                                ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

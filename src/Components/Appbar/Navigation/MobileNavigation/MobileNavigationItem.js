import classes from "./MobileNavigation.module.scss";
import { BiChevronRight } from "react-icons/bi";
import MobileNavigationItemDropdown from "./MobileNavigationItemDropdown";
export default function MobileNavigationItem(props) {
    return (
        <li className={classes.MobileNavigation__Item}>
            <div
                className={classes.MobileNavigation__Item__Wrapper}
                onClick={() => props.onNavItemClickHandler(props.index)}
            >
                <p
                    style={{ fontSize: "0.9rem" }}
                    className={classes.MobileNavigation__Item__Label}
                >
                    {props.navItem.category}
                </p>
                <BiChevronRight />
            </div>

            <MobileNavigationItemDropdown
                index={props.index}
                onNavItemClickHandler={props.onNavItemClickHandler}
                navItem={props.navItem}
                toggleOpen={props.toggleOpen}
            />
        </li>
    );
}

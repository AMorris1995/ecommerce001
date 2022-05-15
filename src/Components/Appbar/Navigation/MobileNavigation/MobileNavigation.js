import SideDrawer from "../../../Global/SideDrawer/SideDrawer";
import classes from "./MobileNavigation.module.scss";
import categoryData from "../../../../categoryData";
import { BiChevronRight } from "react-icons/bi";
import { useState } from "react";
import ToggleButton from "./ToggleButton";
import MobileNavigationItem from "./MobileNavigationItem";
import MobileNavigationTopMenu from "./MobileNavigationTopMenu";
export default function MobileNavigation(props) {
    const [navData, setNavData] = useState(categoryData);

    const onNavItemClickHandler = (index, subIndex, close) => {
        const newNavData = [...navData];

        console.log(index, subIndex, close);
        if (close) {
            if (subIndex !== null) {
                newNavData[index].subCategorys[subIndex].collapsed = true;
            } else {
                newNavData[index].collapsed = true;
            }
        } else {
            if (subIndex >= 0) {
                newNavData[index].subCategorys[subIndex].collapsed = false;
            }

            newNavData[index].collapsed = false;
        }

        setNavData(newNavData);
    };

    const onNavItemOffHoverHandler = (index) => {
        const newNavData = [...navData];

        newNavData[index].collapsed = true;

        setNavData(newNavData);
    };

    return (
        <SideDrawer
            className={`${classes.MobileNavigation} hideDesktop`}
            open={props.open}
        >
            <ul className={classes.MobileNavigation__Items}>
                <MobileNavigationTopMenu toggleOpen={props.toggleOpen} />
                {navData.map((navItem, index) => (
                    <MobileNavigationItem
                        toggleOpen={props.toggleOpen}
                        onNavItemClickHandler={onNavItemClickHandler}
                        index={index}
                        navItem={navItem}
                    />
                ))}
            </ul>
        </SideDrawer>
    );
}

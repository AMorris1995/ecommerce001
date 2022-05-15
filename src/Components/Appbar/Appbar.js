import { useState } from "react";
import Logo from "../Global/Logo/Logo";
import AccountIcon from "./AccountIcon";
import classes from "./Appbar.module.scss";
import BasketIcon from "./BasketIcon";
import DesktopNavigation from "./Navigation/DesktopNavigation/DesktopNavigation";
import MobileNavigation from "./Navigation/MobileNavigation/MobileNavigation";
import ToggleButton from "./Navigation/MobileNavigation/ToggleButton";

export default function Appbar(props) {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <>
            <div className={`${classes.Appbar} border-bottom`}>
                <div className={classes.Appbar__Container}>
                    <Logo />
                    <div className={classes.ActionIcons}>
                        <AccountIcon style={{ marginRight: "20px" }} />
                        <BasketIcon style={{ marginRight: "20px" }} />
                        <ToggleButton onClick={toggleOpen}></ToggleButton>
                    </div>
                </div>
            </div>
            <DesktopNavigation />
            <MobileNavigation toggleOpen={toggleOpen} open={open} />
        </>
    );
}

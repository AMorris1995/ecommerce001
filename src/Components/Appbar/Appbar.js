import { useState } from "react";
import Backdrop from "../Global/Backdrop/Backdrop";
import Logo from "../Global/Logo/Logo";
import AccountIcon from "./AccountIcon";
import { Link } from "react-router-dom";
import classes from "./Appbar.module.scss";
import BasketIcon from "./BasketIcon";
import MobileNavigation from "./Navigation/MobileNavigation/MobileNavigation";
import ToggleButton from "./Navigation/MobileNavigation/ToggleButton";
import categoryData from "../../categoryData";

const initialCatData = [...categoryData];
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
                        <Link to="/account">
                            <AccountIcon style={{ marginRight: "20px" }} />
                        </Link>
                        <BasketIcon style={{ marginRight: "20px" }} />
                        <ToggleButton onClick={toggleOpen}></ToggleButton>
                    </div>
                </div>
            </div>
            {open && <Backdrop onClick={toggleOpen} />}
            <MobileNavigation toggleOpen={toggleOpen} open={open} />
        </>
    );
}

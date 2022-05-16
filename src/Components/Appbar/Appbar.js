import { useState } from "react";
import Backdrop from "../Global/Backdrop/Backdrop";
import Logo from "../Global/Logo/Logo";
import AccountIcon from "./AccountIcon";
import { Link } from "react-router-dom";
import classes from "./Appbar.module.scss";
import BasketIcon from "./BasketIcon";
import ToggleButton from "./Navigation/ToggleButton";
import Navigation from "./Navigation/Navigation";

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
      <Navigation toggleOpen={toggleOpen} open={open}></Navigation>
    </>
  );
}

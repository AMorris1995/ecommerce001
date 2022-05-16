import classes from "./FilterPanel.module.scss";
import { BiChevronRight, BiChevronDown } from "react-icons/bi";
import { useState } from "react";

export default function FilterGroup(props) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className={classes.FilterGroup}>
      <div className={classes.Outer} onClick={toggleOpen}>
        <h4>{props.label}</h4>
        {!open ? <BiChevronRight /> : <BiChevronDown />}
      </div>
      {open && (
        <div className={classes.Dropdown__Content}>{props.children}</div>
      )}
    </div>
  );
}

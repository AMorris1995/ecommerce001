import classes from "./MobileNavigation.module.scss";
import { AiOutlineClose } from "react-icons/ai";

export default function MobileNavigationTopMenu(props) {
    return (
        <li
            className={`${classes.MobileNavigation__Item} ${classes.Navigation__Top__Menu}`}
        >
            <h4>Navigation</h4>
            <AiOutlineClose onClick={props.toggleOpen} />
        </li>
    );
}

import classes from "./Backdrop.module.scss";
import ReactDOM from "react-dom";
export default function Backdrop(props) {
    return ReactDOM.createPortal(
        <div className={classes.Backdrop} onClick={props.onClick}></div>,
        document.getElementById("backdrop-root")
    );
}

import classes from "./SideDrawer.module.scss";

export default function SideDrawer(props) {
    return (
        <div
            className={`${classes.SideDrawer} ${props.className}`}
            style={{
                transform: props.open ? "translateX(0)" : "translateX(100%)",
            }}
        >
            {props.children}
        </div>
    );
}

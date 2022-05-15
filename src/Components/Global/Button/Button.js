import classes from "./Button.module.scss";
export default function Button(props) {
    return (
        <button
            className={`${classes.Button} ${props.className}`}
            onClick={props.onClick}
            style={props.style}
        >
            {props.children}
        </button>
    );
}

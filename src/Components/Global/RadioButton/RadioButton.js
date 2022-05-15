import classes from "./RadioButton.module.scss";

export default function RadioButton(props) {
    return (
        <div className={classes.Container} onClick={props.onChange}>
            <div
                className={`${classes.RadioOuter} ${
                    props.active && classes.RadioActive
                }`}
            ></div>

            <label>{props.label}</label>
        </div>
    );
}

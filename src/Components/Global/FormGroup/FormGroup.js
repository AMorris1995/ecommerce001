import classes from "./FormGroup.module.scss";

export default function FormGroup(props) {
  return (
    <div className={`${classes.FormGroup} ${props.className}`}>
      <label className={classes.FormGroup__Label}>{props.label}</label>
      {props.children}
    </div>
  );
}

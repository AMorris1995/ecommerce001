import classes from "./CustomInput.module.scss";

export default function CustomInput(props) {
  return (
    <input
      className={classes.CustomInput}
      value={props.value}
      type={props.type}
      onChange={props.onChange}
      placeholder={props.placeholder}
      step={props.step}
      pattern={props.pattern}
    />
  );
}

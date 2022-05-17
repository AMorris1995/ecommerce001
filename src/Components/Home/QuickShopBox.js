import { Link } from "react-router-dom";
import classes from "./QuickShopBox.module.scss";

export default function QuickShopBox(props) {
  return (
    <Link className={classes.Link} to={props.to}>
      <div className={classes.QuickShopBox}>
        <img src="https://cdn.media.amplience.net/i/currysprod/top-cat-washing-machine?fmt=webp&qlt=80" />
        <p>{props.children}</p>
      </div>
    </Link>
  );
}

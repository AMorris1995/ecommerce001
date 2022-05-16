import { Link } from "react-router-dom";
import classes from "./Logo.module.scss";

export default function Logo(props) {
  return (
    <div className={classes.Logo}>
      <Link to="/">
        <h1>
          <span className="color-secondary">Best</span>
          <span className="color-primary">Laptops</span>
        </h1>
        <h3 className="small-text text-right">.co.uk</h3>
      </Link>
    </div>
  );
}

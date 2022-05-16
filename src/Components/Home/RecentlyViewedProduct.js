import { Link } from "react-router-dom";
import classes from "./RecentlyViewedProduct.module.scss";

export default function RecentlyViewedProduct(props) {
  return (
    <div className={classes.RecentlyViewedProduct}>
      <div className={classes.RecentlyViewedProduct__ImageContainer}>
        <img src="https://media.currys.biz/i/currysprod/10230558?$g-small$&fmt=auto" />
      </div>
      <div className={classes.RecentlyViewedProduct__Data}>
        <p>
          DELL Inspiron 15 3511 15.6" Laptop - Intel Core i5, 256 GB, Silver
        </p>

        <h4>£150</h4>
        <Link to="/">View product</Link>
      </div>
    </div>
  );
}

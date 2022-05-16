import { Link } from "react-router-dom";
import Button from "../Global/Button/Button";
import classes from "./Product.module.scss";

export default function Product(props) {
  return (
    <div className={classes.Product}>
      <h4 className={classes.Product__Title}>
        DELL Inspiron 15 3511 15.6" Laptop - Intel Core i5, 256 GB, Silver
      </h4>
      <div className={classes.Product__Container}>
        <div className={classes.Product__Image__Container}>
          <img src="https://media.currys.biz/i/currysprod/10230558?$g-small$&fmt=auto" />
        </div>
        <div className={classes.Product__Data__Points}>
          <ul>
            <li>Some Data Points</li>
          </ul>
        </div>
        <div className={classes.Product__Data}>
          <h4 className={classes.Product__Price}>£150</h4>
          <Link to="/">View details</Link>
        </div>
      </div>
    </div>
  );
}

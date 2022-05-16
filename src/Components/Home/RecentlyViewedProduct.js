import { Link } from "react-router-dom";
import classes from "./RecentlyViewedProduct.module.scss";

export default function RecentlyViewedProduct(props) {
  return (
    <div className={classes.RecentlyViewedProduct}>
      <div className={classes.RecentlyViewedProduct__ImageContainer}>
        <img src={props.prod.productData.imageUrl} />
      </div>
      <div className={classes.RecentlyViewedProduct__Data}>
        <Link to="/">{props.prod.productData.title}</Link>

        <h4 className={classes.Price}>£{props.prod.productData.price}</h4>
      </div>
    </div>
  );
}

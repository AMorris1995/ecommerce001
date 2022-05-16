import Carousel from "../Carousel/Carousel";
import RecentlyViewedProduct from "./RecentlyViewedProduct";
import classes from "./RecentlyViewedProducts.module.scss";

export default function RecentlyViewedProducts(props) {
  return (
    <div className={`${classes.Wrapper}`}>
      <h4>Recently Viewed</h4>
      <div className={classes.RecentlyViewedProducts}>
        {props.recentProducts.map((recent) => (
          <RecentlyViewedProduct />
        ))}
      </div>
    </div>
  );
}

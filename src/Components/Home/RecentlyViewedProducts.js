import Carousel from "../Carousel/Carousel";
import RecentlyViewedProduct from "./RecentlyViewedProduct";
import classes from "./RecentlyViewedProducts.module.scss";

export default function RecentlyViewedProducts(props) {
  return (
    <div className={`${classes.Wrapper} hideMobile`}>
      <h4>Recently Viewed</h4>
      <Carousel>
        {props.recentProducts.map((recent) => (
          <RecentlyViewedProduct />
        ))}
      </Carousel>
    </div>
  );
}

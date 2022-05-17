import { useState } from "react";
import Carousel from "../Carousel/Carousel";
import RecentlyViewedProduct from "./RecentlyViewedProduct";
import classes from "./RecentlyViewedProducts.module.scss";

export default function RecentlyViewedProducts(props) {
  const [recentlyViewed, setRecentlyViewed] = useState(
    localStorage.getItem("recentlyViewed")
      ? JSON.parse(localStorage.getItem("recentlyViewed"))
      : []
  );

  console.log("HERE", recentlyViewed);
  return (
    <div className={`${classes.Wrapper}`}>
      <h4>Recently Viewed</h4>
      <div className={classes.RecentlyViewedProducts}>
        {recentlyViewed
          .map((recent) => <RecentlyViewedProduct prod={recent} />)
          .slice(0, 8)}
      </div>
    </div>
  );
}

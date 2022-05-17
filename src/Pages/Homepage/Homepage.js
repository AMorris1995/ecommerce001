import Banner from "../../Components/Home/Banner";
import "react-multi-carousel/lib/styles.css";
import QuickShopBox from "../../Components/Home/QuickShopBox";
import { Link } from "react-router-dom";
import classes from "./Homepage.module.scss";
import Carousel from "../../Components/Carousel/Carousel";
import Product from "../../Components/Product/Product";
import RecentlyViewedProduct from "../../Components/Home/RecentlyViewedProduct";
import image from "./infiniteA.png";
import image1 from "./infiniteAGroup.png";
import AdvertBoard from "../../Components/Home/AdvertBoard";
import RecentlyViewedProducts from "../../Components/Home/RecentlyViewedProducts";

export default function Homepage(props) {
  return (
    <div style={{ paddingBottom: "2rem" }}>
      <Banner></Banner>
      <div className={classes.Container}>
        <h4>Shop Deals</h4>

        <Carousel>
          <QuickShopBox to="/computing/laptops/all-laptops">
            Laptops
          </QuickShopBox>
          <QuickShopBox to="/gaming/consoles/xbox-consoles">
            Consoles
          </QuickShopBox>
        </Carousel>
      </div>

      <AdvertBoard to="/" img={image1} />

      <RecentlyViewedProducts />
    </div>
  );
}

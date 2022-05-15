import Banner from "../../Components/Home/Banner";
import "react-multi-carousel/lib/styles.css";
import QuickShopBox from "../../Components/Home/QuickShopBox";
import classes from "./Homepage.module.scss";
import Carousel from "react-multi-carousel";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 8,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
    },
};
export default function Homepage(props) {
    return (
        <div>
            <Banner></Banner>
            <div className={classes.Container}>
                <h4>Shop Deals</h4>

                <Carousel
                    responsive={responsive}
                    swipeable
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    containerClass={classes.Container}
                >
                    <QuickShopBox>Laptops</QuickShopBox>
                    <QuickShopBox>Washing machines</QuickShopBox>
                    <QuickShopBox>Gaming</QuickShopBox>
                    <QuickShopBox>Desktops</QuickShopBox>
                    <QuickShopBox>Desktops</QuickShopBox>
                    <QuickShopBox>Desktops</QuickShopBox>
                    <QuickShopBox>Desktops</QuickShopBox>
                    <QuickShopBox>Desktops</QuickShopBox>
                </Carousel>
            </div>
        </div>
    );
}

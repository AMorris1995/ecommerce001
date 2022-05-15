import Button from "../Global/Button/Button";
import classes from "./Banner.module.scss";
import image from "./tv.png";
export default function Banner(props) {
    return (
        <div className={classes.Banner}>
            <img src={image} height="100%" />
            <div className={classes.BannerText}>
                <h2 className="highlight-text">
                    Tech now, pay in{" "}
                    <span className="text-secondary">2023</span>
                </h2>
                <p>
                    <span className="bold text-secondary">
                        Pay nothing for up to 12 months
                    </span>{" "}
                    on selected tech. Nice!
                </p>
                <p>
                    {" "}
                    24.9% APR representative (variable). Selected products only.
                </p>
                <p>£99 minimum spend. T&Cs apply.</p>
                <Button className={classes.ShopNowBtn}>Shop now</Button>
            </div>
        </div>
    );
}

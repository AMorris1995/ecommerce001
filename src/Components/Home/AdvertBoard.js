import classes from "./AdvertBoard.module.scss";
import { Link } from "react-router-dom";
export default function AdvertBoard(props) {
  return (
    <div className={classes.AdvertBoard}>
      <div className={classes.AdvertBoard__Text}>
        <h4>
          MSI <span className="primary-text">Infinite</span> A Series
        </h4>
        <h2>New and exclusive to BestLaptops: The MSI Infinite A 8TH</h2>
        <Link to={props.to}>Shop now</Link>
      </div>
      <div className={classes.Image}>
        <img src={props.img} />
      </div>
    </div>
  );
}

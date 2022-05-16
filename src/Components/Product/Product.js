import { Link } from "react-router-dom";
import Button from "../Global/Button/Button";
import classes from "./Product.module.scss";

export default function Product(props) {
  const addToRecents = () => {
    const prods = localStorage.getItem("recentlyViewed")
      ? JSON.parse(localStorage.getItem("recentlyViewed"))
      : [];

    const index = prods.findIndex(
      (item) => item.productData.title === props.prod.productData.title
    );

    if (index === -1) {
      prods.push(props.prod);
    }

    localStorage.setItem("recentlyViewed", JSON.stringify(prods));
  };
  return (
    <div className={classes.Product}>
      <h4 className={classes.Product__Title}>
        DELL Inspiron 15 3511 15.6" Laptop - Intel Core i5, 256 GB, Silver
      </h4>
      <div className={classes.Product__Container}>
        <div className={classes.Product__Image__Container}>
          <img src={props.prod.productData.imageUrl} />
        </div>
        <div className={classes.Product__Data__Points}>
          {props.prod.productData.keypoints && (
            <ul>
              {props.prod.productData.keypoints.map((keyPoint) => (
                <li>{keyPoint}</li>
              ))}
            </ul>
          )}
        </div>
        <div className={classes.Product__Data}>
          <h4 className={classes.Product__Price}>
            £{props.prod.productData.price}
          </h4>
          <Link onClick={addToRecents} to="/">
            View details
          </Link>
        </div>
      </div>
    </div>
  );
}

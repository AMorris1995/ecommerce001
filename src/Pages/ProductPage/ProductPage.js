import FilterPanel from "../../Components/FilterPanel/FilterPanel";
import Products from "../../Components/Products/Products";
import classes from "./ProductPage.module.scss";
export default function ProductPage(props) {
  return (
    <div className={classes.ProductPage}>
      <FilterPanel />
      <Products />
    </div>
  );
}

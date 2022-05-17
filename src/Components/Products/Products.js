import { useParams } from "react-router-dom";
import Product from "../Product/Product";
import classes from "./Products.module.scss";
import useFetchProducts from "../../Hooks/useFetchProducts";
import Spinner from "../Global/Spinner/Spinner";

export default function Products(props) {
  const params = useParams();

  const { loading, prods, error } = useFetchProducts("products");

  console.log(prods);
  let filterdProducts;
  const { category, subCategory, type } = params;

  if (category && subCategory && type) {
    if (type.includes("all")) {
      filterdProducts = prods.filter((prod) => {
        return (
          prod.category.toLowerCase() === category &&
          prod.subCategory.toLowerCase() === subCategory
        );
      });
    } else {
      filterdProducts = prods.filter((prod) => {
        return (
          prod.category.toLowerCase() === category &&
          prod.subCategory.toLowerCase() === subCategory.replaceAll("-", " ") &&
          prod.type.toLowerCase() === type.replaceAll("-", " ")
        );
      });
    }
  }

  console.log(filterdProducts);

  return (
    <div className={classes.Products}>
      {loading ? (
        <Spinner />
      ) : filterdProducts.length > 0 ? (
        filterdProducts.map((prod) => <Product prod={prod} />)
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
}

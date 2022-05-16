import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";
import classes from "./Products.module.scss";
import PRODUCTS from "../../products";

export default function Products(props) {
  let filterdProducts = [];
  const params = useParams();

  const { category, subCategory, type } = params;

  if (category && subCategory && type) {
    if (type.includes("all")) {
      filterdProducts = PRODUCTS.filter((prod) => {
        return prod.category === category && prod.subCategory === subCategory;
      });
    } else {
      filterdProducts = PRODUCTS.filter((prod) => {
        return (
          prod.category === category &&
          prod.subCategory === subCategory.replaceAll("-", " ") &&
          prod.type === type.replaceAll("-", " ")
        );
      });
    }
  }

  return (
    <div className={classes.Products}>
      {filterdProducts.length > 0 ? (
        filterdProducts.map((prod) => <Product prod={prod} />)
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
}

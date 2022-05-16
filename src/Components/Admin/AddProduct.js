import classes from "./AddProduct.module.scss";
import categoryData from "../../categoryData";
import { useState } from "react";

export default function AddProduct(props) {
  const [curCategorySubIndex, setCurCategorySubIndex] = useState(0);
  const [curCategoryIndex, setCurCategoryInex] = useState(0);

  const [newProd, setNewProd] = useState({
    title: "",
    price: "",
    imageUrl: "",
    description: "",
    category: "",
    subCategory: "",
    type: "",
  });

  console.log(newProd);
  console.log(curCategoryIndex);
  return (
    <form className={classes.AddProduct}>
      <div className={classes.FormGroup}>
        <label>Product Title:</label>
        <input
          type="text"
          placeholder="Product title*"
          value={newProd.title}
          onChange={(e) => {
            setNewProd((prevState) => {
              return { ...prevState, title: e.target.value };
            });
          }}
        />
      </div>

      <div className={classes.FormGroup}>
        <label>Product Price:</label>
        <input
          type="number"
          placeholder="£"
          onChange={(e) => {
            setNewProd((prevState) => {
              return { ...prevState, price: e.target.value };
            });
          }}
        />
      </div>

      <div className={classes.FormGroup}>
        <label>Product ImageURL:</label>
        <input
          type="text"
          placeholder="https://"
          onChange={(e) => {
            setNewProd((prevState) => {
              return { ...prevState, imageUrl: e.target.value };
            });
          }}
        />
      </div>

      <div className={classes.FormGroup}>
        <label>Product Description:</label>
        <textarea
          className={classes.ProductDescription}
          placeholder="Product description"
          value={newProd.description}
          onChange={(e) => {
            setNewProd((prevState) => {
              return { ...prevState, description: e.target.value };
            });
          }}
        />
      </div>

      <div className={classes.FormGroup}>
        <label>Product Category:</label>
        <select
          onChange={(e) => {
            setCurCategoryInex(e.target.value);
            setNewProd((prevState) => {
              return { ...prevState, category: e.target.value };
            });
          }}
        >
          {categoryData.map((cat, index) => {
            return <option value={index}>{cat.category}</option>;
          })}
        </select>
      </div>

      <div className={classes.FormGroup}>
        <label>Product Subcategory:</label>
        <select
          onChange={(e) => {
            setCurCategorySubIndex(e.target.value);
            setNewProd((prevState) => {
              return { ...prevState, subCategory: e.target.value };
            });
          }}
        >
          {categoryData[curCategoryIndex].subCategorys.map(
            (subCategory, subIndex) => {
              return <option value={subIndex}>{subCategory.category}</option>;
            }
          )}
        </select>
      </div>

      <div className={classes.FormGroup}>
        <label>Product Type:</label>
        <select>
          {categoryData[curCategoryIndex].subCategorys[
            curCategorySubIndex
          ].children.map((type, subIndex) => {
            return <option>{type}</option>;
          })}
        </select>
      </div>
    </form>
  );
}

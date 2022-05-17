import classes from "./AddProduct.module.scss";
import categoryData from "../../categoryData";
import { useState } from "react";
import FormGroup from "../Global/FormGroup/FormGroup";
import CustomInput from "../Global/CustomInput/CustomInput";
import { collection, addDoc } from "firebase/firestore";

import { db } from "../../firebase";
import Button from "../Global/Button/Button";

export default function AddProduct(props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [curCategory, setCurCategory] = useState(null);
  const [curSubCategory, setCurSubCategory] = useState(null);
  const [type, setType] = useState(null);

  const handleAddProduct = async (e) => {
    e.preventDefault();

    if (
      !title ||
      !price ||
      !imageUrl ||
      !description ||
      !curCategory ||
      !curSubCategory ||
      !type
    ) {
      return alert("Please complete all fields");
    }

    await addDoc(collection(db, "products"), {
      category: curCategory,
      subCategory: curSubCategory,
      type: type,
      productData: {
        title,
        price: parseInt(price),
        imageUrl,
        description,
      },
    });

    setTitle("");
    setPrice("");
    setImageUrl("");
    setDescription("");
    setCurCategory(null);
    setCurSubCategory(null);
    setType(null);
  };

  console.log(price);

  return (
    <form className={classes.AddProduct} onSubmit={handleAddProduct}>
      <FormGroup label="Product Title:">
        <CustomInput
          type="text"
          placeholder="Product title*"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </FormGroup>

      <FormGroup label="Product Price:">
        <CustomInput
          type="number"
          step="0.01"
          pattern="^\d*(\.\d{0,2})?$"
          placeholder="£"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
      </FormGroup>

      <FormGroup label="Product ImageURL:">
        <CustomInput
          type="text"
          placeholder="https://"
          onChange={(e) => {
            setImageUrl(e.target.value);
          }}
        />
      </FormGroup>

      <FormGroup label="Product Description:">
        <textarea
          className={classes.ProductDescription}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          placeholder="Product description"
        />
      </FormGroup>

      <FormGroup label="Category:">
        <select
          name="category"
          onChange={(e) => {
            setCurCategory(e.target.value);
            setCurSubCategory(null);
          }}
        >
          <option value={null} defaultValue="" hidden></option>

          {categoryData.map((category) => (
            <option value={category.category}>{category.category}</option>
          ))}
        </select>
      </FormGroup>

      {curCategory && (
        <FormGroup label="SubCategory:">
          <select
            name="subCategory"
            onChange={(e) => {
              setCurSubCategory(e.target.value);
            }}
          >
            <option value={null} defaultValue="" disabled>
              Select Option
            </option>
            {curCategory &&
              categoryData
                .find((cat) => cat.category === curCategory)
                .subCategorys.map((subCategory) => (
                  <option value={subCategory.category}>
                    {subCategory.category}
                  </option>
                ))}
          </select>
        </FormGroup>
      )}

      {curSubCategory && (
        <FormGroup label="Type:">
          <select
            name="type"
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option value={null} selected disabled>
              Select Option
            </option>

            {curSubCategory &&
              categoryData
                .find((cat) => cat.category === curCategory)
                .subCategorys.find(
                  (subCategory) => subCategory.category === curSubCategory
                )
                .children.map((type) => <option value={type}>{type}</option>)}
          </select>
        </FormGroup>
      )}

      <Button type="submit">Submit Product</Button>
    </form>
  );
}

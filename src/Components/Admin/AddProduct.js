import classes from "./AddProduct.module.scss";
import categoryData from "../../categoryData";
import { useState } from "react";

export default function AddProduct(props) {
    const [curCategorySubIndex, setCurCategorySubIndex] = useState(0);
    const [curCategoryIndex, setCurCategoryInex] = useState(0);

    console.log(curCategoryIndex);
    return (
        <form className={classes.AddProduct}>
            <div className={classes.FormGroup}>
                <label>Product Title:</label>
                <input type="text" placeholder="Product title*" />
            </div>

            <div className={classes.FormGroup}>
                <label>Product Price:</label>
                <input type="number" placeholder="£" />
            </div>

            <div className={classes.FormGroup}>
                <label>Product ImageURL:</label>
                <input type="text" placeholder="https://" />
            </div>

            <div className={classes.FormGroup}>
                <label>Product Description:</label>
                <textarea
                    className={classes.ProductDescription}
                    placeholder="Product description"
                />
            </div>

            <div className={classes.FormGroup}>
                <label>Product Category:</label>
                <select
                    onChange={(e) => {
                        setCurCategoryInex(e.target.value);
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
                    }}
                >
                    {categoryData[curCategoryIndex].subCategorys.map(
                        (subCategory, subIndex) => {
                            return (
                                <option value={subIndex}>
                                    {subCategory.subCategory}
                                </option>
                            );
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

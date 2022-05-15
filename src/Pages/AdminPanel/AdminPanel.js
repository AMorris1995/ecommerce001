import AddProduct from "../../Components/Admin/AddProduct";
import classes from "./AdminPanel";

export default function AdminPanel(props) {
    return (
        <div className={classes.AdminPanel}>
            <AddProduct />
        </div>
    );
}

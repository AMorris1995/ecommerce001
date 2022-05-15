import classes from "./Appbar.module.scss";
import { BsBasket } from "react-icons/bs";
import Button from "../Global/Button/Button";
export default function BasketIcon(props) {
    return (
        <Button style={props.style}>
            <BsBasket size={20} />
            <p>Basket</p>
        </Button>
    );
}

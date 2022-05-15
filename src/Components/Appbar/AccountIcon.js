import classes from "./Appbar.module.scss";
import { AiOutlineUser } from "react-icons/ai";
import Button from "../Global/Button/Button";
export default function AccountIcon(props) {
    return (
        <Button style={props.style}>
            <AiOutlineUser size={20} />
            <p>Account</p>
        </Button>
    );
}

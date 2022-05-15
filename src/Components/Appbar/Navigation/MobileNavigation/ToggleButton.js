import Button from "../../../Global/Button/Button";
import "./MobileNavigation.module.scss";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
export default function ToggleButton(props) {
    return (
        <Button className="hideDesktop" onClick={props.onClick}>
            <HiOutlineMenuAlt3 size={20} />
            <p>Menu</p>
        </Button>
    );
}

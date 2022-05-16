import Button from "../../Global/Button/Button";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
export default function ToggleButton(props) {
  return (
    <Button onClick={props.onClick}>
      <HiOutlineMenuAlt3 size={20} />
      <p>Menu</p>
    </Button>
  );
}

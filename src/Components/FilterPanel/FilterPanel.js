import FilterGroup from "./FilterGroup";
import classes from "./FilterPanel.module.scss";
import { useState } from "react";
import FormGroup from "../Global/FormGroup/FormGroup";
import CustomInput from "../Global/CustomInput/CustomInput";
export default function FilterPanel(props) {
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.FilterPanel}>
      <div className={classes.FilterPanelMenu}>
        <h4>Filters</h4>
      </div>

      <FilterGroup label="Price" flex>
        <CustomInput type="range"></CustomInput>
      </FilterGroup>

      <FilterGroup label="Brand">
        <div className={classes.Checkbox}>
          <CustomInput type="checkbox"></CustomInput>
          <label>Brand</label>
        </div>

        <div className={classes.Checkbox}>
          <CustomInput type="checkbox"></CustomInput>
          <label>Brand</label>
        </div>

        <div className={classes.Checkbox}>
          <CustomInput type="checkbox"></CustomInput>
          <label>Brand</label>
        </div>
      </FilterGroup>
    </div>
  );
}

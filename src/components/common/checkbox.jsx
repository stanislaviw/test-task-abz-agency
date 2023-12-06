import { Checkbox } from "@mui/material";
import { ReactComponent as CheckboxIcon } from "../assets/checkbox.svg";
import { ReactComponent as CheckedIcon } from "../assets/checked.svg";

export const CommonChechbox = ({ onChange, checked, label }) => {
  return (
    <label className="checkbox_label">
      <Checkbox
        checked={checked}
        onChange={onChange}
        className="checkbox"
        icon={<CheckboxIcon />}
        checkedIcon={<CheckedIcon />}
      />
      {label}
    </label>
  );
};

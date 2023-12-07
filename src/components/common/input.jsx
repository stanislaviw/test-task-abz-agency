import { TextField } from "@mui/material";
import { useState } from "react";

export const CommonInput = ({
  label,
  helperText,
  errorText,
  validateFunction,
  setFormData,
}) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const inputValue = event.target.value;

    if (!validateFunction(inputValue)) {
      setError(true);
      setFormData("");
    } else {
      setFormData(inputValue);
      setError(false);
    }
    setValue(inputValue);
  };

  return (
    <TextField
      className="input"
      value={value}
      label={label}
      onChange={handleChange}
      variant="outlined"
      error={error}
      helperText={error ? errorText : helperText || ""}
    />
  );
};

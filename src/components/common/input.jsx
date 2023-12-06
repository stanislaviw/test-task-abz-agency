import { TextField } from "@mui/material";

export const CommonInput = ({ label, helperText }) => {
  return (
    <TextField
      error
      label={label}
      variant="outlined"
      helperText={helperText || "Incorect"}
    />
  );
};

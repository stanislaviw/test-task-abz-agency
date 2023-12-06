import { TextField } from "@mui/material";

export const CommonInput = ({ label, helperText }) => {
  return (
    <TextField label={label} variant="outlined" helperText={helperText || ""} />
  );
};

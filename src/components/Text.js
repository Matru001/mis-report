import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const Text = ({ name, currencies, handleChange }) => {
  return (
    <TextField
      id="outlined-select-currency"
      select
      label={name}
      defaultValue="none"
      onChange={(e) => handleChange(e)}
     
    >
      {currencies.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
export default Text;

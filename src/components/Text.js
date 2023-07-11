import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Padding } from "@mui/icons-material";

const Text = ({ name, currencies, handleChange }) => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "190px", height: 70 },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          sx={{ m: 1, height: 96 }}
          id="outlined-select-currency"
          select
          label={name}
          defaultValue="none"
          onChange={(e) => handleChange(e)}         // helperText={name}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
};
export default Text;

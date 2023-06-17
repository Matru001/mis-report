import React from 'react'
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Select = ({year}) => {
  return (

      <div style={{ marginTop: 35, display: "flex", marginLeft: 10 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker label={year} />
            </DemoContainer>
          </LocalizationProvider>
    </div>
  )
}

export default Select;

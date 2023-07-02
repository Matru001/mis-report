import React from "react";
import Text from "../components/Text";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { Height } from "@mui/icons-material";
import Number from "../components/Number";
import Fields from "../components/Fields";
import Links from "../components/Links";

const currencies = [
  {
    value: "EUR",
    label: "None",
  },
  {
    value: "None",
    label: "Suman Das",
  },
  {
    value: "BTC",
    label: "Rajesh Swain",
  },
  {
    value: "JPY",
    label: "aman",
  },
];

const currenciesSet = [
  {
    value: "EUR",
    label: "Select",
  },
  {
    value: "USD",
    label: "Manager",
  },
  {
    value: "BTC",
    label: "worker",
  },
  {
    value: "JPY",
    label: "Helper",
  },
];
const currencieses = [
  {
    value: "USD",
    label: "Matru@123",
  },
  {
    value: "EUR",
    label: "Password",
  },
  {
    value: "BTC",
    label: "rajesh@123",
  },
  {
    value: "JPY",
    label: "smruti@123",
  },
];

const Fellows = () => {
  return (
    <>
      <div
        style={{
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            marginTop: 35,
            display: "flex",
            marginLeft: 10,
            flexWrap: "wrap",
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker label="Select year" />
            </DemoContainer>
          </LocalizationProvider>

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Text name="Select manager" currencies={currencies} />
            <Text name="Select manager-type" currencies={currenciesSet} />
            <Text name="Select passcode" currencies={currencieses} />
            <Text name="Select District" currencies={currencies} />
            <Text name="Select state" currencies={currencies} />
          </div>
          <div style={{ marginTop: 17, flexWrap: "wrap" }}>
            <Stack spacing={2} direction="row">
              <Button variant="contained" style={{ width: 250 }}>
                Filter
              </Button>
            </Stack>
          </div>
        </div>
        {/* <div style={{ display: "flex" }}>
          <div style={{ marginTop: -40, marginLeft: 10, flexWrap: "wrap" }}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Search Fellow"
              style={{ width: "1100px" }}
            />
          </div>
          <div style={{ marginTop: -30, marginLeft: 10 }}>
            <Stack spacing={2} direction="row">
              <Button variant="contained">Filter</Button>
            </Stack>
          </div>
        </div> */}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Number Name="Number of Active Fellows" count={34} />
        <Number Name="Number of Students" count={467} />
        <Number Name="Number of atudents baceline" count={84} />
        <Number Name="Number of Drop-out" count={468} />
      </div>
      <Fields />
 
      <Links />
    </>
  );
};

export default Fellows;

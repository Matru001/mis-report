import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Text from "../components/Text";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Logo from "../components/Logo";
import Links from "../components/Links";
const currencies = [
  {
    value: "EUR",
    label: "None",
  },
  {
    value: "None",
    label: "Suman",
  },
  {
    value: "BTC",
    label: "Rajesh",
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
const currenciesget = [
  {
    value: "USD",
    label: "January",
  },
  {
    value: "EUR",
    label: "None",
  },
  {
    value: "BTC",
    label: "February",
  },
  {
    value: "JPY",
    label: "March",
  },
  {
    value: "JPY",
    label: "April",
  },
  {
    value: "JPY",
    label: "May",
  },
  {
    value: "JPY",
    label: "June",
  },
  {
    value: "JPY",
    label: "July",
  },
  {
    value: "JPY",
    label: "August",
  },
  {
    value: "JPY",
    label: "September",
  },
  {
    value: "JPY",
    label: "Oct",
  },
  {
    value: "JPY",
    label: "Novemember",
  },
  {
    value: "JPY",
    label: "December",
  },
];

const TimeSpendDetails = () => {
  return (
    <>
      <div
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
          marginTop: 40,
          marginLeft: 15,
          marginRight: 15,
          display: "flex",
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
            {/* <Text name="Teachers Name" currencies={currencies} /> */}
            <Text name="Select month" currencies={currenciesget} />
          </div>
        </div>
        <div style={{ marginTop: 50, marginLeft: 10 }}>
          <Stack spacing={2} direction="row">
            <Button variant="contained" style={{ width: 250 }}>
              Filter
            </Button>
          </Stack>
        </div>
      </div>
      <div style={{ flexWrap: "wrap" }}>
        <Logo />
        <Links/>
      </div>
    </>
  );
};

export default TimeSpendDetails;

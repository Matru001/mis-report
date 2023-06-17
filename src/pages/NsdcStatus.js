import React from "react";
import Select from "../components/Select";
import Text from "../components/Text";
import Filter from "../components/Filter";
import { TextField } from "@mui/material";
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

const NsdcStatus = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          boxShadow:
            "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
          marginTop: 30,
          marginLeft: 15,
          marginRight: 15,
          paddingBottom: 50,
          flexWrap: "wrap",
        }}
      >
        <Select year="Select Year" />
        <div style={{ display: "flex", marginTop: 35, flexWrap: "wrap" }}>
          <Text name="Select manager" currencies={currencies} />
          <Text name="Select manager-type" currencies={currenciesSet} />
          <Text name="Select passcode" currencies={currencieses} />
          <Text name="Hello world" currencies={currencies} />
          <Text name="Hello world" currencies={currencies} />
          <Filter
            details="Get Details"
            style={{ width: 250, marginTop: -30 }}
          />
        </div>
      </div>
      <div style={{ marginTop: -80, marginLeft: 25, display: "flex" }}>
        <TextField
          id="outlined-basic"
          label="Search Fellow"
          variant="outlined"
          style={{ width: "1100px" }}
        />
        <Filter
          details="Search"
          style={{ marginTop: -40, background: "#8261DA" }}
        />
      </div>
      <Logo />
      <Links/>
    </>
  );
};

export default NsdcStatus;

import React from "react";
import Select1 from "../components/Select1";
// import TrainingDetails from './TrainingDetails'
// import NsdcStatus from './NsdcStatus'
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

const PgeStudents = () => {
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
          paddingBottom: 110,
          flexWrap: "wrap",
        }}
      >
        <Select1 />
        <div style={{ marginTop: 35, display: "flex", width: 20 }}>
          <Text name="Select manager" currencies={currencies} />
          <Text name="Select manager-type" currencies={currenciesSet} />
          <Text name="Select passcode" currencies={currencieses} />
          <Text name="Select Teacher" currencies={currencies} />
        </div>
        <div style={{ display: "flex", marginTop: 110, marginLeft: -205 }}>
          <Text name="Select block" currencies={currencies} />
          <Text name="Select District" currencies={currencies} />
          <Filter details="Filter" style={{ width: 250, marginTop: -30 }} />
        </div>

        <div
          style={{
            marginTop: 20,
            display: "flex",
            width: -20,
            marginLeft: 5,
          }}
        >
          <Text name="Class" currencies={currencies} />
          <Text name="Gender" currencies={currencies} />
          <Text name="Manager" currencies={currencies} />
          <Text name="Select manager" currencies={currencies} />
          <Text name="cource" currencies={currencies} />
          {/* <Text name="Hello world" currencies={currencies} /> */}
          <div style={{ marginTop: -35 }}>
            <Select1 />
          </div>
        </div>
        <Filter details="Filter" style={{ width: 250, marginTop: -45 }} />
        <div style={{ marginTop: 30, marginLeft: 10, display: "flex" }}>
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
      </div>
      <Logo />
      <Links />
    </>
  );
};

export default PgeStudents;

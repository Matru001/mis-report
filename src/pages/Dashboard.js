import React from "react";
// import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import PeopleIcon from "@mui/icons-material/People";
import "./Dashboard.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Card from "../components/Card";
import { red } from "@mui/material/colors";
import Links from "../components/Links";
const Femalefellows = "http://localhost:3000/home/fellows";



const Dashboard = () => {

  
  return (
    <>
      <div className="content">
        <div>
          <h2>Fellow Performance</h2>
        </div>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker label="Select year" />
            </DemoContainer>
          </LocalizationProvider>
        </div>
      </div>
      <div className="container">
        <Card name="Youth trained" number={200} Icon={PeopleIcon} />
        <a
          style={{ textDecoration: "none" }}
          href={Femalefellows}
          target="femailfellowship"
        >
          <Card
            name="Female fellows"
            number={500}
            Icon={PeopleIcon}
            style={{ backgroundColor: "orange" }}
          />
        </a>

        <a
          style={{ textDecoration: "none" }}
          href={Femalefellows}
          target="female"
        >
          <Card name="Fellowship compeleted" number={700} Icon={PeopleIcon} />
        </a>
        <a
          style={{ textDecoration: "none" }}
          href={Femalefellows}
          target="Active fellows"
        >
          <Card name="Active fellows" number={107} Icon={PeopleIcon} />
        </a>
        <a
          style={{ textDecoration: "none" }}
          href={Femalefellows}
          target="fellowdropout"
        >
          <Card name="Fellowship Dropout" number={1000} Icon={PeopleIcon} />
        </a>
        <Card name="Avrage score" number={400} Icon={PeopleIcon} />
        <Card name="Endline user" number={190} Icon={PeopleIcon} />
        <Card name="Endline score" number={547} Icon={PeopleIcon} />
        <Card
          name="NSDC certified"
          number={1000}
          Icon={PeopleIcon}
          style={{ backgroundColor: "red" }}
        />
        <Card name="Schools" number={100} Icon={PeopleIcon} />
      </div>
      <div className="content">
        <div>
          <h2>Student Performance</h2>
        </div>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker label="Select year" />
            </DemoContainer>
          </LocalizationProvider>
        </div>
      </div>
      <div className="container">
        <Card name="Fellows" number={200} Icon={PeopleIcon} />
        <Card name="Students" number={500} Icon={PeopleIcon} />
        <Card name="Schools" number={340} Icon={PeopleIcon} />
        <Card name="Schools" number={107} Icon={PeopleIcon} />
        <Card name="Schools" number={470} Icon={PeopleIcon} />
        <Card name="Schools" number={478} Icon={PeopleIcon} />
        <Card name="Schools" number={850} Icon={PeopleIcon} />
        <Card name="Schools" number={745} Icon={PeopleIcon} />
        <Card name="Schools" number={499} Icon={PeopleIcon} />
        <Card name="Schools" number={231} Icon={PeopleIcon} />
      </div>
      <Links />
    </>
  );
};

export default Dashboard;

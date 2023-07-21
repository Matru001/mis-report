import React, { useEffect, useState } from "react";
// import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import PeopleIcon from "@mui/icons-material/People";
import "./Dashboard.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Card from "../components/Card";
// import { red } from "@mui/material/colors";
// import Text from "../components/Text";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import DateRangeIcon from "@mui/icons-material/DateRange";
import Links from "../components/Links";
import Api from "../envirment/Api";
// import Select1 from "../components/Select1";
const Femalefellows = "http://localhost:3000/home/fellows";
const Dashboard = () => {
  const [year, setYear] = useState("2023");
  const [totalUsersCount, setTotalUsersCount] = useState({});
  const [femaleCount, setFemaleCount] = useState({});
  console.log("femaleCount---->", femaleCount);
  const [fellowsCount, setFellowsCount] = useState({});
  const [fellowshipCompleted, setFellowshipCompleted] = useState({});
  const [dropout, setDropout] = useState({});
  const [avrage, setAvrage] = useState({});
  const [endlineUser, setEndlineUser] = useState({});
  const [nsdcCertified, setNsdcCertified] = useState({});
  const [avgGradUser, setAvgGradUser] = useState({});
  const [avgEndline, setAvgEndline] = useState({});
  const [totalTime, SettotalTime] = useState({});

  const handleCallAPI = async () => {
    try {
      const response = await Api.get(`getDashboardCounts/${year}`);
      if (response.data.status === "success") {
        setTotalUsersCount(response.data.resData);
        setFemaleCount(response.data.resData);
        setFellowsCount(response.data.resData);
        setFellowshipCompleted(response.data.resData);
        setDropout(response.data.resData);
        setAvrage(response.data.resData);
        setEndlineUser(response.data.resData);
        setNsdcCertified(response.data.resData);
        setAvgGradUser(response.data.resData);
        setAvgEndline(response.data.resData);
        SettotalTime(response.data.resData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectChange = (event) => {
    setYear(event.target.value);
  };

  useEffect(() => {
    handleCallAPI();
  }, [year]);
   
  return (
    <>
      <div className="content">
        <div>
          <h2>Fellow Performance</h2>
        </div>

        <div>
          <Box
            sx={{
              minWidth: 180,
              marginTop: 5.5,
              marginLeft: 2,
              flexWrap: "wrap",
            }}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Year</InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={year}
                label="Year"
                onChange={handleSelectChange}
              >
                <MenuItem value={2021}>2021</MenuItem>
                <MenuItem value={2022}>2022</MenuItem>
                <MenuItem value={2023}>2023</MenuItem>
                <MenuItem value={2024}>2024</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <div className="container">
        <Card
          name="Active Users"
          number={totalUsersCount.activeUsersCount || 0}
          Icon={PeopleIcon}
         
        />
        <a
          style={{ textDecoration: "none" }}
          href={Femalefellows}
          target="femailfellowship"
        >
          <Card
            name="Female fellows"
            number={femaleCount.femaleUsersCount || 0}
            Icon={PeopleIcon}
            style={{ backgroundColor: "orange" }}
          />
        </a>

        <a
          style={{ textDecoration: "none" }}
          href={Femalefellows}
          target="female"
        >
          <Card
            name="Total Users"
            number={fellowshipCompleted.totalUsersCount || 0}
            Icon={PeopleIcon}
            style={{ backgroundColor: "teal" }}
          />
        </a>
        <a
          style={{ textDecoration: "none" }}
          href={Femalefellows}
          target="Active fellows"
        >
          <Card
            name="Inactive fellows"
            number={fellowsCount.inactiveUsersCount || 0}
            Icon={PeopleIcon}
            style={{ backgroundColor: "green" }}
          />
        </a>
        <a
          style={{ textDecoration: "none" }}
          href={Femalefellows}
          target="fellowdropout"
        >
          <Card
            name="Dropout Users"
            number={dropout.dropoutUsersCount || 0}
            Icon={PeopleIcon}
            style={{ backgroundColor: "blue" }}
          />
        </a>
        <Card
          name="Avrage score"
          number={avrage.avgBaselineMarks || 0}
          Icon={PeopleIcon}
          style={{ backgroundColor: "teal" }}
        />
        <Card
          name="Endline user"
          number={endlineUser.endlineUsersCount || 0}
          Icon={PeopleIcon}
          style={{ backgroundColor: "red" }}
        />
        <Card
          name="Endline score"
          number={avgEndline.avgEndlineMarks || 0}
          Icon={PeopleIcon}
        />
        <Card
          name="NSDC certified"
          number={nsdcCertified.nsdcCertifiedUsersCount || 0}
          Icon={PeopleIcon}
          style={{ backgroundColor: "yellow" }}
        />
        <Card
          name="Timespend"
          number={avgGradUser.totalTimeSpent || 0}
          Icon={PeopleIcon}
          style={{ backgroundColor: "red" }}
        />
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
        <Card
          name="Total Students"
          number={avgGradUser.avgGradUserTimeSpent || 0}
          Icon={PeopleIcon}
          style={{ backgroundColor: "teal" }}
        />
        <Card
          name="Total Girls Students"
          number={avgEndline.avgEndlineMarks || 0}
          Icon={PeopleIcon}
          style={{ backgroundColor: "purple" }}
        />
        <Card
          name="Total Primary Students"
          number={fellowsCount.activeFellowsCount || 0}
          Icon={PeopleIcon}
          style={{ backgroundColor: "orange" }}
        />
        <Card
          name="Pre-Primary Students"
          number={totalTime.totalTimeSpent || 0}
          Icon={PeopleIcon}
        />
        <Card
          name="Appeared Baceline"
          number={470}
          Icon={PeopleIcon}
          style={{ backgroundColor: "red" }}
        />
        <Card
          name="Appeared Endline"
          number={478}
          Icon={PeopleIcon}
          style={{ backgroundColor: "blue" }}
        />
        <Card
          name="Schools"
          number={499}
          Icon={PeopleIcon}
          style={{ backgroundColor: "red" }}
        />
        <Card
          name="Schools"
          number={231}
          Icon={PeopleIcon}
          style={{ backgroundColor: "yellow" }}
        />
      </div>
      <Links />
    </>
  );
};

export default Dashboard;

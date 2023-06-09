import React, { useState } from "react";
import Text from "../components/Text";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Logo from "../components/Logo";
import Links from "../components/Links";
import Api from "../envirment/Api";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const selectManager = [
  {
    value: "None",
    label: "None",
  },
  {
    value: "suman",
    label: "suman",
  },

  {
    value: "guru@thinkzone.in",
    label: "guru@thinkzone.in",
  },
  {
    value: "Guru",
    label: "Guru",
  },
];


const passcodeArray = [
  {
    value: "Matru@123",
    label: "Matru@123",
  },
  {
    value: "Password",
    label: "Password",
  },
  {
    value: "rajesh@123",
    label: "rajesh@123",
  },
  {
    value: "GURUBBS0323",
    label: "GURUBBS0323",
  },
];

const year = [
  {
    value: "2023",
    label: "2023",
  },
  {
    value: "2024",
    label: "2024",
  },
  {
    value: "2025",
    label: "2025",
  },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#5e72e4",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const TrainingDetails = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [manager, setManager] = useState("");
  const [passcode, setPasscode] = useState("");
  const [user, setUser] = useState([]);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleManagerChange = (event) => {
    setManager(event.target.value);
  };

  const handlePasscodeChange = (event) => {
    setPasscode(event.target.value);
  };
  

  const getfellowsallstatusdata = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      yearSelect: selectedYear,
      "managername": "",
      passcode: passcode,
    };

    try {
      const res = await Api.post(`getfellowsallstatusdata`, body, config);
      // console.log("response---->", res.status);
      if (res.status === 200) {
        setUser(res.data);
        console.log("res------>", res);
      }
    } catch (error) {}
  };

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
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Text
              name="Select year"
              currencies={year}
              handleChange={handleYearChange}
            />
            <Text
              name="Select manager name"
              currencies={selectManager}
              handleChange={handleManagerChange}
            />

            <Text
              name="Select passcode"
              currencies={passcodeArray}
              handleChange={handlePasscodeChange}
            />
            {/* <Text name="Teachers Name" currencies={currencies} /> */}
          </div>
        </div>
        <div style={{ marginTop: 50, marginLeft: 10 }}>
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              onClick={getfellowsallstatusdata}
              style={{ width: 250 }}
            >
              Filter
            </Button>
          </Stack>
        </div>
      </div>
      <div style={{ flexWrap: "wrap" }}>
        {user && user.length > 0 && (
          <div>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 70, marginTop: 3 }}
                aria-label="customized table"
              >
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Serial No</StyledTableCell>
                    <StyledTableCell align="right">UserId</StyledTableCell>
                    <StyledTableCell align="right">username</StyledTableCell>
                    <StyledTableCell align="right">
                      BaselineCount
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      EndlineCount
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      PPT Master Topics count
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      ppt_trans_topics_count
                    </StyledTableCell>
                    <StyledTableCell align="right">ppt_mark</StyledTableCell>
                    <StyledTableCell align="right">ppt_status</StyledTableCell>
                    <StyledTableCell align="right">
                      training_master_topics_count
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      training_trans_topics_count
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {user.map((row, index) => (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        {index + 1}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.userid}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.username}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.baseline_count}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.endline_count}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.ppt_master_topics_count}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.ppt_trans_topics_count}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.ppt_mark}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.ppt_status}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.training_master_topics_count}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.training_trans_topics_count}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        )}
        <Logo />

        <Links />
      </div>
    </>
  );
};

export default TrainingDetails;

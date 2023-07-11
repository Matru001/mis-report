import React, { useState } from "react";
import Select from "../components/Select1";
import Text from "../components/Text";
import Filter from "../components/Filter";
import { TextField } from "@mui/material";
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

const managerIdSet = [
  {
    value: "guru@thinkzone.in",
    label: "guru@thinkzone.in",
  },
  {
    value: "matruprasad530@gmil.com",
    label: "matruprasad530@gmil.com",
  },
  {
    value: "rajesh530@gmil.com",
    label: "rajesh530@gmil.com",
  },
  {
    value: "aman530@gmil.com",
    label: "aman530@gmil.com",
  },
];

const managerTypeSet = [
  {
    value: "Select",
    label: "Select",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "worker",
    label: "worker",
  },
  {
    value: "Helper",
    label: "Helper",
  },
];

const passcodeSet = [
  {
    value: "Matru@123",
    label: "Matru@123",
  },
  {
    value: "GURUBBS0323",
    label: "GURUBBS0323",
  },
  {
    value: "rajesh@123",
    label: "rajesh@123",
  },
  {
    value: "smruti@123",
    label: "smruti@123",
  },
];

const FilterSet = [
  {
    value: "filter",
    label: "filter",
  },
];

const year = [
  {
    value: "2023",
    label: "2023",
  },
  {
    value: "2022",
    label: "2022",
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

const Fln = () => {
  const [user, setUser] = useState([]);
  const [managerId, setManagerId] = useState("");
  const [managerType, setManagerType] = useState("");
  const [passcode, setPasscode] = useState("");
  const [filter, setFilter] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const handleManagerIdChange = (event) => {
    setManagerId(event.target.value);
  };

  const handleManagerTypeChange = (event) => {
    setManagerType(event.target.value);
  };

  const handlePasscodeChange = (event) => {
    setPasscode(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const getflnassessdetails = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      year: selectedYear,
      flag: filter,
      passcode: passcode,
      managerid: managerId,
    };

    try {
      const res = await Api.post("getflnassessdetails", body, config);
      setUser(res.data.data); // Update the user state with the data from the API response
      console.log("response---->", res.data.data); // Log the response data
    } catch (error) {
      console.log(error);
    }
  };

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
        <div style={{ display: "flex", marginTop: 35, flexWrap: "wrap" }}>
          <Text
            name="Select managerId"
            currencies={managerIdSet}
            handleChange={handleManagerIdChange}
          />
          <Text
            name="Select year"
            currencies={year}
            handleChange={handleYearChange}
          />
          <Text
            name="Select manager-type"
            currencies={managerTypeSet}
            handleChange={handleManagerTypeChange}
          />
          <Text
            name="Select passcode"
            currencies={passcodeSet}
            handleChange={handlePasscodeChange}
          />
          <Text
            name="FIlter"
            currencies={FilterSet}
            handleChange={handleFilterChange}
          />
          <Filter
            details="Get Details"
            handleClick={getflnassessdetails}
            style={{ width: 250, marginTop: -30 }}
          />
        </div>

        <div style={{ marginTop: 20, marginLeft: 10, display: "flex" }}>
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

      <div>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 70, marginTop: 3 }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>Serial No</StyledTableCell>
                <StyledTableCell align="right">Manager Id</StyledTableCell>
                <StyledTableCell align="right">User ID</StyledTableCell>
                <StyledTableCell align="right">User Name</StyledTableCell>
                <StyledTableCell align="right">Student Id</StyledTableCell>
                <StyledTableCell align="right">Student name</StyledTableCell>
                <StyledTableCell align="right">Student Status</StyledTableCell>
                <StyledTableCell align="right"> Class</StyledTableCell>
                <StyledTableCell align="right">
                  
                  BaselineMathsMarks
                </StyledTableCell>
                <StyledTableCell align="right">
                  BaselineEnglishMarks
                </StyledTableCell>
                <StyledTableCell align="right">
                  
                  BaselineOdiaMarks
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.managerid}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.userid}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.username}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.studentid}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.studentname}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.studentstatus}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.class}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.baselineMathsMarks}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.baselineEnglishMarks}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.baselineOdiaMarks}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <Logo />
      <Links />
    </>
  );
};

export default Fln;

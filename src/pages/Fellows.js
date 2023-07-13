import React, { useEffect, useState } from "react";
import Text from "../components/Text";
import TablePagination from "@mui/material/TablePagination";


import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// import { TextField } from "@mui/material";
// import {
//   AccessibleSharp,
//   ClassSharp,
//   CloseFullscreen,
//   Height,
// } from "@mui/icons-material";
import Number from "../components/Number";
// import Fields from "../components/Fields";
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
const managerSet = [
  {
    value: "none",
    label: "none",
  },
  {
    value: "guru@thinkzone.in",
    label: "guru@thinkzone.in",
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

const managerTypeSet = [
  {
    value: "none",
    label: "none",
  },
  {
    value: "fellow",
    label: "fellow",
  },
  {
    value: "BTC",
    label: "worker",
  },
  {
    value: "Helper",
    label: "Helper",
  },
];

const passcodeSet = [
  {
    value: "none",
    label: "none",
  },
  {
    value: "GURUBBS0323",
    label: "GURUBBS0323",
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

const year = [
  {
    value: "none",
    label: "none",
  },
  {
    value: "2022",
    label: "2022",
  },

  {
    value: "2023",
    label: "2023",
  },
  {
    value: "2024",
    label: "2024",
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

const Fellows = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [manager, setManager] = useState("");
  const [user, setUser] = useState([]);
  // console.log("user---->", user);
  const [managerType, setManagerType] = useState("");
  const [passcode, setPasscode] = useState("");

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleManagerChange = (event) => {
    setManager(event.target.value);
  };
  const handleManagerTypeChange = (event) => {
    setManagerType(event.target.value);
  };

  const handlePasscodeChange = (event) => {
    setPasscode(event.target.value);
  };

  const sortteacher = async () => {
    if (selectedYear === "" || manager === "" || passcode === "") {
      return alert("Please select some filters to preceed");
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      year: selectedYear,
      passcode: passcode,
      managerid: manager,
      managerType: managerType,
    };

    try {
      const res = await Api.post(
        `sortteacher`,
        body, // Added body to the request
        config // Added config to the request
      );
      // console.log("response---->", res.status);
      if (res.status === 200) {
        setUser(res.data);
        console.log("data-------->", res.status);
      }
    } catch (error) {}
  };
 
const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Text
              name="Select year"
              currencies={year}
              handleChange={handleYearChange}
            />
            <Text
              name="Select manager"
              currencies={managerSet}
              handleChange={handleManagerChange}
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
            
          </div>
          <div style={{ marginTop: 17, flexWrap: "wrap" }}>
            <Stack spacing={2} direction="row">
              <Button
                variant="contained"
                onClick={sortteacher}
                style={{ width: 250 }}
              >
                Filter
              </Button>
            </Stack>
          </div>
        </div>
        {/* <div style={{ display: "flex",  flexWrap: "wrap" }}>
          <div style={{ marginTop: 30, flex: "1 1 100%" }}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Search Fellow"
              style={{ width: "50%", height: 120 }}
            />
          </div>
          <div style={{ marginTop: 40, marginLeft: 10, flex: "1 1 auto",  }}>
            <Stack spacing={2} direction="row">
              <Button variant="contained" style={{ width: 250, marginBottom:100 }}>
                Filter
              </Button>
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
                  <StyledTableCell align="right">Manager Name</StyledTableCell>
                  <StyledTableCell align="right">User Name</StyledTableCell>
                  <StyledTableCell align="right">User Id</StyledTableCell>
                  <StyledTableCell align="right">User Type</StyledTableCell>
                  <StyledTableCell align="right">Reg-Date</StyledTableCell>
                  <StyledTableCell align="right">Status</StyledTableCell>
                  <StyledTableCell align="right">Contact No</StyledTableCell>
                  <StyledTableCell align="right">Guardian Name</StyledTableCell>
                  <StyledTableCell align="right">D.O.B</StyledTableCell>
                  <StyledTableCell align="right">AADHAR NO</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {user.map((row, index) => (
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      {index + 1}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.managername}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.username}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.userid}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.usertype}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.createdon}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.status}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.contactnumber}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.guardianname}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.dob}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.aadhaar}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>

              <TablePagination
      component="div"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
          </TableContainer>
        </div>
      )}

      <Links />
    </>
  );
};

export default Fellows;

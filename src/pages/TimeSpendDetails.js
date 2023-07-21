import React, { useState } from "react";
import Text from "../components/Text";
import TablePagination from "@mui/material/TablePagination";
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
    value: "Suman",
    label: "Suman",
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

const selectManagerType = [
  {
    value: "manager",
    label: "manager",
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
const monthArray = [
  {
    value: "January",
    label: "January",
  },
  {
    value: "February",
    label: "February",
  },
  {
    value: "March",
    label: "March",
  },
  {
    value: "April",
    label: "April",
  },
  {
    value: "May",
    label: "May",
  },
  {
    value: "June",
    label: "June",
  },
  {
    value: "July",
    label: "July",
  },
  {
    value: "August",
    label: "August",
  },
  {
    value: "September",
    label: "September",
  },
  {
    value: "Oct",
    label: "Oct",
  },
  {
    value: "Novemember",
    label: "Novemember",
  },
  {
    value: "December",
    label: "December",
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

const TimeSpendDetails = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [manager, setManager] = useState("");
  const [passcode, setPasscode] = useState("");
  const [month, setMonth] = useState("");
    const [page, setPage] = React.useState(0);
    const [totalDataLength, setTotalDataLength] = useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
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
  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const getTimeSpentReportManagerwise = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      year: selectedYear,
      managerid: manager,
      passcode: passcode,
    };
  
    try {
      const res = await Api.post(
        `getTimeSpentReportManagerwise`,
        body,
        config
      );
      if (res.status === 200) {
        setUser(res.data);
        setTotalDataLength(res.data.length);
      
      }
    } catch (error) {}
  };
 

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };
  return (
    <>
      <div
        style={{
          marginTop: "20px",
          padding: "30px 20px",
          display: "grid",
          boxShadow:
            "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
        }}
      >
        <Text
          name="Select year"
          currencies={year}
          handleChange={handleYearChange}
        />
        <Text
          name="Select manager"
          currencies={selectManager}
          handleChange={handleManagerChange}
        />

        <Text
          name="Select passcode"
          currencies={passcodeArray}
          handleChange={handlePasscodeChange}
        />
        <Text
          name="Select month"
          currencies={monthArray}
          handleChange={handleMonthChange}
        />

        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            onClick={getTimeSpentReportManagerwise}
            style={{ width: 250, height: 40, marginTop: 10 }}
          >
            Filter
          </Button>
        </Stack>
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
                    <StyledTableCell align="right">PPT</StyledTableCell>
                    <StyledTableCell align="right">Training</StyledTableCell>
                    <StyledTableCell align="right">Pgeactivity</StyledTableCell>
                    <StyledTableCell align="right">Eceactivity</StyledTableCell>
                    <StyledTableCell align="right">FLN</StyledTableCell>
                    <StyledTableCell align="right">Reading</StyledTableCell>
                    <StyledTableCell align="right">TotalTime</StyledTableCell>
                    <StyledTableCell align="right">Training</StyledTableCell>
                    <StyledTableCell align="right">UserName</StyledTableCell>
                    <StyledTableCell align="right">Year</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {user
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        {index + 1}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.ppt}</StyledTableCell>
                      <StyledTableCell align="right">
                        {row.training}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.pgeactivity}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.eceactivity}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.fln}</StyledTableCell>
                      <StyledTableCell align="right">
                        {row.reading}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.totalTime}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.training}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.username}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.year}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
           
              <TablePagination
                component="div"
                count={totalDataLength}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableContainer>
          </div>
        )}
        {/* <Logo /> */}

        <Links />
      </div>
    </>
  );
};

export default TimeSpendDetails;

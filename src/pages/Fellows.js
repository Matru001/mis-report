import React, { useEffect, useState } from "react";
import Text from "../components/Text";
import TablePagination from "@mui/material/TablePagination";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Number from "../components/Number";
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
import Logo from "../components/Logo";
import ExportCsv from "../downloads/ExportCsv";

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
    value: "nischintakoili4@thinkzone.in",
    label: "nischintakoili4@thinkzone.in",
  },

  {
    value: "RajeshSwain",
    label: "RajeshSwain",
  },
  {
    value: "aman",
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
    value: "none",
    label: "none",
  },
  {
    value: "GURUBBS0323",
    label: "GURUBBS0323",
  },
  {
    value: "BHAGYAN0223",
    label: "BHAGYAN0223",
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
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Fellows = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [manager, setManager] = useState("");
  const [data, setData] = useState([]);
  const [managerType, setManagerType] = useState("");
  const [passcode, setPasscode] = useState("");
  const [page, setPage] = React.useState(0);
  const [totalDataLength, setTotalDataLength] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
      const res = await Api.post(`sortteacher`, body, config);
      if (res.status === 200) {
        setData(res.data);
        setTotalDataLength(res.data.length);
      }
    } catch (error) {}
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const fileName = "fellow";

  const xlData = data.map((x) => {
    console.log("x-->", x);
    const { userid, username, ...exceptBoth } = x;
    return exceptBoth;
  });

  return (
    <>
      <div>
        <div
          style={{
            marginTop: "20px",
            padding: "30px 20px",
            display: "grid",
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
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              onClick={sortteacher}
              style={{ width: 250, height: 40, marginTop: 5 }}
            >
              Filter
            </Button>
          </Stack>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
        }}
      >
        <Number Name="Number of Active Fellows" count={34} />
        <Number Name="Number of Students" count={467} />
        <Number Name="Number of atudents baceline" count={84} />
        <Number Name="Number of Drop-out" count={468} />
      </div>

      {data && data.length > 0 && (
        <div style={{ padding: "30px 20px", width: "100%" }}>
          <TableContainer
            component={Paper}
            sx={{
              marginTop: 3,
              width: "100%",
              borderRadius: "6px",
              maxHeight: "800px",
            }}
          >
            <Table aria-label="customized table">
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
                {data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
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
              count={totalDataLength}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
        </div>
      )}

      {data && data.length > 0 ? null : <Logo />}

      <Links />

      {/* <ExportCsv csvData={xlData} fileName={fileName} /> */}
      <ExportCsv/>
    </>
  );
};

export default Fellows;

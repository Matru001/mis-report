import React, { useEffect, useState } from "react";
import Select from "../components/Select1";
import Text from "../components/Text";
import Filter from "../components/Filter";
import { TextField } from "@mui/material";
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
import TablePagination from "@mui/material/TablePagination";
const managerSet = [
  {
    value: "None",
    label: "None",
  },
  {
    value: "guru@thinkzone.in",
    label: "guru@thinkzone.in",
  },
  {
    value: "Rajesh",
    label: "Rajesh",
  },
  {
    value: "aman",
    label: "aman",
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


const NsdcStatus = () => {
  const [manager, setManager] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [managerType, setManagerType] = useState("");
  const [passcode, setPasscode] = useState("");
    const [page, setPage] = React.useState(0);
    const [totalDataLength, setTotalDataLength] = useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [user, setUser] = useState([]);

  // useEffect(() => {
  //   handleCallAPI();
  // });

  const handleCallAPI = async () => {
    try {
      const response = await Api.get(
        `https://thinkzone.co/thinkzone/getmanagerwisefellowsnsdcdata/${selectedYear}/${manager}/${passcode}/0/0/0/1`
      );
      if (response.data.status === "success") {
        console.log("data------------->", response);
        setUser(response.data.data)
         setTotalDataLength(response.data.data.length);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleManagerChange = (event) => {
    setManager(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleManagerTypeChange = (event) => {
    setManagerType(event.target.value);
  };

  const handlePasscodeChange = (event) => {
    setPasscode(event.target.value);
  };

  const handleChangePage = (event,newPage) => {
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
          name="Select manager-type"
          currencies={managerTypeSet}
          handleChange={handleManagerTypeChange}
        />
        <Text
          name="Select manager"
          currencies={managerSet}
          handleChange={handleManagerChange}
        />

        <Text
          name="Select passcode"
          currencies={passcodeSet}
          handleChange={handlePasscodeChange}
        />

        <Filter
          details="Get Details"
          handleClick={handleCallAPI}
          style={{ width: 250 }}
        />
      </div>

      <div style={{ marginTop: 20, marginLeft: 10, display: "flex" }}>
        <TextField
          id="outlined-basic"
          label="Search Fellow"
          variant="outlined"
          style={{ width: "1100px" }}
        />
        <Filter details="Search" style={{ background: "#8261DA" }} />
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
                  <StyledTableCell align="right">Manager Id</StyledTableCell>
                  <StyledTableCell align="right">manager name</StyledTableCell>
                  <StyledTableCell align="right">Passcode</StyledTableCell>
                  <StyledTableCell align="right">nsdc date</StyledTableCell>
                  <StyledTableCell align="right">nsdc marks</StyledTableCell>
                  <StyledTableCell align="right">nsdc Status</StyledTableCell>
                  <StyledTableCell align="right"> userId</StyledTableCell>
                  <StyledTableCell align="right">UserName</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                
                {user
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      {index + 1}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.managerid}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.managername}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.passcode}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.nsdc_date}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.nsdc_mark}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.nsdc_status}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.userid}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.username}
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
    </>
  );
};

export default NsdcStatus;

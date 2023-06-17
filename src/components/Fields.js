import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

function createData(name, calories, fat, carbs, protein,data,x,y,z,s,m) {
  return { name, calories, fat, carbs, protein,data,x,y,z,s,m };
}

const rows = [
  createData("1", "Suman", 6.0, 24, 4.0,56,65,76,34,55,43),
  createData("2", "tapas", 9.0, 37, 4.3,65,56,56,0,44,76),
  createData("3", "Rajesh", 16.0, 24, 6.0,98,23,69,76,33,87),
  createData("4", "Aman", 3.7, 67, 4.3,28,96,56,76,98,12),
  createData("5", "Jyoti", 16.0, 49, 3.9,137,67,34,23,33,11),
  
];

const Fields = () => {
  return (
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
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                <StyledTableCell align="right">{row.data}</StyledTableCell>
                <StyledTableCell align="right">{row.x}</StyledTableCell>
                <StyledTableCell align="right">{row.y}</StyledTableCell>
                <StyledTableCell align="right">{row.z}</StyledTableCell>
                <StyledTableCell align="right">{row.s}</StyledTableCell>
                <StyledTableCell align="right">{row.m}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Fields;

// - IMPORTS -
import * as React from "react";

// Importing Material UI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Admin() {
  return (
    <div>
      <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>
      </header>
      {/* Table displaying items in cart */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Time Order Placed</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              key={1}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">Chris</TableCell>
              <TableCell align="right">4/5/2018 at 4:45pm</TableCell>
              <TableCell align="right">Pickup</TableCell>
              <TableCell align="right">$39.79</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Admin;

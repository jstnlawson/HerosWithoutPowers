// - IMPORTS -
import * as React from "react";
// Importing Redux hook for accessing cart state
import { useSelector } from "react-redux";
// Importing Axios
import axios from 'axios';
// Importing Material UI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Checkout() {

    // Function to add pizza to orders table with POST request
    const handleCheckoutButton = () => {
        console.log("Checkout button clicked!");

        // axios POST request
    }



  // Configuring Redux store 'cart' state
  const cart = useSelector((store) => store.cart);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Pizza Name</TableCell>
              <TableCell align="right">Cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((pizza) => (
              <TableRow>
                key={pizza.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                <TableCell component="th" scope="row">
                  {pizza.name}
                </TableCell>
                <TableCell align="right">${pizza.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Total amount */}
      <p>Total: </p>
      {/* Checkout button */}
      <Button onClick={handleCheckoutButton} variant="contained">CHECKOUT</Button>
    </div>
  );
}

export default Checkout;

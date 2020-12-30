import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    // minWidth: 650
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Asbestors", 15900, 6.0, 24, 4.0),
  createData("Coal", 237000, 9.0, 37, 4.3),
  createData("Zinc", 26200, 16.0, 24, 6.0),
  createData("Steel", 30500, 3.7, 67, 4.3),
  createData("Platinum", 35600, 16.0, 49, 3.9)
];

const SimpleTable = () => {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table
        className={classes.table}
        style={{ tableLayout: "fixed" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">Tonnes</TableCell>
            <TableCell align="right">Customers&nbsp;</TableCell>
            <TableCell align="right">Average&nbsp;</TableCell>
            <TableCell align="right">Retention&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;
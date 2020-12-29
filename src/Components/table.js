import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import '../index.css';

import { SettingsInputComponentSharp } from '@material-ui/icons';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#115293',
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
    
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
const useStyles = makeStyles({
  table: {
    width: 100,
    minWidth: 650,
   boxShadow: 50
    
  },
 
});

function createData(division, schemes, location, responsible) {
  return { division, schemes, location, responsible };
}

const rows = [
  createData('Ghaziabad', 59, '--', '--'),
  createData('Vikaspuri', 27, '--', '--'),
  createData('Karol Bagh', 22, '--', '--'),
  createData('Noida', 37, '--', '--'),
  createData('New Delhi', 36, '--', '--'),
  createData('Old Delhi', 59, '--', '--'),
  createData('Nizamuddin', 48, '--', '--'),
  createData('Gurgaon', 55, '--', '--'),
  createData('Faridabad', 48, '--', '--'),
  createData('Ghaziabad', 24, '--', '--'),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.table} >
      <Table className={classes.table} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <StyledTableCell><strong>Division</strong></StyledTableCell>
            <StyledTableCell align="center"><strong>Schemes</strong></StyledTableCell>
            <StyledTableCell align="center"><strong>Location</strong></StyledTableCell>
            <StyledTableCell align="center"><strong>Responsible</strong></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.division}>
              <TableCell component="th" scope="row">
                {row.division}
              </TableCell>
              <StyledTableCell align="center">{row.schemes}</StyledTableCell>
              <StyledTableCell align="center">{row.responsible}</StyledTableCell>
              <StyledTableCell align="center">{row.location}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

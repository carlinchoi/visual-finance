import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${theme.breakpoints.up('sm')} th`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${theme.breakpoints.up('sm')} td`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));

function createData(name, value, shares, invested) {
  const gains = value - invested;
  const allocation = ((value / invested) * 100).toFixed(2);
  return { name, value, gains, allocation, shares, invested };
}

const rows = [
  createData('Microsoft', 17554, 8.3, 10000),
  createData('Apple', 15000, 6.5, 12000),
  createData('Google', 22000, 10.0, 20000),
  createData('Amazon', 18000, 7.2, 16000),
  createData('Facebook', 13000, 5.8, 11000)
];

const StockPorfolioPage = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card sx={{ minWidth: 100 }}>
            <CardContent>
              <Typography variant="h3" gutterBottom>
                Total Value
              </Typography>
              <Typography variant="h1">$82,554</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ minWidth: 100 }}>
            <CardContent>
              <Typography variant="h3" gutterBottom>
                # of Stocks
              </Typography>
              <Typography variant="h1">37</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Add space between the two grid containers */}
      <div style={{ marginTop: '20px' }}></div>

      <Grid container>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Value</StyledTableCell>
                <StyledTableCell align="right">Gain / Return</StyledTableCell>
                <StyledTableCell align="right">Allocation %</StyledTableCell>
                <StyledTableCell align="right">Shares</StyledTableCell>
                <StyledTableCell align="right">Invested</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.value}</StyledTableCell>
                  <StyledTableCell align="right">{row.gains}</StyledTableCell>
                  <StyledTableCell align="right">{row.allocation}%</StyledTableCell>
                  <StyledTableCell align="right">{row.shares}</StyledTableCell>
                  <StyledTableCell align="right">{row.invested}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </div>
  );
};

export default StockPorfolioPage;

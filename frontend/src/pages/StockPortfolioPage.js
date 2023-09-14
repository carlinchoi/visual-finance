import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid, Paper, TableSortLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chart from 'react-apexcharts';

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
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover
  },
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));

function createData(name, value, shares, invested) {
  const gains = value - invested;
  return { name, value, gains, shares, invested };
}

const initialRows = [
  createData('Microsoft', 17554, 8.3, 10000),
  createData('Apple', 15000, 6.5, 12000),
  createData('Google', 22000, 10.0, 20000),
  createData('Amazon', 18000, 7.2, 16000),
  createData('Facebook', 13000, 5.8, 11000)
];

const StockPorfolioPage = () => {
  const [rows, setRows] = useState(initialRows);
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortedColumn, setSortedColumn] = useState(null);
  const [donutChartData, setDonutChartData] = useState([]);

  useEffect(() => {
    // Calculate the total portfolio value
    const totalValue = rows.reduce((total, row) => total + row.value, 0);

    // Calculate the correct allocation percentage
    const updatedRows = rows.map((row) => {
      const allocation = ((row.value / totalValue) * 100).toFixed(2);
      return { ...row, allocation };
    });

    setRows(updatedRows);

    // Calculate data for the donut chart
    const donutData = updatedRows.map((row) => ({
      name: row.name,
      data: parseFloat(row.allocation) // Convert to a floating-point number
    }));

    setDonutChartData(donutData);
  }, [rows]);

  const handleSort = (column) => {
    const isAsc = sortedColumn === column && sortOrder === 'asc';
    const newSortOrder = isAsc ? 'desc' : 'asc';

    setSortedColumn(column);
    setSortOrder(newSortOrder);

    const sortedRows = [...rows].sort((a, b) => {
      if (column === 'name') {
        return isAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      } else {
        return isAsc ? a[column] - b[column] : b[column] - a[column];
      }
    });

    setRows(sortedRows);
  };

  const options = {
    chart: {
      type: 'donut'
    },
    labels: donutChartData.map((data) => data.name),
    colors: ['#FF5733', '#FFC300', '#4CAF50', '#2196F3', '#9C27B0'],
    legend: {
      show: true,
      position: 'bottom'
    },
    title: {
      text: 'Porfolio Allocation',
      align: 'center',
      style: {
        fontSize: '18px',
        fontWeight: 'bold'
      }
    }
  };

  return (
    <div>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={5}>
          <Card>
            <CardContent>
              <Typography variant="h3" gutterBottom>
                Total Value
              </Typography>
              <Typography variant="h1">${rows.reduce((total, row) => total + row.value, 0)}</Typography>
            </CardContent>
          </Card>
          <Card sx={{ marginTop: '2%' }}>
            <CardContent>
              <Typography variant="h3" gutterBottom>
                # of Stocks
              </Typography>
              <Typography variant="h1">{rows.length}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Chart
            options={options}
            series={donutChartData.map((data) => data.data)}
            labels={donutChartData.map((data) => data.name)}
            type="donut"
            width={700}
            height={500}
          />
        </Grid>
      </Grid>

      <div style={{ marginTop: '20px' }}></div>

      <Grid container>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead style={{ backgroundColor: '#E3F5FF' }}>
              <TableRow>
                <StyledTableCell>
                  <TableSortLabel active={sortedColumn === 'name'} direction={sortOrder} onClick={() => handleSort('name')}>
                    Name
                  </TableSortLabel>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <TableSortLabel active={sortedColumn === 'value'} direction={sortOrder} onClick={() => handleSort('value')}>
                    Current Value
                  </TableSortLabel>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <TableSortLabel active={sortedColumn === 'gains'} direction={sortOrder} onClick={() => handleSort('gains')}>
                    Gain / Return
                  </TableSortLabel>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <TableSortLabel active={sortedColumn === 'allocation'} direction={sortOrder} onClick={() => handleSort('allocation')}>
                    Allocation %
                  </TableSortLabel>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <TableSortLabel active={sortedColumn === 'shares'} direction={sortOrder} onClick={() => handleSort('shares')}>
                    Shares
                  </TableSortLabel>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <TableSortLabel active={sortedColumn === 'invested'} direction={sortOrder} onClick={() => handleSort('invested')}>
                    Invested
                  </TableSortLabel>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">${row.value}</StyledTableCell>
                  <StyledTableCell align="right">{row.gains}</StyledTableCell>
                  <StyledTableCell align="right">{row.allocation}%</StyledTableCell>
                  <StyledTableCell align="right">{row.shares}</StyledTableCell>
                  <StyledTableCell align="right">${row.invested}</StyledTableCell>
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

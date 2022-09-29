import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow, { tableRowClasses } from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { convertToObject } from 'typescript';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    ['&:nth-of-type(odd)']: {
        backgroundColor: 'red',
        ':hover': {
            backgroundColor: alpha(theme.palette.error.light,1)
        }
    },
    '&:nth-of-type(even)': {
        backgroundColor: 'green',
        ':hover': {
            backgroundColor: alpha(theme.palette.success.light,1)
        }
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    date: string,
    cash_Tourney: string,
    buyIn: number,
    cashOut: number,
    time: number,
    gameType: string,
) {
    return { date, cash_Tourney, buyIn, cashOut, time, gameType };
}

const rows = [
    createData("09/22/22", "Cash", 50, 100, 5, "Hold'Em"),
    createData("09/22/22", "Cash", 50, 100, 5, "Hold'Em"),
    createData("09/22/22", "Cash", 50, 100, 5, "Hold'Em"),
    createData("09/22/22", "Cash", 50, 100, 5, "Hold'Em"),
    createData("09/22/22", "Cash", 50, 100, 5, "Hold'Em"),
    createData("09/22/22", "Cash", 50, 100, 5, "Hold'Em"),
    createData("09/22/22", "Cash", 50, 100, 5, "Hold'Em"),
    createData("09/22/22", "Cash", 50, 100, 5, "Hold'Em"),
    createData("09/22/22", "Cash", 50, 100, 5, "Hold'Em"),
];

export default function DataTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Date</StyledTableCell>
                        <StyledTableCell align="right">Cash or Tournament</StyledTableCell>
                        <StyledTableCell align="right">Buy In</StyledTableCell>
                        <StyledTableCell align="right">Cash Out</StyledTableCell>
                        <StyledTableCell align="right">Time Played (hours)</StyledTableCell>
                        <StyledTableCell align="right">Game Type</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.date} style={{cursor: 'pointer'}}>
                            <TableCell component="th" scope="row" style={{ color: 'white'}}>
                                {row.date}
                            </TableCell>
                            <TableCell align="center" style={{color: 'white'}}>{row.cash_Tourney}</TableCell>
                            <StyledTableCell align="center" style={{ color: 'white' }}>{row.buyIn}</StyledTableCell>
                            <StyledTableCell align="center" style={{ color: 'white' }}>{row.cashOut}</StyledTableCell>
                            <StyledTableCell align="center" style={{ color: 'white' }}>{row.time}</StyledTableCell>
                            <StyledTableCell align="center" style={{ color: 'white' }}>{row.gameType}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

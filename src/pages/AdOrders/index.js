import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Box,
    TextField,
    Autocomplete,
    Button,
    Typography,
    Chip,
} from '@mui/material';

import { useState } from 'react';

function AdOrder() {
    const [selectedMentee, setSelectedMentee] = useState(null);

    const orders = [
        {
            id: 1,
            amount: '$ 250',
            email: 'john@example.com',
            point: '+ 20 point',
            time: '31/10/2003:01:01',
            status: 'Success',
        },
        {
            id: 2,
            amount: '$ 250',
            email: 'john@example.com',
            point: '+ 20 point',
            time: '31/10/2003:01:01',
            status: 'Fail',
        },
        {
            id: 3,
            amount: '$ 250',
            email: 'john@example.com',
            point: '+ 20 point',
            time: '31/10/2003:01:01',
            status: 'Fail',
        },
        {
            id: 4,
            amount: '$ 250',
            email: 'john@example.com',
            point: '+ 20 point',
            time: '31/10/2003:01:01',
            status: 'Success',
        },
        {
            id: 5,
            amount: '$ 250',
            email: 'john@example.com',
            point: '+ 20 point',
            time: '31/10/2003:01:01',
            status: 'Success',
        },
    ];

    const status = ['Success', 'Fail'];

    const handleRowClick = (mentee) => {
        setSelectedMentee(mentee);
    };

    const handleCloseModal = () => {
        setSelectedMentee(null);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end', gap: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, paddingRight: 2 }}>
                <TextField id="outlined-basic" label="Email..." variant="outlined" size="small" />
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={status}
                    sx={{ width: 200 }}
                    renderInput={(params) => <TextField {...params} label="Status" />}
                    size="small"
                />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'end',
                        justifyContent: 'center',
                        gap: 2,
                        border: '1px solid #ccc',
                        borderRadius: 2,
                        padding: 2,
                        mt: 2,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography>Start date</Typography>
                        <TextField id="outlined-basic" variant="outlined" size="small" type="date" />
                    </Box>
                    <Typography>to</Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography>End date</Typography>
                        <TextField id="outlined-basic" variant="outlined" size="small" type="date" />
                    </Box>
                </Box>
                <Button variant="contained" size="medium">
                    Search
                </Button>
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                ID
                            </TableCell>
                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                Amount
                            </TableCell>
                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                Point
                            </TableCell>
                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                Email
                            </TableCell>
                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                Transaction Time
                            </TableCell>
                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                Status
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow
                                key={order.id}
                                sx={{
                                    '&:last-child td, &:last-child th': { border: 0 },
                                    '&:hover': {
                                        cursor: 'pointer',
                                    },
                                }}
                                onClick={() => handleRowClick(order)}
                            >
                                <TableCell component="th" scope="row">
                                    {order.id}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {order.amount}
                                </TableCell>
                                <TableCell align="left">{order.point}</TableCell>
                                <TableCell align="left">{order.email}</TableCell>
                                <TableCell align="left">{order.time}</TableCell>
                                <TableCell align="left">
                                    <Chip
                                        label={order.status}
                                        color={order.status === 'Success' ? 'success' : 'error'}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default AdOrder;

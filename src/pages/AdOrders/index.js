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

import { useEffect, useState } from 'react';
import TransactionAPI from '~/API/TransactionAPI';

function AdOrder() {
    const [selectedMentee, setSelectedMentee] = useState(null);
    const [orders, setOrders] = useState([]);
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(null);
    const [sortAmount, setSortAmount] = useState(null);
    const [sortPoint, setSortPoint] = useState(null);
    const [sortCreatedDate, setSortCreatedDate] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const params = {
                email: email,
                sortAmount: sortAmount,
                sortPoint: sortPoint,
                sortCreatedDate: sortCreatedDate,
                status: status,
                page: 1,
                limit: 10,
            };
            console.log(params);
            const ordersData = await TransactionAPI.getAllTransactionForAdmin(params);
            setOrders(ordersData.listResult);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSearch = () => {
        fetchData();
    };

    const handleRowClick = (mentee) => {
        setSelectedMentee(mentee);
    };

    const handleCloseModal = () => {
        setSelectedMentee(null);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end', gap: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, paddingRight: 2 }}>
                <TextField
                    id="outlined-basic"
                    label="Email..."
                    variant="outlined"
                    size="small"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={['Success', 'Failed']}
                    sx={{ width: 200 }}
                    value={status}
                    onChange={(event, newValue) => setStatus(newValue)}
                    renderInput={(params) => <TextField {...params} label="Status" />}
                    size="small"
                />
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={['asc', 'desc']}
                    sx={{ width: 200 }}
                    value={sortAmount}
                    onChange={(event, newValue) => setSortAmount(newValue)}
                    renderInput={(params) => <TextField {...params} label="Sort by amount" />}
                    size="small"
                />
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={['asc', 'desc']}
                    sx={{ width: 200 }}
                    value={sortPoint}
                    onChange={(event, newValue) => setSortPoint(newValue)}
                    renderInput={(params) => <TextField {...params} label="Sort by points" />}
                    size="small"
                />
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={['asc', 'desc']}
                    sx={{ width: 200 }}
                    value={sortCreatedDate}
                    onChange={(event, newValue) => setSortCreatedDate(newValue)}
                    renderInput={(params) => <TextField {...params} label="Sort by createdDate" />}
                    size="small"
                />
                <Button variant="contained" size="medium" onClick={handleSearch}>
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
                        {orders !== null ? (
                            orders.map((order) => (
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
                                    <TableCell align="left">{order.points}</TableCell>
                                    <TableCell align="left">{order.account.email}</TableCell>
                                    <TableCell align="left">{order.createdDate}</TableCell>
                                    <TableCell align="left">
                                        <Chip
                                            label={order.status}
                                            color={order.status === 'Success' ? 'success' : 'error'}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <div></div>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default AdOrder;

import {
    Typography,
    Container,
    Tab,
    Tabs,
    Box,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip,
    Modal,
    Divider,
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import PaymentIcon from '@mui/icons-material/Payment';
import SchoolIcon from '@mui/icons-material/School';

import { useState } from 'react';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function StudentHistory() {
    const [value, setValue] = useState(0);
    const [selectedMentee, setSelectedMentee] = useState(null);

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
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('31/10/2003:01:01', 'cf430f53-7f36-4591-b727-3fbbfd4a7da4', '+ 150 point', 'Complete'),
        createData('31/10/2003:01:01', 'cf430f53-7f36-4591-b727-3fbbfd4a7da4', '- 150 point', 'Error'),
        createData('31/10/2003:01:01', 'cf430f53-7f36-4591-b727-3fbbfd4a7da4', '+ 150 point', 'In Progress'),
        createData('31/10/2003:01:01', 'cf430f53-7f36-4591-b727-3fbbfd4a7da4', '- 150 point', 'Complete'),
        createData('31/10/2003:01:01', 'cf430f53-7f36-4591-b727-3fbbfd4a7da4', '+ 150 point', 'Complete'),
    ];

    const applys = [
        createData('31/10/2003:01:01', 'cf430f53-7f36-4591-b727-3fbbfd4a7da4', '+ 150 point', 'Approve'),
        createData('31/10/2003:01:01', 'cf430f53-7f36-4591-b727-3fbbfd4a7da4', '- 150 point', 'Approve'),
        createData('31/10/2003:01:01', 'cf430f53-7f36-4591-b727-3fbbfd4a7da4', '+ 150 point', 'In Progress'),
        createData('31/10/2003:01:01', 'cf430f53-7f36-4591-b727-3fbbfd4a7da4', '- 150 point', 'Reject'),
        createData('31/10/2003:01:01', 'cf430f53-7f36-4591-b727-3fbbfd4a7da4', '+ 150 point', 'Reject'),
    ];

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleRowClick = (mentee) => {
        setSelectedMentee(mentee);
    };

    const handleCloseModal = () => {
        setSelectedMentee(null);
    };

    return (
        <Container id="companies" sx={{ py: { xs: 8, sm: 16 }, padding: { lg: 16 } }}>
            <Typography variant="h4" sx={{ mb: { xs: 2, sm: 4 } }}>
                History
            </Typography>
            <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
                <Tab icon={<PaymentIcon />} label="PAYMENTS" />
                <Tab icon={<SchoolIcon />} label="APPLYS" />
            </Tabs>
            <CustomTabPanel value={value} index={0}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Transaction Time</StyledTableCell>
                                <StyledTableCell align="left">Receipt No.</StyledTableCell>
                                <StyledTableCell align="left">Point</StyledTableCell>
                                <StyledTableCell align="left">Status</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">{row.calories}</StyledTableCell>
                                    <StyledTableCell align="left">{row.fat}</StyledTableCell>
                                    <StyledTableCell align="left">
                                        <Chip
                                            label={row.carbs}
                                            sx={{
                                                backgroundColor:
                                                    row.carbs === 'Complete'
                                                        ? 'success.main'
                                                        : row.carbs === 'In Progress'
                                                        ? 'info.main'
                                                        : row.carbs === 'Error'
                                                        ? 'error.main'
                                                        : 'default.main',
                                                color: 'white',
                                            }}
                                        />
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="left">Send Day</StyledTableCell>
                                <StyledTableCell align="left">Mentor</StyledTableCell>
                                <StyledTableCell align="left">Company</StyledTableCell>
                                <StyledTableCell align="left">Status</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {applys.map((apply) => (
                                <StyledTableRow
                                    key={apply.name}
                                    onClick={() => handleRowClick(apply)}
                                    sx={{
                                        '&:last-child td, &:last-child th': { border: 0 },
                                        '&:hover': {
                                            cursor: 'pointer',
                                        },
                                    }}
                                >
                                    <StyledTableCell component="th" scope="row">
                                        {apply.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">Nguyen Thien Thanh</StyledTableCell>
                                    <StyledTableCell align="left">Apple</StyledTableCell>
                                    <StyledTableCell align="left">
                                        <Chip
                                            label={apply.carbs}
                                            sx={{
                                                backgroundColor:
                                                    apply.carbs === 'Approve'
                                                        ? 'success.main'
                                                        : apply.carbs === 'In Progress'
                                                        ? 'info.main'
                                                        : apply.carbs === 'Reject'
                                                        ? 'error.main'
                                                        : 'default.main',
                                                color: 'white',
                                            }}
                                        />
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CustomTabPanel>
            <Modal open={Boolean(selectedMentee)} onClose={handleCloseModal}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 'fit-content',
                        bgcolor: '#f5f5f5',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                        textAlign: 'left',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 2,
                        }}
                    >
                        <Typography variant="h3">Message</Typography>
                        <Box sx={{ border: '2px solid #ccc', padding: 2, borderRadius: 3 }}>
                            <Typography>
                                Passionate about technology and its social impact. Over 10 years experience delivering
                                successful products in healthcare, eCommerce, digital media and international
                                fundraising. Strong focus on product, user-centricity, UX and lean processes. Interested
                                in Zen and Stoic philosophy. Enjoy deep thinking and deep work.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </Container>
    );
}

export default StudentHistory;

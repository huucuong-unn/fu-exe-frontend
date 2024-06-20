import * as React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Switch,
    Box,
    FormControlLabel,
    TextField,
    Autocomplete,
    Button,
    Modal,
    Typography,
    Avatar,
} from '@mui/material';
import { styled } from '@mui/system';

const mentees = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
    { id: 3, name: 'Emily Johnson', email: 'emily.johnson@example.com', status: 'Active' },
    { id: 4, name: 'Michael Brown', email: 'michael.brown@example.com', status: 'Inactive' },
    { id: 5, name: 'Sarah Davis', email: 'sarah.davis@example.com', status: 'Active' },
    { id: 6, name: 'David Wilson', email: 'david.wilson@example.com', status: 'Inactive' },
    { id: 7, name: 'Laura Martinez', email: 'laura.martinez@example.com', status: 'Active' },
    { id: 8, name: 'James Anderson', email: 'james.anderson@example.com', status: 'Inactive' },
    { id: 9, name: 'Patricia Thomas', email: 'patricia.thomas@example.com', status: 'Active' },
    { id: 10, name: 'Robert Taylor', email: 'robert.taylor@example.com', status: 'Inactive' },
];

const AdMentee = () => {
    const IOSSwitch = styled((props) => <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />)(
        ({ theme }) => ({
            width: 42,
            height: 26,
            padding: 0,
            '& .MuiSwitch-switchBase': {
                padding: 0,
                margin: 2,
                transitionDuration: '300ms',
                '&.Mui-checked': {
                    transform: 'translateX(16px)',
                    color: '#fff',
                    '& + .MuiSwitch-track': {
                        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                        opacity: 1,
                        border: 0,
                    },
                    '&.Mui-disabled + .MuiSwitch-track': {
                        opacity: 0.5,
                    },
                },
                '&.Mui-focusVisible .MuiSwitch-thumb': {
                    color: '#33cf4d',
                    border: '6px solid #fff',
                },
                '&.Mui-disabled .MuiSwitch-thumb': {
                    color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
                },
            },
            '& .MuiSwitch-thumb': {
                boxSizing: 'border-box',
                width: 22,
                height: 22,
            },
            '& .MuiSwitch-track': {
                borderRadius: 26 / 2,
                backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
                opacity: 1,
                transition: theme.transitions.create(['background-color'], {
                    duration: 500,
                }),
            },
        }),
    );

    const [selectedMentee, setSelectedMentee] = React.useState(null);

    const handleRowClick = (mentee) => {
        setSelectedMentee(mentee);
    };

    const handleCloseModal = () => {
        setSelectedMentee(null);
    };

    const student = {
        name: 'Nguyễn Văn A',
        code: '2019601234',
        dob: '01/01/2001',
        phone: '0987654321',
        photo: 'https://example.com/avatar.jpg', // Đường dẫn ảnh đại diện
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end', gap: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, paddingRight: 2 }}>
                <TextField id="outlined-basic" label="Mentee name..." variant="outlined" size="small" />
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options=""
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Mentor name..." />}
                    size="small"
                />
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options=""
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Campain name..." />}
                    size="small"
                />
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
                                Name
                            </TableCell>
                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                Email
                            </TableCell>
                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                Mentor Name
                            </TableCell>
                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                Campaign
                            </TableCell>
                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                Status
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mentees.map((mentee) => (
                            <TableRow
                                key={mentee.id}
                                sx={{
                                    '&:last-child td, &:last-child th': { border: 0 },
                                    '&:hover': {
                                        cursor: 'pointer',
                                    },
                                }}
                                onClick={() => handleRowClick(mentee)}
                            >
                                <TableCell component="th" scope="row">
                                    {mentee.id}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {mentee.name}
                                </TableCell>
                                <TableCell align="left">{mentee.email}</TableCell>
                                <TableCell align="left">Le Cong Vine</TableCell>
                                <TableCell align="left">Spring Seasson 2024</TableCell>
                                <TableCell align="left">
                                    {' '}
                                    <FormControlLabel
                                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                        label="Active"
                                        onClick={(event) => event.stopPropagation()}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Modal open={Boolean(selectedMentee)} onClose={handleCloseModal}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 450,
                        bgcolor: '#f5f5f5',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        variant="h5"
                        component="h2"
                        gutterBottom
                        sx={{ color: '#fff', bgcolor: '#4e342e', p: 2, borderRadius: 1 }} // Tăng padding
                    >
                        STUDENT CARD
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: 4, marginTop: 3 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 2,
                            }}
                        >
                            <Avatar
                                alt={student.name}
                                src={student.photo}
                                sx={{ width: 100, height: 100, bgcolor: '#f48fb1' }} // Tăng kích thước Avatar
                            />
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#795548' }}>
                                ID: SE172594
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'start',
                                gap: 2,
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#795548', mr: 1 }}>
                                    Name:
                                </Typography>
                                <Typography variant="subtitle1" sx={{ color: '#795548' }}>
                                    Nguyen Thien Thanh
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#795548', mr: 1 }}>
                                    University:
                                </Typography>
                                <Typography variant="subtitle1" sx={{ color: '#795548' }}>
                                    FPT University
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#795548', mr: 1 }}>
                                    Date of birth:
                                </Typography>
                                <Typography variant="subtitle1" sx={{ color: '#795548' }}>
                                    31/10/2003
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#795548', mr: 1 }}>
                                    Phone number:
                                </Typography>
                                <Typography variant="subtitle1" sx={{ color: '#795548' }}>
                                    0967709009
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};

export default AdMentee;

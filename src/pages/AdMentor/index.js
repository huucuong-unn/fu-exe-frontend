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
    Chip,
} from '@mui/material';

import { styled } from '@mui/system';

import { useState } from 'react';

function AdMentor() {
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

    const [selectedMentee, setSelectedMentee] = useState(null);

    const handleRowClick = (mentee) => {
        setSelectedMentee(mentee);
    };

    const handleCloseModal = () => {
        setSelectedMentee(null);
    };

    const mentors = [
        { id: 1, name: 'John Doe', email: 'john@example.com', company: 'FPT Software', numberOfMentee: 2 },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', company: 'Apple', numberOfMentee: 2 },
        {
            id: 3,
            name: 'Emily Johnson',
            email: 'emily.johnson@example.com',
            company: 'FPT Software',
            numberOfMentee: 2,
        },
        { id: 4, name: 'Michael Brown', email: 'michael.brown@example.com', company: 'Apple', numberOfMentee: 2 },
        { id: 5, name: 'Sarah Davis', email: 'sarah.davis@example.com', company: 'FPT Software', numberOfMentee: 2 },
        { id: 6, name: 'David Wilson', email: 'david.wilson@example.com', company: 'Apple', numberOfMentee: 2 },
        {
            id: 7,
            name: 'Laura Martinez',
            email: 'laura.martinez@example.com',
            company: 'FPT Software',
            numberOfMentee: 2,
        },
        { id: 8, name: 'James Anderson', email: 'james.anderson@example.com', company: 'Apple', numberOfMentee: 2 },
        {
            id: 9,
            name: 'Patricia Thomas',
            email: 'patricia.thomas@example.com',
            company: 'FPT Software',
            numberOfMentee: 2,
        },
        { id: 10, name: 'Robert Taylor', email: 'robert.taylor@example.com', company: 'Apple', numberOfMentee: 2 },
    ];

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end', gap: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, paddingRight: 2 }}>
                <TextField id="outlined-basic" label="Mentor name..." variant="outlined" size="small" />
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options=""
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Company name..." />}
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
                                Company
                            </TableCell>
                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                Number of mentees
                            </TableCell>
                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                Status
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mentors.map((mentor) => (
                            <TableRow
                                key={mentor.id}
                                sx={{
                                    '&:last-child td, &:last-child th': { border: 0 },
                                    '&:hover': {
                                        cursor: 'pointer',
                                    },
                                }}
                                onClick={() => handleRowClick(mentor)}
                            >
                                <TableCell component="th" scope="row">
                                    {mentor.id}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {mentor.name}
                                </TableCell>
                                <TableCell align="left">{mentor.email}</TableCell>
                                <TableCell align="left">{mentor.company}</TableCell>
                                <TableCell align="left">{mentor.numberOfMentee}</TableCell>
                                <TableCell align="left">
                                    {' '}
                                    <FormControlLabel
                                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                        label="Active"
                                        onClick={(event) => event.stopPropagation()} // Ngăn chặn sự kiện click lan ra
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
                        width: 'fit-content',
                        bgcolor: '#f5f5f5',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                        textAlign: 'left',
                    }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 1,
                            }}
                        >
                            <Avatar sx={{ width: 180, height: 180, bgcolor: '#f48fb1' }} />
                            <Typography variant="h5">FPT Software</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'start',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'start',
                                    borderBottom: '2px solid black',
                                    marginBottom: 0.5,
                                }}
                            >
                                <Typography variant="h4">Nguyen Thien Thanh</Typography>
                                <Typography variant="h6">Software Engineer at Tortee</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                    Phone:
                                </Typography>
                                <Typography variant="subtitle1" sx={{ color: '#795548' }}>
                                    0967709009
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                    Email:
                                </Typography>
                                <Typography variant="subtitle1" sx={{ color: '#795548' }}>
                                    nguyenthanh311003@gmail.com
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                    Linkedin:
                                </Typography>
                                <Typography variant="subtitle1" sx={{ color: '#795548' }}>
                                    https://www.facebook.com/profile.php?id=100012330215584
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                    Facebook:
                                </Typography>
                                <Typography variant="subtitle1" sx={{ color: '#795548' }}>
                                    https://www.facebook.com/profile.php?id=100012330215584
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                    Google meet:
                                </Typography>
                                <Typography variant="subtitle1" sx={{ color: '#795548' }}>
                                    https://www.facebook.com/profile.php?id=100012330215584
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                    Require date:
                                </Typography>
                                <Typography variant="subtitle1" sx={{ color: '#795548' }}>
                                    Monday, Saturday, Sunday
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ marginTop: 2 }}>
                        <Box sx={{ borderBottom: '2px solid black' }}>
                            <Typography variant="h5">About</Typography>
                        </Box>
                        <Typography sx={{ marginTop: 1 }}>
                            Passionate about technology and its social impact. Over 10 years experience delivering
                            successful products in healthcare, eCommerce, digital media and international fundraising.
                            Strong focus on product, user-centricity, UX and lean processes. Interested in Zen and Stoic
                            philosophy. Enjoy deep thinking and deep work.
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: 3 }}>
                        <Box sx={{ borderBottom: '2px solid black' }}>
                            <Typography variant="h5">Skill</Typography>
                        </Box>
                        <Box
                            sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: 1, marginTop: 1 }}
                        >
                            <Chip label="Java" />
                            <Chip label="C#" />
                            <Chip label="Python" />
                        </Box>
                    </Box>
                    <Box sx={{ marginTop: 3 }}>
                        <Box sx={{ borderBottom: '2px solid black' }}>
                            <Typography variant="h5">Certificate</Typography>
                        </Box>
                        <Typography sx={{ marginTop: 1 }}>Master of Java Backend</Typography>
                        <Typography sx={{ marginTop: 1 }}>Master of React js</Typography>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
}

export default AdMentor;

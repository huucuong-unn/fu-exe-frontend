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
    TextField,
    Button,
    Modal,
    Typography,
    Avatar,
    Chip,
    FormControlLabel,
    Autocomplete,
    Card,
} from '@mui/material';

import { styled } from '@mui/system';

import { useState } from 'react';

function AdAccount() {
    const [selectedMentee, setSelectedMentee] = useState(null);
    const [selectedAccountPending, setSelectedAccountPending] = useState(null);

    const accounts = [
        {
            id: 1,
            username: 'thanhnt311003',
            email: 'nguyenthanh311003@gmail.com',
            role: 'admin',
            status: 'pending',
        },
        {
            id: 2,
            username: 'thanhnt311003',
            email: 'nguyenthanh311003@gmail.com',
            role: 'admin',
            status: 'pending',
        },
        {
            id: 3,
            username: 'thanhnt311003',
            email: 'nguyenthanh311003@gmail.com',
            role: 'mentor',
            status: 'pending',
        },
        {
            id: 4,
            username: 'thanhnt311003',
            email: 'nguyenthanh311003@gmail.com',
            role: 'mentee',
            status: 'active',
        },
        {
            id: 5,
            username: 'thanhnt311003',
            email: 'nguyenthanh311003@gmail.com',
            role: 'student',
            status: 'active',
        },
        {
            id: 6,
            username: 'thanhnt311003',
            email: 'nguyenthanh311003@gmail.com',
            role: 'company',
            status: 'active',
        },
    ];

    const status = ['Pending', 'Active', 'Inactive'];

    const Role = ['Admin', 'Company', 'Student', 'Mentor', 'Mentee'];

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

    const handleRowClick = (account) => {
        if (account.status === 'pending') {
            setSelectedAccountPending(account);
            return;
        }
        setSelectedMentee(account);
    };

    const handleCloseModal = () => {
        setSelectedMentee(null);
        setSelectedAccountPending(null);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end', gap: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, paddingRight: 2 }}>
                <TextField id="outlined-basic" label="Username..." variant="outlined" size="small" />
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={Role}
                    sx={{ width: 200 }}
                    renderInput={(params) => <TextField {...params} label="Role..." />}
                    size="small"
                />
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={status}
                    sx={{ width: 200 }}
                    renderInput={(params) => <TextField {...params} label="Status..." />}
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
                                Username
                            </TableCell>
                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                Email
                            </TableCell>
                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                Role
                            </TableCell>
                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                Status
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {accounts.map((account) => (
                            <TableRow
                                key={account.id}
                                sx={{
                                    '&:last-child td, &:last-child th': { border: 0 },
                                    '&:hover': {
                                        cursor: 'pointer',
                                    },
                                }}
                                onClick={() => handleRowClick(account)}
                            >
                                <TableCell component="th" scope="row">
                                    {account.id}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {account.username}
                                </TableCell>
                                <TableCell align="left">{account.email}</TableCell>
                                <TableCell align="left">
                                    <Chip
                                        label={
                                            account.role === 'admin'
                                                ? 'Admin'
                                                : account.role === 'company'
                                                ? 'Company'
                                                : account.role === 'mentee'
                                                ? 'Mentee'
                                                : account.role === 'student'
                                                ? 'Student'
                                                : account.role === 'mentor'
                                                ? 'Mentor'
                                                : 'default'
                                        }
                                        sx={{ mr: 2, mb: 1 }}
                                        onClick={() => {}}
                                        color={
                                            account.role === 'admin'
                                                ? 'error'
                                                : account.role === 'company'
                                                ? 'primary'
                                                : account.role === 'mentee'
                                                ? 'success'
                                                : account.role === 'student'
                                                ? 'warning'
                                                : account.role === 'mentor'
                                                ? 'info'
                                                : 'default'
                                        }
                                    />
                                </TableCell>
                                <TableCell align="left">
                                    {account.status === 'pending' ? (
                                        <Typography color="orange" fontWeight="bold">
                                            Pending
                                        </Typography>
                                    ) : (
                                        <FormControlLabel
                                            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                            label="Active"
                                            onClick={(event) => event.stopPropagation()}
                                        />
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Modal open={Boolean(selectedMentee)} onClose={handleCloseModal}>
                <Box
                    sx={{
                        position: 'relative',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 'fit-content',
                        bgcolor: '#f5f5f5',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                        textAlign: 'center',
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                        }}
                    >
                        Change role
                    </Button>
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
                        <Typography variant="h5">150 point</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mt: 2 }}>
                        <TextField
                            id="outlined-basic"
                            label="Username"
                            variant="outlined"
                            size="medium"
                            sx={{ flex: 1 }}
                            defaultValue="thanhnt311003"
                        />
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            size="medium"
                            defaultValue="nguyenthanh311003@gmail.com"
                            sx={{ flex: 1 }}
                        />
                    </Box>
                    <Chip label="Admin" sx={{ mt: 2 }} onClick={() => {}} color="error" />
                </Box>
            </Modal>
            <Modal open={Boolean(selectedAccountPending)} onClose={handleCloseModal}>
                <Box
                    sx={{
                        position: 'relative',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 700,
                        bgcolor: '#f5f5f5',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                        textAlign: 'center',
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                        }}
                    >
                        <Button variant="contained" color="success">
                            Approve
                        </Button>
                        <Button variant="contained" color="error">
                            Reject
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 1,
                        }}
                    >
                        <Avatar sx={{ width: 130, height: 130, bgcolor: '#f48fb1' }} />
                    </Box>
                    <Card
                        variant="outlined"
                        sx={{
                            p: 3,
                            height: 'fit-content',
                            width: '100%',
                            background: 'none',
                            mt: 2,
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                textAlign: 'left',
                                flexDirection: 'column',
                                alignItems: { md: 'left' },
                                gap: 2.5,
                            }}
                        >
                            <Box
                                sx={{
                                    marginLeft: 2,
                                    marginRight: 2,
                                    paddingBottom: 2,
                                    borderBottom: '1px dashed #e0e0e0',
                                    textAlign: 'center',
                                }}
                            >
                                <Typography color="text.primary" variant="body1" fontWeight="bold" fontSize={'24px'}>
                                    General information
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(3, 1fr)', // Tạo 3 cột với kích thước bằng nhau
                                    gap: 5,
                                    marginLeft: 2,
                                    marginRight: 2,
                                    paddingBottom: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: { md: 'center' },
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Typography color="gray" variant="h7">
                                        Username
                                    </Typography>
                                    <Typography color="black" variant="h7" fontWeight="bold">
                                        thanhnt311003
                                    </Typography>
                                </Box>
                                <Box
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: { md: 'center' },
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Typography color="gray" variant="h7">
                                        Email
                                    </Typography>
                                    <Typography color="black" variant="h7" fontWeight="bold">
                                        nguyenthanh311003@gmail.com
                                    </Typography>
                                </Box>
                                <Box
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: { md: 'center' },
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Typography color="gray" variant="h7">
                                        Company
                                    </Typography>
                                    <Typography color="black" variant="h7" fontWeight="bold">
                                        FPT Software
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Card>
                    <Card
                        variant="outlined"
                        sx={{
                            p: 3,
                            height: 'fit-content',
                            width: '100%',
                            background: 'none',
                            mt: 2,
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                textAlign: 'left',
                                flexDirection: 'column',
                                alignItems: { md: 'left' },
                                gap: 2.5,
                            }}
                        >
                            <Box
                                sx={{
                                    marginLeft: 2,
                                    marginRight: 2,
                                    paddingBottom: 2,
                                    borderBottom: '1px dashed #e0e0e0',
                                    textAlign: 'center',
                                }}
                            >
                                <Typography color="text.primary" variant="body1" fontWeight="bold" fontSize={'24px'}>
                                    About
                                </Typography>
                            </Box>
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography sx={{ width: '100%' }}>
                                    Passionate about technology and its social impact. Over 10 years experience
                                    delivering successful products in healthcare, eCommerce, digital media and
                                    international fundraising. Strong focus on product, user-centricity, UX and lean
                                    processes. Interested in Zen and Stoic philosophy. Enjoy deep thinking and deep
                                    work.
                                </Typography>
                            </Box>
                        </Box>
                    </Card>
                    <Card
                        variant="outlined"
                        sx={{
                            p: 3,
                            height: 'fit-content',
                            width: '100%',
                            background: 'none',
                            mt: 2,
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                textAlign: 'left',
                                flexDirection: 'column',
                                alignItems: { md: 'left' },
                                gap: 2.5,
                            }}
                        >
                            <Box
                                sx={{
                                    marginLeft: 2,
                                    marginRight: 2,
                                    paddingBottom: 2,
                                    borderBottom: '1px dashed #e0e0e0',
                                    textAlign: 'center',
                                }}
                            >
                                <Typography color="text.primary" variant="body1" fontWeight="bold" fontSize={'24px'}>
                                    Side information
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'start',
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                        Require date:
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ color: '#795548' }}>
                                        Monday, Saturday, Sunday
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
                            </Box>
                        </Box>
                    </Card>
                </Box>
            </Modal>
        </Box>
    );
}

export default AdAccount;

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
    Stack,
    Stepper,
    Step,
    StepLabel,
    Card,
    Autocomplete,
} from '@mui/material';

import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

import ApartmentIcon from '@mui/icons-material/Apartment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SchoolIcon from '@mui/icons-material/School';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

import { useEffect, useState } from 'react';

function AdCampaign() {
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

    const steps = ['Company Apply', 'Student Apply', 'Tranning', 'Close'];

    const status = ['Company Apply', 'Student Apply', 'Tranning', 'Close'];

    const [selectedMentee, setSelectedMentee] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isNameValid, setIsNameValid] = useState(true);
    const [isNumberOfSessionValid, setIsNumberOfSessionValid] = useState(true);
    const [isMinOnlineSessionValid, setIsMinOnlineSessionValid] = useState(true);
    const [isMinOfflineSessionValid, setIsMinOfflineSessionValid] = useState(true);
    const [isMinSessionDurationValid, setIsMinSessionDurationValid] = useState(true);

    const handleRowClick = (mentee) => {
        setSelectedMentee(mentee);
    };

    const handleCloseModal = () => {
        setSelectedMentee(null);
    };

    const handleOpenEditModal = () => {
        setIsEditModalOpen(true);
    };

    const handleCloseEditModal = () => {
        setIsEditModalOpen(false);
    };

    const handleOpenCreateModal = () => {
        setIsCreateModalOpen(true);
    };

    const handleCloseCreateModal = () => {
        setIsCreateModalOpen(false);
    };

    const campaigns = [
        {
            id: 1,
            name: 'Spring season',
            campaignDuration: '1/1/2024 - 1/12/2024',
            companyApplyDuration: '1/3/2024 - 1/6/2024',
            menteeApplyDuration: '1/6/2024 - 1/9/2024',
            tranningDuration: '1/9/2024 - 1/12/2024',
            status: 'companyApply',
        },
        {
            id: 2,
            name: 'Spring season',
            campaignDuration: '1/1/2024 - 1/12/2024',
            companyApplyDuration: '1/3/2024 - 1/6/2024',
            menteeApplyDuration: '1/6/2024 - 1/9/2024',
            tranningDuration: '1/9/2024 - 1/12/2024',
            status: 'menteeApply',
        },
        {
            id: 3,
            name: 'Spring season',
            campaignDuration: '1/1/2024 - 1/12/2024',
            companyApplyDuration: '1/3/2024 - 1/6/2024',
            menteeApplyDuration: '1/6/2024 - 1/9/2024',
            tranningDuration: '1/9/2024 - 1/12/2024',
            status: 'tranning',
        },
        {
            id: 4,
            name: 'Spring season',
            campaignDuration: '1/1/2024 - 1/12/2024',
            companyApplyDuration: '1/3/2024 - 1/6/2024',
            menteeApplyDuration: '1/6/2024 - 1/9/2024',
            tranningDuration: '1/9/2024 - 1/12/2024',
            status: 'close',
        },
    ];

    const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
        [`&.${stepConnectorClasses.alternativeLabel}`]: {
            top: 22,
        },
        [`&.${stepConnectorClasses.active}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
            },
        },
        [`&.${stepConnectorClasses.completed}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
            },
        },
        [`& .${stepConnectorClasses.line}`]: {
            height: 3,
            border: 0,
            backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
            borderRadius: 1,
        },
    }));

    const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        ...(ownerState.active && {
            backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
            boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
        }),
        ...(ownerState.completed && {
            backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        }),
    }));

    function ColorlibStepIcon(props) {
        const { active, completed, className } = props;

        const icons = {
            1: <ApartmentIcon />,
            2: <AccountCircleIcon />,
            3: <SchoolIcon />,
            4: <DoDisturbOnIcon />,
        };

        return (
            <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
                {icons[String(props.icon)]}
            </ColorlibStepIconRoot>
        );
    }

    ColorlibStepIcon.propTypes = {
        /**
         * Whether this step is active.
         * @default false
         */
        active: PropTypes.bool,
        className: PropTypes.string,
        /**
         * Mark the step as completed. Is passed to child components.
         * @default false
         */
        completed: PropTypes.bool,
        /**
         * The label displayed in the step icon.
         */
        icon: PropTypes.node,
    };

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const numberOfSession = event.target.numberOfSession.value;
        const minOnlineSession = event.target.minOnlineSession.value;
        const minOfflineSession = event.target.minOfflineSession.value;
        const minSessionDuration = event.target.minSessionDuration.value;

        const isNumberOfSessionPositive = /^[1-9]\d*$/.test(numberOfSession);
        const isMinOnlineSessionPositive = /^[1-9]\d*$/.test(minOnlineSession);
        const isMinOfflineSessionPositive = /^[1-9]\d*$/.test(minOfflineSession);
        const isMinSessionDurationPositive = /^[1-9]\d*$/.test(minSessionDuration);

        if (name.length < 5 || name.length > 50) {
            setIsNameValid(false);
        } else {
            setIsNameValid(true);
        }

        if (!isNumberOfSessionPositive) {
            setIsNumberOfSessionValid(false);
        } else {
            setIsNumberOfSessionValid(true);
        }

        if (!isMinOnlineSessionPositive) {
            setIsMinOnlineSessionValid(false);
        } else {
            setIsMinOnlineSessionValid(true);
        }

        if (!isMinOfflineSessionPositive) {
            setIsMinOfflineSessionValid(false);
        } else {
            setIsMinOfflineSessionValid(true);
        }

        if (!isMinSessionDurationPositive) {
            setIsMinSessionDurationValid(false);
        } else {
            setIsMinSessionDurationValid(true);
        }
    };

    useEffect(() => {
        console.log(isNameValid);
    }, [isNameValid]);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end', gap: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Button variant="contained" size="medium" onClick={handleOpenCreateModal}>
                    Create
                </Button>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, paddingRight: 2 }}>
                    <TextField id="outlined-basic" label="Mentor name..." variant="outlined" size="small" />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={status}
                        sx={{ width: '200px' }}
                        size="small"
                        renderInput={(params) => <TextField {...params} label="Status" />}
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
                                Campaign duration
                            </TableCell>
                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                Company apply duration
                            </TableCell>
                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                Mentee apply duration
                            </TableCell>
                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                Tranning duration
                            </TableCell>
                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                Status
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {campaigns.map((campaign) => (
                            <TableRow
                                key={campaign.id}
                                sx={{
                                    '&:last-child td, &:last-child th': { border: 0 },
                                    '&:hover': {
                                        cursor: 'pointer',
                                    },
                                }}
                                onClick={() => handleRowClick(campaign)}
                            >
                                <TableCell component="th" scope="row">
                                    {campaign.id}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {campaign.name}
                                </TableCell>
                                <TableCell align="left">{campaign.campaignDuration}</TableCell>
                                <TableCell align="left">{campaign.companyApplyDuration}</TableCell>
                                <TableCell align="left">{campaign.menteeApplyDuration}</TableCell>
                                <TableCell align="left">{campaign.tranningDuration}</TableCell>
                                <TableCell align="left">
                                    <Chip
                                        label={
                                            campaign.status === 'companyApply'
                                                ? 'Company apply'
                                                : campaign.status === 'menteeApply'
                                                ? 'Mentee Apply'
                                                : campaign.status === 'tranning'
                                                ? 'Tranning'
                                                : campaign.status === 'close'
                                                ? 'Close'
                                                : 'default'
                                        }
                                        sx={{ mr: 2, mb: 1 }}
                                        onClick={() => {}}
                                        color={
                                            campaign.status === 'companyApply'
                                                ? 'primary'
                                                : campaign.status === 'menteeApply'
                                                ? 'secondary'
                                                : campaign.status === 'tranning'
                                                ? 'success'
                                                : campaign.status === 'close'
                                                ? 'error'
                                                : 'default'
                                        }
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
                        textAlign: 'center',
                    }}
                >
                    <Button
                        sx={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            m: 2,
                        }}
                        variant="contained"
                        onClick={handleOpenEditModal} // Hoặc bất kỳ hàm xử lý nào bạn muốn
                    >
                        Edit
                    </Button>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 2,
                        }}
                    >
                        <Avatar sx={{ width: 150, height: 150, bgcolor: '#f48fb1' }} />
                        <Typography variant="h5">Spring Season 2024</Typography>
                        <Stack sx={{ width: '100%' }} spacing={4}>
                            <Stepper alternativeLabel activeStep={2} connector={<ColorlibConnector />}>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Stack>
                        <Card
                            variant="outlined"
                            sx={{
                                p: 3,
                                height: 'fit-content',
                                width: '100%',
                                background: 'none',
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
                                    <Typography
                                        color="text.primary"
                                        variant="body1"
                                        fontWeight="bold"
                                        fontSize={'24px'}
                                    >
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
                                            Campaign duration
                                        </Typography>
                                        <Typography color="black" variant="h7" fontWeight="bold">
                                            1/1/2024 - 1/12/2024
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
                                            Company apply duration
                                        </Typography>
                                        <Typography color="black" variant="h7" fontWeight="bold">
                                            1/3/2024 - 1/6/2024
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
                                            Mentee apply duration
                                        </Typography>
                                        <Typography color="black" variant="h7" fontWeight="bold">
                                            1/6/2024 - 1/9/2024
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
                                            Tranning duration
                                        </Typography>
                                        <Typography color="black" variant="h7" fontWeight="bold">
                                            1/9/2024 - 1/12/2024
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
                                            Number of mentors
                                        </Typography>
                                        <Typography color="black" variant="h7" fontWeight="bold">
                                            50
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
                                            Number of mentees
                                        </Typography>
                                        <Typography color="black" variant="h7" fontWeight="bold">
                                            100
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
                                            Number of session
                                        </Typography>
                                        <Typography color="black" variant="h7" fontWeight="bold">
                                            100
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
                                            Min online session
                                        </Typography>
                                        <Typography color="black" variant="h7" fontWeight="bold">
                                            100
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
                                            Min offline session
                                        </Typography>
                                        <Typography color="black" variant="h7" fontWeight="bold">
                                            100
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Card>
                    </Box>
                </Box>
            </Modal>
            <Modal open={isEditModalOpen} onClose={handleCloseEditModal}>
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
                    <Box pb={4}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 2,
                            }}
                        >
                            <Avatar sx={{ width: 150, height: 150, bgcolor: '#f48fb1' }} />
                            <Button
                                component="label"
                                role={undefined}
                                variant="contained"
                                tabIndex={-1}
                                startIcon={<CloudUploadIcon />}
                            >
                                Upload file
                                <VisuallyHiddenInput type="file" />
                            </Button>
                            <TextField id="outlined-basic" variant="outlined" label="Name" sx={{ flex: 1 }} />
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 2,
                                mt: 2,
                            }}
                        >
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                label="Number of session"
                                sx={{ flex: 1 }}
                            />
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                label="Min online session"
                                sx={{ flex: 1 }}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 2,
                                mt: 2,
                            }}
                        >
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                label="Min offline session"
                                sx={{ flex: 1 }}
                            />
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                label="Min session duration"
                                sx={{ flex: 1 }}
                            />
                        </Box>
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
                    </Box>
                    <Box sx={{ position: 'absolute', bottom: 10, right: 10, display: 'flex', gap: 2 }}>
                        <Button variant="outlined" onClick={handleCloseEditModal}>
                            Close
                        </Button>
                        <Button variant="contained">Save</Button>
                    </Box>
                </Box>
            </Modal>
            <Modal open={isCreateModalOpen} onClose={handleCloseCreateModal}>
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
                    component="form"
                    onSubmit={handleSubmit}
                >
                    <Box pb={4}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 2,
                            }}
                        >
                            <Avatar sx={{ width: 150, height: 150, bgcolor: '#f48fb1' }} />
                            <Button
                                component="label"
                                role={undefined}
                                variant="contained"
                                tabIndex={-1}
                                startIcon={<CloudUploadIcon />}
                            >
                                Upload file
                                <VisuallyHiddenInput type="file" />
                            </Button>
                            <TextField
                                id="name"
                                variant="outlined"
                                label="Name"
                                sx={{ flex: 1 }}
                                error={!isNameValid}
                                helperText={!isNameValid ? 'Name must be 5-50 characters long' : ''}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 2,
                                mt: 2,
                            }}
                        >
                            <TextField
                                id="numberOfSession"
                                variant="outlined"
                                label="Number of session"
                                sx={{ flex: 1 }}
                                error={!isNumberOfSessionValid}
                                helperText={!isNumberOfSessionValid ? 'Must be number' : ''}
                            />
                            <TextField
                                id="minOnlineSession"
                                variant="outlined"
                                label="Min online session"
                                sx={{ flex: 1 }}
                                error={!isMinOnlineSessionValid}
                                helperText={!isMinOnlineSessionValid ? 'Must be number' : ''}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 2,
                                mt: 2,
                            }}
                        >
                            <TextField
                                id="minOfflineSession"
                                variant="outlined"
                                label="Min offline session"
                                sx={{ flex: 1 }}
                                error={!isMinOfflineSessionValid}
                                helperText={!isMinOfflineSessionValid ? 'Must be number' : ''}
                            />
                            <TextField
                                id="minSessionDuration"
                                variant="outlined"
                                label="Min session duration"
                                sx={{ flex: 1 }}
                                error={!isMinSessionDurationValid}
                                helperText={!isMinSessionDurationValid ? 'Must be number' : ''}
                            />
                        </Box>
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
                    </Box>
                    <Box sx={{ position: 'absolute', bottom: 10, right: 10, display: 'flex', gap: 2 }}>
                        <Button variant="outlined" onClick={handleCloseEditModal}>
                            Close
                        </Button>
                        <Button variant="contained" type="submit">
                            Create
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
}

export default AdCampaign;

import {
    Container,
    Grid,
    Typography,
    Card,
    Box,
    Avatar,
    CardContent,
    Step,
    Stepper,
    StepLabel,
    Tab,
    Tabs,
    Stack,
    Button,
    Chip,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CampaignAPI from '~/API/CampaignAPI';

function CompaniesCampaignDetail() {
    const steps = ['Company Application', 'Mentee Application', 'Training', 'Completion'];
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const [value, setValue] = useState(0);
    const navigate = useNavigate();
    const { campaignId } = useParams();
    const [campaign, setCampaign] = useState({});

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleItemClick = (index, mentorId) => {
        setSelectedItemIndex(index);
        navigate(`/mentor/${mentorId}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCreateMentor = () => {
        navigate('/company/create-mentor-account');
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        const getById = async () => {
            try {
                const campaignData = await CampaignAPI.getById(campaignId);
                setCampaign(campaignData);
            } catch (error) {
                console.log(error);
            }
        };

        getById();
    }, [campaignId]);

    useEffect(() => {
        console.log(campaign);
    }, [campaign]);

    return (
        <Container id="mentors" sx={{ py: { xs: 8, sm: 16 }, padding: { lg: 16 } }}>
            <Grid container spacing={6}>
                <Grid item xs={12} md={12}>
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
                                flexDirection: { xs: 'column', md: 'row' },
                                alignItems: { md: 'center' },
                                gap: 2.5,
                            }}
                        >
                            <Box>
                                <Avatar alt="avatar image" src={campaign?.img} sx={{ width: 150, height: 150 }} />
                            </Box>
                            <Box sx={{ textTransform: 'none' }}>
                                <Typography color="text.primary" variant="body1" fontWeight="bold" fontSize={'24px'}>
                                    Spring Campaign 2024
                                </Typography>
                                <Typography color="text.secondary" variant="body2" sx={{ my: 1 }} fontSize={'16px'}>
                                    1/1/2024 - 1/7/2024
                                </Typography>
                                <CardContent></CardContent>
                            </Box>
                        </Box>
                        <Box sx={{ width: '100%', marginTop: 2 }}>
                            <Stepper activeStep={2} alternativeLabel sx={{ transform: 'scale(1.1)' }}>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
            <Box sx={{ width: '100%', marginTop: 2 }}>
                <Card
                    variant="outlined"
                    sx={{
                        p: 3,
                        height: 'fit-content',
                        width: '100%',
                        background: 'none',
                        paddingLeft: 0,
                        paddingRight: 0,
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
                                gap: 2, // Khoảng cách giữa các ô
                                marginLeft: 2,
                                marginRight: 2,
                                paddingBottom: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    textAlign: 'left',
                                    flexDirection: 'column',
                                    alignItems: { md: 'start' },
                                    justifyContent: 'left',
                                }}
                            >
                                <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: 1 }}>
                                    <Typography color="gray" variant="h7">
                                        Number of session
                                    </Typography>
                                </Box>
                                <Typography color="black" variant="h6" fontWeight="bold">
                                    10 sessions
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    textAlign: 'left',
                                    flexDirection: 'column',
                                    alignItems: { md: 'start' },
                                    justifyContent: 'left',
                                }}
                            >
                                <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: 1 }}>
                                    <Typography color="gray" variant="h7">
                                        Number of online session
                                    </Typography>
                                </Box>
                                <Typography color="black" variant="h6" fontWeight="bold">
                                    10 sessions
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    textAlign: 'left',
                                    flexDirection: 'column',
                                    alignItems: { md: 'start' },
                                    justifyContent: 'left',
                                }}
                            >
                                <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: 1 }}>
                                    <Typography color="gray" variant="h7">
                                        Number of offline session
                                    </Typography>
                                </Box>
                                <Typography color="black" variant="h6" fontWeight="bold">
                                    10 sessions
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    textAlign: 'left',
                                    flexDirection: 'column',
                                    alignItems: { md: 'start' },
                                    justifyContent: 'left',
                                }}
                            >
                                <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: 1 }}>
                                    <Typography color="gray" variant="h7">
                                        Min duration of session
                                    </Typography>
                                </Box>
                                <Typography color="black" variant="h6" fontWeight="bold">
                                    1 hour
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    textAlign: 'left',
                                    flexDirection: 'column',
                                    alignItems: { md: 'start' },
                                    justifyContent: 'left',
                                }}
                            >
                                <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: 1 }}>
                                    <Typography color="gray" variant="h7">
                                        Company apply date
                                    </Typography>
                                </Box>
                                <Typography color="black" variant="h6" fontWeight="bold">
                                    {new Date(campaign?.companyApplyStartDate).toLocaleDateString('en-GB', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: 'numeric',
                                    })}
                                    -{' '}
                                    {new Date(campaign?.companyApplyEndDate).toLocaleDateString('en-GB', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: 'numeric',
                                    })}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    textAlign: 'left',
                                    flexDirection: 'column',
                                    alignItems: { md: 'start' },
                                    justifyContent: 'left',
                                }}
                            >
                                <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: 1 }}>
                                    <Typography color="gray" variant="h7">
                                        Student apply date
                                    </Typography>
                                </Box>
                                <Typography color="black" variant="h6" fontWeight="bold">
                                    {new Date(campaign?.menteeApplyStartDate).toLocaleDateString('en-GB', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: 'numeric',
                                    })}
                                    -{' '}
                                    {new Date(campaign?.menteeApplyEndDate).toLocaleDateString('en-GB', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: 'numeric',
                                    })}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    textAlign: 'left',
                                    flexDirection: 'column',
                                    alignItems: { md: 'start' },
                                    justifyContent: 'left',
                                }}
                            >
                                <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: 1 }}>
                                    <Typography color="gray" variant="h7">
                                        Tranning
                                    </Typography>
                                </Box>
                                <Typography color="black" variant="h6" fontWeight="bold">
                                    {new Date(campaign?.trainingStartDate).toLocaleDateString('en-GB', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: 'numeric',
                                    })}
                                    -{' '}
                                    {new Date(campaign?.trainingEndDate).toLocaleDateString('en-GB', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: 'numeric',
                                    })}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Card>
            </Box>
            <Box sx={{ width: '100%', marginTop: 2 }}>
                <Card
                    variant="outlined"
                    sx={{
                        p: 3,
                        height: 'fit-content',
                        width: '100%',
                        background: 'none',
                        paddingLeft: 0,
                        paddingRight: 0,
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
                            }}
                        >
                            <Typography color="text.primary" variant="body1" fontWeight="bold" fontSize={'24px'}>
                                Campaign Overview
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                marginLeft: 2,
                                marginRight: 2,
                                paddingBottom: 2,
                                borderBottom: '1px dashed #e0e0e0',
                            }}
                        >
                            <Typography color="text.primary">{campaign?.description}</Typography>
                        </Box>
                    </Box>
                </Card>
            </Box>
            <Box sx={{ width: '100%', marginTop: 2 }}>
                <Card
                    variant="outlined"
                    sx={{
                        p: 3,
                        height: 'fit-content',
                        width: '100%',
                        background: 'none',
                        paddingLeft: 0,
                        paddingRight: 0,
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
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <Typography color="text.primary" variant="body1" fontWeight="bold" fontSize={'24px'}>
                                Our Mentors
                            </Typography>
                            <Button variant="contained" color="primary" onClick={handleCreateMentor}>
                                Create Mentor
                            </Button>
                        </Box>
                        <Grid container spacing={6}>
                            <Grid item xs={12} md={12}>
                                <Stack
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="flex-start"
                                    spacing={2}
                                    useFlexGap
                                    sx={{
                                        width: '100%',
                                        display: { xs: 8, sm: 'flex' },
                                        paddingLeft: 2,
                                        paddingRight: 2,
                                    }}
                                >
                                    <Card
                                        variant="outlined"
                                        component={Button}
                                        sx={{
                                            p: 3,
                                            height: 'fit-content',
                                            background: 'none',
                                            width: '100%',
                                        }}
                                        onClick={() => handleItemClick()}
                                    >
                                        <Box
                                            sx={{
                                                width: '100%',
                                                display: 'flex',
                                                textAlign: 'left',
                                                flexDirection: { xs: 'column', md: 'row' },
                                                alignItems: { md: 'center' },
                                                gap: 2.5,
                                            }}
                                        >
                                            <Box>
                                                <Avatar alt="avatar image" src="" sx={{ width: 150, height: 150 }} />
                                            </Box>
                                            <Box sx={{ textTransform: 'none', width: '100%' }}>
                                                <Box
                                                    sx={{
                                                        color: (theme) => {
                                                            return theme.palette.mode === 'light'
                                                                ? 'primary.main'
                                                                : 'primary.main';
                                                        },
                                                        display: 'flex',
                                                        justifyContent: {
                                                            xs: 'center',
                                                            md: 'flex-start',
                                                            lg: 'flex-start',
                                                        },
                                                        alignItems: 'center',
                                                        gap: 5,
                                                    }}
                                                >
                                                    <Typography
                                                        color="text.primary"
                                                        variant="body1"
                                                        fontWeight="bold"
                                                        fontSize={'24px'}
                                                    >
                                                        Ahihi
                                                    </Typography>
                                                    <Chip
                                                        avatar={
                                                            <Avatar sx={{ bgcolor: 'transparent' }}>
                                                                <StarIcon sx={{ color: '#4CAF50' }} />
                                                            </Avatar>
                                                        }
                                                        label="Top Mentor"
                                                        sx={{
                                                            backgroundColor: '#E0F2F1', // Màu nền xanh nhạt
                                                            color: '#004D40', // Màu chữ xanh đậm
                                                            fontWeight: 'bold',
                                                            padding: '8px',
                                                            borderRadius: '16px',
                                                            fontSize: '14px',
                                                        }}
                                                        size="medium"
                                                    />
                                                </Box>
                                                <Typography
                                                    color="text.secondary"
                                                    variant="body2"
                                                    sx={{ my: 1 }}
                                                    fontSize={'16px'}
                                                >
                                                    Short Descrition
                                                </Typography>

                                                <Typography
                                                    color="text.secondary"
                                                    variant="body2"
                                                    sx={{ my: 2 }}
                                                    fontSize={'14px'}
                                                >
                                                    Description
                                                </Typography>

                                                <CardContent></CardContent>
                                                <br />
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'left',
                                                        alignItems: 'center',
                                                        width: '100%',
                                                        gap: 2,
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            // flex: 1,
                                                            display: 'flex',
                                                            alignItems: 'baseline',
                                                            textAlign: 'center',
                                                        }}
                                                    >
                                                        <Typography
                                                            variant="h4"
                                                            sx={{
                                                                color: '#182F5D',
                                                                fontWeight: 'bold',
                                                                marginRight: '4px',
                                                            }}
                                                        >
                                                            150 point
                                                        </Typography>
                                                        <Typography
                                                            variant="body1"
                                                            sx={{
                                                                color: '#182F5D',
                                                                fontSize: '16px',
                                                            }}
                                                        >
                                                            / acceptance
                                                        </Typography>
                                                    </Box>
                                                    <Button
                                                        variant="contained"
                                                        size="large"
                                                        sx={{
                                                            height: '100%',
                                                            backgroundColor: '#365E32',
                                                        }}
                                                    >
                                                        View Profile
                                                    </Button>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Card>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>
                </Card>
            </Box>
        </Container>
    );
}

export default CompaniesCampaignDetail;

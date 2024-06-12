import { Container, Grid, Typography, Card, Box, Avatar, CardContent, Button, Tabs, Tab, Chip } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';

import PropTypes from 'prop-types';

import { useState } from 'react';

function CompanyDetails() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <Container id="company" sx={{ py: { xs: 8, sm: 16 }, padding: { lg: 16 } }}>
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
                                <Avatar
                                    alt="avatar image"
                                    src="https://ih1.redbubble.net/image.5481662153.7016/st,small,507x507-pad,600x600,f8f8f8.jpg"
                                    sx={{ width: 150, height: 150 }}
                                />
                            </Box>
                            <Box sx={{ textTransform: 'none', width: '100%' }}>
                                <Typography color="text.primary" variant="body1" fontWeight="bold" fontSize={'24px'}>
                                    FPT Software
                                </Typography>
                                <Typography color="text.secondary" variant="body2" sx={{ my: 1 }} fontSize={'16px'}>
                                    F-Town 1, Ho Chi Minh
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', textTransform: 'none', gap: 1 }}>
                                    <PersonIcon />
                                    <Typography color="text.secondary" variant="body2" sx={{ my: 1 }} fontSize={'16px'}>
                                        5 Mentor Available
                                    </Typography>
                                </Box>
                                <CardContent>
                                    <Button
                                        variant="contained"
                                        sx={{ width: '100%', mr: '10%', backgroundColor: '#365E32' }}
                                    >
                                        Follow
                                    </Button>
                                </CardContent>
                            </Box>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Overview" {...a11yProps(0)} />
                        <Tab label="Reviews" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel
                    value={value}
                    index={0}
                    sx={{
                        paddingLeft: 0,
                        paddingRight: 0,
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
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
                                    <Typography color="gray" variant="h7">
                                        Company type
                                    </Typography>
                                    <Typography color="black" variant="h6" fontWeight="bold">
                                        IT Product
                                    </Typography>
                                </Box>
                                <Box xs={12} sm={6} md={4}>
                                    <Typography color="gray" variant="h7">
                                        Company size
                                    </Typography>
                                    <Typography color="black" variant="h6" fontWeight="bold">
                                        1000+ employees
                                    </Typography>
                                </Box>
                                <Box xs={12} sm={6} md={4}>
                                    <Typography color="gray" variant="h7">
                                        Country
                                    </Typography>
                                    <Typography color="black" variant="h6" fontWeight="bold">
                                        Germany
                                    </Typography>
                                </Box>
                                <Box xs={12} sm={6} md={4}>
                                    <Typography color="gray" variant="h7">
                                        Working days
                                    </Typography>
                                    <Typography color="black" variant="h6" fontWeight="bold">
                                        Monday - Friday
                                    </Typography>
                                </Box>
                                <Box xs={12} sm={6} md={4}>
                                    <Typography color="gray" variant="h7">
                                        Overtime policy
                                    </Typography>
                                    <Typography color="black" variant="h6" fontWeight="bold">
                                        No OT
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
                            paddingLeft: 0,
                            paddingRight: 0,
                            marginTop: 2,
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
                                    Company Overview
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
                                <Typography color="text.primary">
                                    The Bosch Group is a leading global supplier of technology and services The Bosch
                                    Group is a leading global supplier of technology and services. Its operations have
                                    been divided into four business sectors: Automotive Technology, Industrial
                                    Technology, Consumer Goods, and Energy and Building Technology. The Bosch Group
                                    comprises Robert Bosch GmbH and its roughly 460 subsidiaries and regional companies
                                    in some 60 countries. If its sales and service partners are included, then Bosch is
                                    represented in roughly 150 countries. Bosch Global Software Technologies Company
                                    Limited (BGSV) is 100% owned subsidiary of Robert Bosch GmbH - one of the world’s
                                    leading global suppliers of technology and services, offering end-to-end
                                    Engineering, IT, and Business Solutions. Starting its operation from 2010 at Etown 2
                                    in HCMC, BGSV is the first software development center of Bosch in Southeast Asia.
                                    BGSV nowadays have over 4,000 associates, with a global footprint and presence in
                                    the US, Europe, and the Asia Pacific region. With our unique ability to offer
                                    end-to-end solutions that connect sensors, software, and services, we enable
                                    businesses to move from the traditional to digital or improve businesses by
                                    introducing a digital element in their products and processes.
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'left',
                                    alignItems: 'center',
                                    gap: 4,
                                    marginLeft: 2,
                                    marginRight: 2,
                                    paddingBottom: 2,
                                }}
                            >
                                <Box
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: 1,
                                        '&:hover': {
                                            textDecoration: 'underline',
                                            cursor: 'pointer',
                                        },
                                    }}
                                >
                                    <LanguageIcon />
                                    <Typography color="gray" variant="h7">
                                        Company website
                                    </Typography>
                                </Box>
                                <Box
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: 1,
                                        '&:hover': {
                                            textDecoration: 'underline',
                                            cursor: 'pointer',
                                        },
                                    }}
                                >
                                    <FacebookIcon />
                                    <Typography color="gray" variant="h7">
                                        Fanpage Facebook
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
                            paddingLeft: 0,
                            paddingRight: 0,
                            marginTop: 2,
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
                                    Our key skills
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'left',
                                    alignItems: 'center',
                                    gap: 2,
                                    marginLeft: 2,
                                    marginRight: 2,
                                    paddingBottom: 2,
                                }}
                            >
                                <Chip label="Java" />
                                <Chip label="C#" />
                                <Chip label="Python" />
                                <Chip label="PHP" />
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
                            paddingLeft: 0,
                            paddingRight: 0,
                            marginTop: 2,
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
                                paddingLeft: 2,
                                paddingRight: 2,
                                paddingBottom: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    paddingBottom: 2,
                                    borderBottom: '1px dashed #e0e0e0',
                                }}
                            >
                                <Typography color="text.primary" variant="body1" fontWeight="bold" fontSize={'24px'}>
                                    Mentor Available
                                </Typography>
                            </Box>
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
                                                <Avatar
                                                    alt="avatar image"
                                                    src="https://cdn.mentorcruise.com/cdn-cgi/image/width=368,format=auto/https://cdn.mentorcruise.com/cache/3af8cef95c0e04cad011cfc860502d11/08f97e638ff0e583/1c22cb091d5b980b636e61ed0937b15e.jpg"
                                                    sx={{ width: 150, height: 150 }}
                                                />
                                            </Box>
                                            <Box sx={{ textTransform: 'none', width: '100%' }}>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 1,
                                                    }}
                                                >
                                                    <Typography
                                                        color="text.primary"
                                                        variant="body1"
                                                        fontWeight="bold"
                                                        fontSize={'24px'}
                                                    >
                                                        Riccardo Parenti
                                                    </Typography>
                                                    <Chip label="Top Mentor" color="success" />
                                                </Box>
                                                <Typography
                                                    color="text.secondary"
                                                    variant="body2"
                                                    sx={{ my: 1 }}
                                                    fontSize={'16px'}
                                                >
                                                    Software Engineer at Immutable
                                                </Typography>

                                                <Typography
                                                    color="black"
                                                    variant="body2"
                                                    sx={{ my: 1 }}
                                                    fontSize={'16px'}
                                                >
                                                    Hello! I am a Frontend Engineer with 5+ years of experience
                                                    currently working at Coinbase. I have extensive experience in
                                                    building enterprise level Web and Mobile apps. I enjoy sharing my
                                                    knowledge and helping others excel in their careers.
                                                </Typography>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'left',
                                                        alignItems: 'center',
                                                        gap: 2,
                                                        paddingBottom: 2,
                                                    }}
                                                >
                                                    <Chip label="Java" />
                                                    <Chip label="C#" />
                                                    <Chip label="Python" />
                                                    <Chip label="PHP" />
                                                </Box>
                                                <CardContent>
                                                    <Button
                                                        variant="contained"
                                                        sx={{ width: '100%', mr: '10%', backgroundColor: '#365E32' }}
                                                    >
                                                        Apply Now
                                                    </Button>
                                                </CardContent>
                                            </Box>
                                        </Box>
                                    </Card>
                                </Grid>
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
                                                <Avatar
                                                    alt="avatar image"
                                                    src="https://cdn.mentorcruise.com/cdn-cgi/image/width=368,format=auto/https://cdn.mentorcruise.com/cache/3af8cef95c0e04cad011cfc860502d11/08f97e638ff0e583/1c22cb091d5b980b636e61ed0937b15e.jpg"
                                                    sx={{ width: 150, height: 150 }}
                                                />
                                            </Box>
                                            <Box sx={{ textTransform: 'none', width: '100%' }}>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 1,
                                                    }}
                                                >
                                                    <Typography
                                                        color="text.primary"
                                                        variant="body1"
                                                        fontWeight="bold"
                                                        fontSize={'24px'}
                                                    >
                                                        Riccardo Parenti
                                                    </Typography>
                                                    <Chip label="Top Mentor" color="success" />
                                                </Box>
                                                <Typography
                                                    color="text.secondary"
                                                    variant="body2"
                                                    sx={{ my: 1 }}
                                                    fontSize={'16px'}
                                                >
                                                    Software Engineer at Immutable
                                                </Typography>

                                                <Typography
                                                    color="black"
                                                    variant="body2"
                                                    sx={{ my: 1 }}
                                                    fontSize={'16px'}
                                                >
                                                    Hello! I am a Frontend Engineer with 5+ years of experience
                                                    currently working at Coinbase. I have extensive experience in
                                                    building enterprise level Web and Mobile apps. I enjoy sharing my
                                                    knowledge and helping others excel in their careers.
                                                </Typography>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'left',
                                                        alignItems: 'center',
                                                        gap: 2,
                                                        paddingBottom: 2,
                                                    }}
                                                >
                                                    <Chip label="Java" />
                                                    <Chip label="C#" />
                                                    <Chip label="Python" />
                                                    <Chip label="PHP" />
                                                </Box>
                                                <CardContent>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        sx={{ width: '100%', mr: '10%', backgroundColor: '#365E32' }}
                                                    >
                                                        Apply Now
                                                    </Button>
                                                </CardContent>
                                            </Box>
                                        </Box>
                                    </Card>
                                </Grid>
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
                                                <Avatar
                                                    alt="avatar image"
                                                    src="https://cdn.mentorcruise.com/cdn-cgi/image/width=368,format=auto/https://cdn.mentorcruise.com/cache/3af8cef95c0e04cad011cfc860502d11/08f97e638ff0e583/1c22cb091d5b980b636e61ed0937b15e.jpg"
                                                    sx={{ width: 150, height: 150 }}
                                                />
                                            </Box>
                                            <Box sx={{ textTransform: 'none', width: '100%' }}>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 1,
                                                    }}
                                                >
                                                    <Typography
                                                        color="text.primary"
                                                        variant="body1"
                                                        fontWeight="bold"
                                                        fontSize={'24px'}
                                                    >
                                                        Riccardo Parenti
                                                    </Typography>
                                                    <Chip label="Top Mentor" color="success" />
                                                </Box>
                                                <Typography
                                                    color="text.secondary"
                                                    variant="body2"
                                                    sx={{ my: 1 }}
                                                    fontSize={'16px'}
                                                >
                                                    Software Engineer at Immutable
                                                </Typography>

                                                <Typography
                                                    color="black"
                                                    variant="body2"
                                                    sx={{ my: 1 }}
                                                    fontSize={'16px'}
                                                >
                                                    Hello! I am a Frontend Engineer with 5+ years of experience
                                                    currently working at Coinbase. I have extensive experience in
                                                    building enterprise level Web and Mobile apps. I enjoy sharing my
                                                    knowledge and helping others excel in their careers.
                                                </Typography>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'left',
                                                        alignItems: 'center',
                                                        gap: 2,
                                                        paddingBottom: 2,
                                                    }}
                                                >
                                                    <Chip label="Java" />
                                                    <Chip label="C#" />
                                                    <Chip label="Python" />
                                                    <Chip label="PHP" />
                                                </Box>
                                                <CardContent>
                                                    <Button
                                                        variant="contained"
                                                        sx={{ width: '100%', mr: '10%', backgroundColor: '#365E32' }}
                                                    >
                                                        Apply Now
                                                    </Button>
                                                </CardContent>
                                            </Box>
                                        </Box>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    </Card>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    Item Two
                </CustomTabPanel>
            </Box>
        </Container>
    );
}

export default CompanyDetails;

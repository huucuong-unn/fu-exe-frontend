import { Container, Button, Box, Typography, Chip, Grid, Card, Avatar, CardContent } from '@mui/material';

function MentorHistoryForCompany() {
    return (
        <Container id="companies" sx={{ py: { xs: 8, sm: 16 }, padding: { lg: 16 } }}>
            <Typography variant="h4" sx={{ mb: { xs: 2, sm: 4 } }}>
                Our mentors
            </Typography>
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
                                <Typography color="text.secondary" variant="body2" sx={{ my: 1 }} fontSize={'16px'}>
                                    Software Engineer at Immutable
                                </Typography>

                                <Typography color="black" variant="body2" sx={{ my: 1 }} fontSize={'16px'}>
                                    Hello! I am a Frontend Engineer with 5+ years of experience currently working at
                                    Coinbase. I have extensive experience in building enterprise level Web and Mobile
                                    apps. I enjoy sharing my knowledge and helping others excel in their careers.
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
                                    <Chip label="Approve" color="success" />
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
                                <Typography color="text.secondary" variant="body2" sx={{ my: 1 }} fontSize={'16px'}>
                                    Software Engineer at Immutable
                                </Typography>

                                <Typography color="black" variant="body2" sx={{ my: 1 }} fontSize={'16px'}>
                                    Hello! I am a Frontend Engineer with 5+ years of experience currently working at
                                    Coinbase. I have extensive experience in building enterprise level Web and Mobile
                                    apps. I enjoy sharing my knowledge and helping others excel in their careers.
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
                                    <Chip label="Reject" color="error" />
                                </CardContent>
                            </Box>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default MentorHistoryForCompany;

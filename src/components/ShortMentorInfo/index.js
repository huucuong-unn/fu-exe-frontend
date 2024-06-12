import { Avatar, Box, Button, Card, CardContent, Chip, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import BoltIcon from '@mui/icons-material/Bolt';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Phone } from '@mui/icons-material';

const mentor = {
    profilePicture: 'https://ih1.redbubble.net/image.5481662153.7016/st,small,507x507-pad,600x600,f8f8f8.jpg',
    shortDescription: 'Director, Engineering at Tortee',
    title: 'Huu Cuong Le',
    description:
        'Passionate about technology and its social impact. Over 10 years experience delivering successful products in healthcare, eCommerce, digital media and international fundraising. Strong focus on product, user-centricity, UX and lean processes. Interested in Zen and Stoic philosophy. Enjoy deep thinking and deep work.',
    skills: ['React', 'Java', 'Nodejs'],
};

export const ShortMentorInfo = () => {
    return (
        <Container
            id="shortmentorinfo"
            sx={{ py: 4, backgroundColor: '#BACD92', borderRadius: 2 }}
            direction={{ xs: 'column', lg: 'row' }}
            useFlexGap
        >
            <Stack
                justifyContent="evenly"
                alignItems="flex-start"
                spacing={2}
                useFlexGap
                sx={{
                    width: '100%',
                    display: { xs: 8, sm: 'flex' },
                    flexDirection: { xs: 'column', md: 'row', lg: 'row' },
                }}
            >
                <Card
                    sx={{
                        p: 1,
                        height: 'fit-content',
                        width: { xs: '100%', md: '60%', lg: '60%' },
                        background: 'none',
                        boxShadow: 'none',
                        textAlign: { xs: 'center', md: 'left', lg: 'left' },
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2.5,
                        }}
                    >
                        <Box
                            sx={{
                                color: (theme) => {
                                    return theme.palette.mode === 'light' ? 'primary.main' : 'primary.main';
                                },
                                display: 'flex',
                                justifyContent: { xs: 'center', md: 'flex-start', lg: 'flex-start' },
                                alignItems: 'center',
                                gap: 5,
                            }}
                        >
                            <Avatar alt="avatar image" src={mentor.profilePicture} sx={{ width: 150, height: 150 }} />
                            <Chip
                                icon={<BoltIcon />}
                                label="Top Mentor"
                                sx={{ backgroundColor: 'white', color: 'black' }}
                                size="medium"
                            />
                        </Box>
                        <Stack
                            useFlexGap
                            sx={{ flexDirection: { xs: 'column', md: 'row', lg: 'row' }, gap: { xs: 1, md: 2, lg: 3 } }}
                        >
                            <Box sx={{ textTransform: 'none' }}>
                                <Typography color="text.primary" variant="body1" fontWeight="bold" fontSize={'30px'}>
                                    {mentor?.title}
                                </Typography>
                                <Typography color="text.secondary" variant="body2" sx={{ mb: 1 }} fontSize={'18px'}>
                                    {mentor?.shortDescription}
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'left',
                                        alignItems: 'center',
                                        gap: 4,
                                        marginTop: 2,
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
                                        <LinkedInIcon />
                                        <Typography color="black" variant="h7" fontWeight="bold">
                                            Linkedin
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
                                        <Typography color="black" variant="h7" fontWeight="bold">
                                            Facebook
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* <Typography
                                    color="text.primary"
                                    variant="body2"
                                    sx={{ mt: 3 }}
                                    fontSize={'18px'}
                                    fontWeight="bold"
                                >
                                    Skills
                                </Typography>
                                <CardContent sx={{ px: 0 }}>
                                    {mentor.skills?.map((skill, index) => (
                                        <Chip key={index} label={skill} sx={{ mr: 2, mb: 1 }} onClick={() => {}} />
                                    ))}
                                    <a href="#mentorskill" style={{ textDecoration: 'none', color: 'black' }}>
                                        <Typography
                                            color="balck"
                                            sx={{
                                                marginTop: 1,
                                                textDecoration: 'underline',
                                                '&:hover': {
                                                    cursor: 'pointer',
                                                },
                                            }}
                                        >
                                            + 24 more
                                        </Typography>
                                    </a>
                                </CardContent> */}
                                <br />
                            </Box>
                        </Stack>
                    </Box>
                </Card>
                <Card
                    sx={{
                        width: { xs: '100%', md: '35%', lg: '35%' },
                        height: '100%',
                        borderRadius: 5,
                        border: '2px #333 solid',
                    }}
                >
                    <Box sx={{ p: 3 }}>
                        <Typography color="text.primary" variant="body1" fontWeight="bold" fontSize={'40px'}>
                            $20 <span style={{ fontSize: '20px' }}>/ acceptance</span>
                        </Typography>
                        <Typography color="text.primary" variant="body1" fontSize={'16px'}>
                            The most popular way to get mentored, let's work towards your goals!{' '}
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'start',
                                gap: 2,
                                marginTop: 2,
                            }}
                        >
                            <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: 2 }}>
                                <GroupsIcon />
                                <Typography color="text.primary" variant="body1" fontSize={'16px'}>
                                    Meet at 5:30 p.m every Tuesday, Wednesday and Thursday
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: 2 }}>
                                <LocalPhoneIcon />
                                <Typography color="text.primary" variant="body1" fontSize={'16px'}>
                                    https://meet.google.com/dgk-odpa-ays
                                </Typography>
                            </Box>
                        </Box>

                        <Link to={'/user/apply'}>
                            <Button
                                variant="contained"
                                // color="primary"
                                sx={{
                                    width: '100%',
                                    mt: 2,
                                    textTransform: 'none',
                                    fontSize: '16px',
                                    backgroundColor: '#365E32',
                                }}
                            >
                                Apply now
                            </Button>
                        </Link>
                    </Box>
                </Card>
            </Stack>
        </Container>
    );
};

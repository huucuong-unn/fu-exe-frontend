import { Avatar, Box, Button, Card, CardContent, Chip, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';

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
        <Container id="shortmentorinfo" sx={{ py: 4 }} direction={{ xs: 'column', lg: 'row' }} useFlexGap>
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
                            }}
                        >
                            <Avatar alt="avatar image" src={mentor.profilePicture} sx={{ width: 150, height: 150 }} />
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

                                <Typography color="text.primary" variant="body2" sx={{ mt: 3 }} fontSize={'18px'}>
                                    Skills
                                </Typography>
                                <CardContent sx={{ px: 0 }}>
                                    {mentor.skills?.map((skill, index) => (
                                        <Chip key={index} label={skill} sx={{ mr: 2, mb: 1 }} onClick={() => {}} />
                                    ))}
                                </CardContent>
                                <br />
                            </Box>
                            <Box sx={{ p: { md: 2, xs: 0 } }}>
                                <Typography color="text.primary" variant="body1" fontSize={'16px'}>
                                    <StarBorderRoundedIcon /> 5.0 (2 reviews)
                                </Typography>
                                <Typography color="text.primary" variant="body1" fontSize={'16px'}>
                                    <StarBorderRoundedIcon /> Usually responds in 1 day
                                </Typography>
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
                        <Typography color="text.secondary" variant="body1" fontSize={'16px'}>
                            The most popular way to get mentored, let's work towards your goals!{' '}
                        </Typography>
                        <Link to={'/user/apply'}>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ width: '100%', mt: 2, textTransform: 'none', fontSize: '16px' }}
                            >
                                Apply
                            </Button>
                        </Link>
                    </Box>
                </Card>
            </Stack>
        </Container>
    );
};

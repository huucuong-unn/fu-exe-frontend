import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Avatar, CardContent, Chip, Input, TextField } from '@mui/material';

const items = [
    {
        profilePicture: 'https://ih1.redbubble.net/image.5481662153.7016/st,small,507x507-pad,600x600,f8f8f8.jpg',
        shortDescription: 'Director, Engineering at Tortee',
        title: 'Huu Cuong Le',
        description:
            'Passionate about technology and its social impact. Over 10 years experience delivering successful products in healthcare, eCommerce, digital media and international fundraising. Strong focus on product, user-centricity, UX and lean processes. Interested in Zen and Stoic philosophy. Enjoy deep thinking and deep work.',
        skills: ['React', 'Java', 'Nodejs'],
    },
    {
        profilePicture: 'https://www.shutterstock.com/image-vector/cat-meme-sassy-sassycat-white-260nw-2008304912.jpg',
        shortDescription: 'CEO at Tortee',
        title: 'Ut Be',
        description:
            'Passionate about technology and its social impact. Over 10 years experience delivering successful products in healthcare, eCommerce, digital media and international fundraising. Strong focus on product, user-centricity, UX and lean processes. Interested in Zen and Stoic philosophy. Enjoy deep thinking and deep work.',
        skills: ['Marketing Research', 'Adobe Photoshop', 'Adobe Illustrator'],
    },
];

function SearchFilter() {
    return (
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{
                pt: 2,
                width: { xs: '100%', sm: '100%%', lg: '100%' },
                display: 'flex',
                justifyContent: 'center',
                mb: 10,
            }}
        >
            <TextField
                id="outlined-basic"
                hiddenLabel
                size="medium"
                variant="outlined"
                placeholder="Search by company, role, or skill"
                inputProps={{
                    autoComplete: 'off',
                    'aria-label': 'Search by company, role, or skill',
                }}
                sx={{ width: { sx: '100%', sm: '70%', lg: '60%' } }}
            />
            <Button variant="contained" color="primary" sx={{ width: 105, borderRadius: 5 }}>
                Filter
            </Button>
        </Stack>
    );
}

export default function Mentors() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

    const handleItemClick = (index) => {
        setSelectedItemIndex(index);
    };

    return (
        <Container id="mentors" sx={{ py: { xs: 8, sm: 16 }, padding: { lg: 16 } }}>
            <SearchFilter />
            <Grid container spacing={6}>
                <Grid item xs={12} md={12}>
                    <div>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: { xs: 2, sm: 4 } }}>
                            404 mentors found
                        </Typography>
                    </div>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-start"
                        spacing={2}
                        useFlexGap
                        sx={{ width: '100%', display: { xs: 8, sm: 'flex' } }}
                    >
                        {items?.map(({ title, description, shortDescription, skills, profilePicture }, index) => (
                            <Card
                                key={index}
                                variant="outlined"
                                component={Button}
                                onClick={() => handleItemClick(index)}
                                sx={{
                                    p: 3,
                                    height: 'fit-content',
                                    width: '100%',
                                    background: 'none',
                                    backgroundColor: selectedItemIndex === index ? 'action.selected' : undefined,
                                    borderColor: (theme) => {
                                        if (theme.palette.mode === 'light') {
                                            return selectedItemIndex === index ? 'primary.light' : 'grey.200';
                                        }
                                        return selectedItemIndex === index ? 'primary.dark' : 'grey.800';
                                    },
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
                                    <Box
                                        sx={{
                                            color: (theme) => {
                                                if (theme.palette.mode === 'light') {
                                                    return selectedItemIndex === index ? 'primary.main' : 'grey.300';
                                                }
                                                return selectedItemIndex === index ? 'primary.main' : 'grey.700';
                                            },
                                        }}
                                    >
                                        <Avatar
                                            alt="avatar image"
                                            src={profilePicture}
                                            sx={{ width: 150, height: 150 }}
                                        />
                                    </Box>
                                    <Box sx={{ textTransform: 'none' }}>
                                        <Typography
                                            color="text.primary"
                                            variant="body1"
                                            fontWeight="bold"
                                            fontSize={'24px'}
                                        >
                                            {title}
                                        </Typography>
                                        <Typography
                                            color="text.secondary"
                                            variant="body2"
                                            sx={{ my: 1 }}
                                            fontSize={'16px'}
                                        >
                                            {shortDescription}
                                        </Typography>
                                        <Typography
                                            color="text.secondary"
                                            variant="body2"
                                            sx={{ my: 2 }}
                                            fontSize={'14px'}
                                        >
                                            {description}
                                        </Typography>
                                        <CardContent>
                                            {skills?.map((skill, index) => (
                                                <Chip
                                                    key={index}
                                                    label={skill}
                                                    sx={{ mr: 2, mb: 1 }}
                                                    onClick={() => {}}
                                                />
                                            ))}
                                        </CardContent>
                                        <br />
                                        <Link to={'/page'}>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                sx={{ width: { lg: '40%', md: '70%', xs: '80%' } }}
                                            >
                                                View Profile
                                            </Button>
                                        </Link>
                                    </Box>
                                </Box>
                            </Card>
                        ))}
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
}

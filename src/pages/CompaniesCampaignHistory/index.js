import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {
    Avatar,
    CardContent,
    Checkbox,
    Chip,
    Divider,
    FormControlLabel,
    FormGroup,
    Modal,
    TextField,
} from '@mui/material';

function CompaniesCampaignHistory() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

    const handleItemClick = (index) => {
        setSelectedItemIndex(index);
    };

    const mentors = [
        {
            profilePicture: 'https://ih1.redbubble.net/image.5481662153.7016/st,small,507x507-pad,600x600,f8f8f8.jpg',
            participationTime: '1/1/2024 - 1/7/2024',
            title: 'Spring Campaign 2024',
            description:
                'Passionate about technology and its social impact. Over 10 years experience delivering successful products in healthcare, eCommerce, digital media and international fundraising. Strong focus on product, user-centricity, UX and lean processes. Interested in Zen and Stoic philosophy. Enjoy deep thinking and deep work.',
            status: 'Tranning',
            numberOfMentor: 10,
        },
        {
            profilePicture:
                'https://www.shutterstock.com/image-vector/cat-meme-sassy-sassycat-white-260nw-2008304912.jpg',
            participationTime: '1/1/2024 - 1/7/2024',
            title: 'Summer Campaign 2024',
            description:
                'Passionate about technology and its social impact. Over 10 years experience delivering successful products in healthcare, eCommerce, digital media and international fundraising. Strong focus on product, user-centricity, UX and lean processes. Interested in Zen and Stoic philosophy. Enjoy deep thinking and deep work.',
            status: 'Company-apply',
            numberOfMentor: 5,
        },
        {
            profilePicture:
                'https://www.shutterstock.com/image-vector/cat-meme-sassy-sassycat-white-260nw-2008304912.jpg',
            participationTime: '1/1/2024 - 1/7/2024',
            title: 'Fall Campaign 2024',
            description:
                'Passionate about technology and its social impact. Over 10 years experience delivering successful products in healthcare, eCommerce, digital media and international fundraising. Strong focus on product, user-centricity, UX and lean processes. Interested in Zen and Stoic philosophy. Enjoy deep thinking and deep work.',
            status: 'Mentee-apply',
            numberOfMentor: 3,
        },
        {
            profilePicture:
                'https://www.shutterstock.com/image-vector/cat-meme-sassy-sassycat-white-260nw-2008304912.jpg',
            participationTime: 'CEO at Tortee',
            title: 'Winter Campaign 2024',
            description:
                'Passionate about technology and its social impact. Over 10 years experience delivering successful products in healthcare, eCommerce, digital media and international fundraising. Strong focus on product, user-centricity, UX and lean processes. Interested in Zen and Stoic philosophy. Enjoy deep thinking and deep work.',
            status: 'Close',
            numberOfMentor: 7,
        },
    ];

    return (
        <Container id="mentors" sx={{ py: { xs: 8, sm: 16 }, padding: { lg: 16 } }}>
            <Grid container spacing={6}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h4" sx={{ mb: { xs: 2, sm: 4 } }}>
                        Campaign History
                    </Typography>
                    {mentors.length === 0 && (
                        <div>
                            <Typography variant="body1" color="text.secondary" sx={{ mb: { xs: 2, sm: 4 } }}>
                                No Campaign found
                            </Typography>
                        </div>
                    )}
                    {mentors.length > 0 &&
                        mentors?.map((mentor, index) => (
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
                                    position: 'relative',
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
                                            src={mentor.profilePicture}
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
                                            {mentor?.title}
                                        </Typography>
                                        <Typography
                                            color="text.secondary"
                                            variant="body2"
                                            sx={{ my: 1 }}
                                            fontSize={'16px'}
                                        >
                                            {mentor?.participationTime}
                                        </Typography>
                                        <Typography
                                            color="text.secondary"
                                            variant="body2"
                                            sx={{ my: 2 }}
                                            fontSize={'14px'}
                                        >
                                            {mentor?.description}
                                        </Typography>
                                        <CardContent>
                                            <Chip
                                                key={index}
                                                label={mentor.status}
                                                sx={{ mr: 2, mb: 1 }}
                                                onClick={() => {}}
                                                color={
                                                    mentor.status === 'Company-apply'
                                                        ? 'primary'
                                                        : mentor.status === 'Mentee-apply'
                                                        ? 'secondary'
                                                        : mentor.status === 'Tranning'
                                                        ? 'success'
                                                        : mentor.status === 'Close'
                                                        ? 'error'
                                                        : 'default'
                                                }
                                            />
                                        </CardContent>
                                        <br />
                                        <Link to={'/mentor/id'}>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                sx={{ width: { lg: '40%', md: '70%', xs: '80%' }, mr: '10%' }}
                                            >
                                                View Campaign Detail
                                            </Button>
                                        </Link>
                                        {mentor.status === 'Company-apply' && (
                                            <Link to={'/mentor/id'}>
                                                <Button
                                                    variant="contained"
                                                    color="success"
                                                    sx={{ width: { lg: '40%', md: '70%', xs: '80%' } }}
                                                >
                                                    Create Mentor
                                                </Button>
                                            </Link>
                                        )}
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        right: 0,
                                        m: 2, // margin để tránh sát viền
                                    }}
                                >
                                    <Typography color="text.secondary" variant="body2" fontSize={'14px'}>
                                        {mentor.numberOfMentor} Mentor
                                    </Typography>
                                </Box>
                            </Card>
                        ))}
                </Grid>
            </Grid>
        </Container>
    );
}

export default CompaniesCampaignHistory;

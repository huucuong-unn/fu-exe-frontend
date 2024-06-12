import { Container, Grid, Typography, Card, Box, Avatar, CardContent, Chip } from '@mui/material';

function CompaniesCampaignDetail() {
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
                                <Avatar
                                    alt="avatar image"
                                    src="https://ih1.redbubble.net/image.5481662153.7016/st,small,507x507-pad,600x600,f8f8f8.jpg"
                                    sx={{ width: 150, height: 150 }}
                                />
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
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default CompaniesCampaignDetail;

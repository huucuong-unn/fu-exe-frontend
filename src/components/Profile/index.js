import { Box, Button, Container, Grid, TextField, Typography, Avatar } from '@mui/material';
import React from 'react';

export const Profile = () => {
    return (
        <Container sx={{ py: 6 }}>
            <Typography variant="h5" component="h3" sx={{ mb: 3 }}>
                Your Profile
            </Typography>
            <Box sx={{ border: '1px solid #ccc', borderRadius: 5 }}>
                <Box sx={{ p: 3 }}>
                    <Typography variant="h6" component="h3">
                        Personal Information
                    </Typography>
                    <Box
                        sx={{
                            width: '100%',
                            mb: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 1,
                        }}
                    >
                        <Avatar
                            sx={{ width: 100, height: 100, bgcolor: '#f48fb1' }} // Tăng kích thước Avatar
                        />
                        <Typography variant="h5">150 point</Typography>
                    </Box>

                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="fullName"
                                label="Full Name"
                                name="fullName"
                                autoComplete="fullName"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="email"
                                label="Email"
                                type="email"
                                id="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="phone"
                                label="Phone Number"
                                type="number"
                                id="phone"
                                autoComplete="phone"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="university"
                                label="University"
                                type="text"
                                id="university"
                                autoComplete="university"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="studentCode"
                                label="Student Code"
                                type="text"
                                id="studentCode"
                                autoComplete="studentCode"
                            />
                        </Grid>
                    </Grid>
                    <Button variant="contained" size="medium" sx={{ my: 4, backgroundColor: '#365E32' }}>
                        Save Changes
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

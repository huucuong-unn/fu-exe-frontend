import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
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
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ width: { lg: '15%', md: '20%', xs: '80%' }, my: 4 }}
                    >
                        Save Changes
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Divider, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useNavigate } from 'react-router-dom';
import AccountAPI from '~/API/AccountAPI';
import Alert from '@mui/material/Alert';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import storageService from '~/components/StorageService/storageService';

import logo from '~/assets/images/logo.png';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Tortee
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
    const [value, setValue] = useState('1');
    const [showAlert, setShowAlert] = useState(false);
    const location = useLocation();
    const [loginWithRole, setLoginWithRole] = useState('student');

    useEffect(() => {
        if (location.state?.signupSuccess) {
            setShowAlert(true);
            const timer = setTimeout(() => {
                setShowAlert(false);
            }, 5000); // Show alert for 5 seconds
            return () => clearTimeout(timer);
        }
    }, [location.state]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        switch (newValue) {
            case '1':
                setLoginWithRole('student');
                break;
            case '2':
                setLoginWithRole('mentor');
                break;
            case '3':
                setLoginWithRole('company');
                break;
            // Add more cases as needed
            default:
                setLoginWithRole('');
        }
    };

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            data.append('loginWithRole', loginWithRole);
            const userInfo = await AccountAPI.login(data);

            // Check if userInfo is not undefined or null
            if (userInfo) {
                // Store user information in local storage
                storageService.setItem('userInfo', userInfo);
                navigate('/');
                if (loginWithRole === 'mentor') {
                    navigate('/campaigns');  // Navigate to the campaigns page
                } else {
                    navigate('/');  // Navigate to the home page for other roles
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            {showAlert && (
                <Alert width="50%" variant="filled" severity="success">
                    Registered Successfully
                </Alert>
            )}
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        // backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        background: 'linear-gradient(180deg, #9CEE8D, #0B749C)',
                    }}
                >
                    <img src={logo} style={{ width: 150, height: 150, margin: '37%' }} alt="Logo" />
                </Grid>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h4">
                            Sign in
                        </Typography>
                        <Box sx={{ width: '100%', typography: 'body1', mt: 5 }}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                                        <Tab label="I'm a mentee" value="1" />
                                        <Tab label="I'm a mentor" value="2" />
                                        <Tab label="I'm a business" value="3" />
                                    </TabList>
                                </Box>
                                <TabPanel value="1">
                                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="emailOrUsername"
                                            label="Email Or Username"
                                            name="emailOrUsername"
                                            autoComplete="emailOrUsername"
                                            autoFocus
                                        />
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                        />
                                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                            Sign In
                                        </Button>
                                        <Divider>Or</Divider>
                                        <Button variant="outlined" size="medium" fullWidth sx={{ mt: 3, mb: 2 }}>
                                            Login with Google
                                        </Button>
                                        <Grid container>
                                            <Grid item xs>
                                                <Link to="/forgot-password" variant="body2">
                                                    Forgot password?
                                                </Link>
                                            </Grid>
                                            <Grid item>
                                                <Link to="/sign-up" variant="body2">
                                                    {"Don't have an account? Sign Up"}
                                                </Link>
                                            </Grid>
                                        </Grid>
                                        <Copyright sx={{ mt: 5 }} />
                                    </Box>
                                </TabPanel>
                                <TabPanel value="2">
                                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="emailOrUsername"
                                            autoComplete="email"
                                            autoFocus
                                        />
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                        />
                                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                            Sign In
                                        </Button>
                                        <Grid container>
                                            <Grid item xs>
                                                <Link href="#" variant="body2">
                                                    Forgot password?
                                                </Link>
                                            </Grid>
                                        </Grid>
                                        <Copyright sx={{ mt: 5 }} />
                                    </Box>
                                </TabPanel>
                                <TabPanel value="3">
                                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="3"
                                            label="Email or Username"
                                            name="emailOrUsername"
                                            autoComplete="email"
                                            autoFocus
                                        />
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                        />
                                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                            Sign In
                                        </Button>
                                        <Grid container>
                                            <Grid item xs>
                                                <Link to="#" variant="body2">
                                                    Forgot password?
                                                </Link>
                                            </Grid>
                                            <Grid item>
                                                <Link href="#" variant="body2">
                                                    {"Don't have an account? Sign Up"}
                                                </Link>
                                            </Grid>
                                        </Grid>
                                        <Copyright sx={{ mt: 5 }} />
                                    </Box>
                                </TabPanel>
                            </TabContext>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

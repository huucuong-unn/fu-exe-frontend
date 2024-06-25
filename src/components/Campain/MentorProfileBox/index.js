import React, { useState } from 'react';

import {
    Box,
    Button,
    Typography,
    Modal,
    TextField,
    Grid,
    Card,
    CardContent,
    Avatar,
    Container,
    IconButton,
    useTheme,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

const fakeProfiles = [
    {
        name: 'John Doe',
        description: 'Senior Developer',
        startDate: '2023-01-01',
        endDate: '2023-12-31',
        status: 'Active',
        img: 'https://via.placeholder.com/150',
    },
    {
        name: 'Jane Smith',
        description: 'Project Manager',
        startDate: '2022-03-15',
        endDate: '2022-11-30',
        status: 'Inactive',
        img: 'https://via.placeholder.com/150',
    },
    {
        name: 'Alice Johnson',
        description: 'UX Designer',
        startDate: '2023-05-20',
        endDate: '2024-05-19',
        status: 'Active',
        img: 'https://via.placeholder.com/150',
    },
];

const ProfileBox = () => {
    const theme = useTheme();

    const [openModal, setOpenModal] = useState(false);
    const [profiles, setProfiles] = useState(fakeProfiles);
    const [newProfileInfo, setNewProfileInfo] = useState({
        name: '',
        description: '',
        startDate: '',
        endDate: '',
        status: '',
        img: '',
    });
    const [editIndex, setEditIndex] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedProfileIndex, setSelectedProfileIndex] = useState(null); // Track selected profile index

    const profilesPerPage = 3;
    const totalPages = Math.ceil(profiles.length / profilesPerPage);

    const handleOpenModal = (index = null) => {
        if (index !== null) {
            const profileToEdit = profiles[index];
            setNewProfileInfo(profileToEdit);
            setEditIndex(index);
        } else {
            setNewProfileInfo({
                name: '',
                description: '',
                startDate: '',
                endDate: '',
                status: '',
                img: '',
            });
            setEditIndex(null);
        }
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleCreateProfile = () => {
        if (editIndex !== null) {
            const updatedProfiles = profiles.map((profile, index) =>
                index === editIndex ? newProfileInfo : profile
            );
            setProfiles(updatedProfiles);
        } else {
            const newProfile = { ...newProfileInfo, status: 'Active' }; // Ensure new profiles start as 'Active'
            setProfiles([...profiles, newProfile]);
        }

        setOpenModal(false);
        setNewProfileInfo({
            name: '',
            description: '',
            startDate: '',
            endDate: '',
            status: '',
            img: '',
        });
    };

    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleProfileSelect = (index) => {
        setSelectedProfileIndex(index); // Set selected profile index
        const updatedProfiles = profiles.map((profile, i) => {
            if (i === index) {
                return {
                    ...profile,
                    status: profile.status === 'Active' ? 'Using' : 'Active',
                };
            }
            return profile;
        });
        setProfiles(updatedProfiles);
    };

    const handleViewProfile = (profileName) => {
        // Navigate to profile detail page using history

    };

    return (
        <Container
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    width: { sm: '100%', md: '60%' },
                    textAlign: { sm: 'left', md: 'center' },
                }}
            >
                <Typography component="h2" variant="h4" color="text.primary">
                    Your Profiles
                </Typography>
            </Box>
            <Grid container spacing={2}>
                {profiles
                    .slice(currentPage * profilesPerPage, (currentPage + 1) * profilesPerPage)
                    .map((profile, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
                            <Card
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    flexGrow: 1,
                                    p: 1,
                                    border: profile.status === 'Using' ? `2px solid ${theme.palette.success.main}` : 'none',
                                    ':hover': {
                                        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
                                        cursor: 'pointer',
                                    },
                                }}
                                onClick={() => handleProfileSelect(currentPage * profilesPerPage + index)}
                            >
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Typography variant="h6" gutterBottom>
                                            {profile.name}
                                        </Typography>
                                        <IconButton onClick={() => handleOpenModal(index)} aria-label="edit">
                                            <EditIcon />
                                        </IconButton>
                                    </Box>
                                    <Typography variant="body1" gutterBottom>
                                        {profile.description}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {`Start Date: ${profile.startDate}`}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {`End Date: ${profile.endDate}`}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {`Status: ${profile.status}`}
                                    </Typography>
                                </CardContent>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        pr: 2,
                                        pb: 2,
                                    }}
                                >
                                    <Avatar src={profile.img} sx={{ width: 56, height: 56 }} />
                                    <Button
                                        onClick={() => handleViewProfile(profile.name)} // Pass profile name to view profile function
                                        variant="outlined"
                                        color="primary"
                                    >
                                        View Profile
                                    </Button>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
                    <Card
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            p: 1,
                            border: `2px dashed ${theme.palette.primary.main}`,
                            backgroundColor: '#f0f0f0',
                            ':hover': {
                                cursor: 'pointer',
                            },
                        }}
                        onClick={() => handleOpenModal()}
                    >
                        <AddIcon sx={{ fontSize: 56, color: theme.palette.primary.main }} />
                        <Typography variant="h6" color="primary" mt={1}>
                            + New Profile
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%', mt: 2 }}>
                <Button variant="contained" onClick={handlePrevPage}>
                    Previous
                </Button>
                <Button variant="contained" onClick={handleNextPage} sx={{ ml: 2 }}>
                    Next
                </Button>
            </Box>
            <Modal open={openModal} onClose={handleCloseModal}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        width: 400,
                        maxWidth: '95%',
                    }}
                >
                    <Typography variant="h6" gutterBottom>
                        {editIndex !== null ? 'Edit Profile' : 'Create New Profile'}
                    </Typography>
                    <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        margin="normal"
                        value={newProfileInfo.name}
                        onChange={(e) => setNewProfileInfo({ ...newProfileInfo, name: e.target.value })}
                    />
                    <TextField
                        fullWidth
                        label="Description"
                        variant="outlined"
                        margin="normal"
                        value={newProfileInfo.description}
                        onChange={(e) => setNewProfileInfo({ ...newProfileInfo, description: e.target.value })}
                    />
                    <TextField
                        fullWidth
                        label="Start Date"
                        type="date"
                        variant="outlined"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={newProfileInfo.startDate}
                        onChange={(e) => setNewProfileInfo({ ...newProfileInfo, startDate: e.target.value })}
                    />
                    <TextField
                        fullWidth
                        label="End Date"
                        type="date"
                        variant="outlined"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={newProfileInfo.endDate}
                        onChange={(e) => setNewProfileInfo({ ...newProfileInfo, endDate: e.target.value })}
                    />
                    <TextField
                        fullWidth
                        label="Status"
                        variant="outlined"
                        margin="normal"
                        value={newProfileInfo.status}
                        onChange={(e) => setNewProfileInfo({ ...newProfileInfo, status: e.target.value })}
                    />
                    <TextField
                        fullWidth
                        label="Image URL"
                        variant="outlined"
                        margin="normal"
                        value={newProfileInfo.img}
                        onChange={(e) => setNewProfileInfo({ ...newProfileInfo, img: e.target.value })}
                    />
                    <Box sx={{ mt: 2, textAlign: 'right' }}>
                        <Button onClick={handleCloseModal} sx={{ mr: 2 }}>
                            Cancel
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleCreateProfile}>
                            {editIndex !== null ? 'Save' : 'Create'}
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Container>
    );
};

export default ProfileBox;

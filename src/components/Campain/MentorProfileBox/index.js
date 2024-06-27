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
    InputLabel,
    useTheme,
    Autocomplete,
    Chip,
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

const skills = ['Java', 'C#', 'Python']; // List of skills for autocomplete

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
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isUsernameValid, setIsUsernameValid] = useState(true);
    const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
    const [isIntroduceValid, setIsIntroduceValid] = useState(true);
    const [isReasonApplyValid, setIsReasonApplyValid] = useState(true);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [currentSkill, setCurrentSkill] = useState('');

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

    const handleSubmit = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const username = event.target.fullName.value; // Ensure this matches the TextField name attribute
        const phoneNumber = event.target.phoneNumber.value;
        const introduce = event.target.description.value; // Ensure this matches the TextField name attribute
        const reasonApply = event.target.reasonApply?.value; // Ensure this matches the TextField name attribute

        if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
            setIsEmailValid(false);
        } else {
            setIsEmailValid(true);
        }

        if (username.length < 5) {
            setIsUsernameValid(false);
        } else {
            setIsUsernameValid(true);
        }

        if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phoneNumber)) {
            setIsPhoneNumberValid(false);
        } else {
            setIsPhoneNumberValid(true);
        }

        if (introduce.length < 50) {
            setIsIntroduceValid(false);
        } else {
            setIsIntroduceValid(true);
        }

        if (reasonApply && reasonApply.length < 50) { // Check if reasonApply exists before validation
            setIsReasonApplyValid(false);
        } else {
            setIsReasonApplyValid(true);
        }

        const data = new FormData(event.currentTarget);
        console.log(data);

        try {
            // Add your API call or state update logic here
            console.log('Form data submitted successfully');
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };

    const handleAddSkill = () => {
        if (currentSkill && !selectedSkills.includes(currentSkill)) {
            setSelectedSkills([...selectedSkills, currentSkill]);
            setCurrentSkill('');
        }
    };

    const handleDeleteSkill = (skillToDelete) => () => {
        setSelectedSkills(selectedSkills.filter((skill) => skill !== skillToDelete));
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
                                        onClick={() => handleViewProfile(profile.name)} // Pass profile
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
                        width: 600, // Increased width
                        maxWidth: '95%',
                    }}
                >
                    <Typography variant="h6" gutterBottom>
                        {editIndex !== null ? 'Edit Profile' : 'Fill out your new Profile'}
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'left',
                                alignItems: 'center',
                                gap: 2,
                            }}
                        >
                        <TextField
                            required
                            id="fullName"
                            name="fullName"
                            label="Full name"
                            variant="outlined"
                            defaultValue={newProfileInfo.name}
                            sx={{ flex: 1 }}
                            error={!isUsernameValid}
                            helperText={!isUsernameValid ? 'Username must have more than 5 characters' : ''}
                        />
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="Email"
                            variant="outlined"
                            defaultValue={newProfileInfo.email}
                            sx={{ flex: 1 }}
                            error={!isEmailValid}
                            helperText={!isEmailValid ? 'Invalid email' : ''}
                        />
                        </Box>

                        <TextField
                            required
                            id="phoneNumber"
                            name="phoneNumber"
                            label="Phone number"
                            variant="outlined"
                            defaultValue={newProfileInfo.phoneNumber}
                            error={!isPhoneNumberValid}
                            helperText={!isPhoneNumberValid ? 'Invalid phone' : ''}
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'left',
                                alignItems: 'center',
                                gap: 2,
                            }}
                        >
                        <TextField
                            id="facebookUrl"
                            name="facebookUrl"
                            label="Facebook Url"
                            variant="outlined"
                            sx={{ flex: 1 }}
                            defaultValue={newProfileInfo.facebookUrl}
                        />
                        <TextField
                            id="linkedinUrl"
                            name="linkedinUrl"
                            label="Linkedin Url"
                            variant="outlined"
                            sx={{ flex: 1 }}
                            defaultValue={newProfileInfo.linkedinUrl}
                        />
                        </Box>
                        {/*<InputLabel htmlFor="upload-cv" sx={{ fontWeight: 'bold' }}>*/}
                        {/*    Upload CV*/}
                        {/*</InputLabel>*/}
                        {/*<TextField*/}
                        {/*    id="upload-cv"*/}
                        {/*    name="cvFile"*/}
                        {/*    type="file"*/}
                        {/*    variant="outlined"*/}
                        {/*    sx={{ mb: 2 }}*/}
                        {/*/>*/}
                        <TextField
                            required
                            id="linkgooglemeet"
                            name="linkgooglemeet"
                            label="Link Google Meet"
                            multiline
                            rows={5}
                            variant="outlined"
                            defaultValue={newProfileInfo.description}

                        />
                        <TextField
                            required
                            id="description"
                            name="description"
                            label="Description"
                            multiline
                            rows={5}
                            variant="outlined"
                            defaultValue={newProfileInfo.description}
                            error={!isIntroduceValid}
                            helperText={!isIntroduceValid ? 'Description must have more than 50 characters' : ''}
                        />
                        {editIndex === null && (
                            <>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-skills"
                                    options={skills}
                                    value={currentSkill}
                                    onChange={(event, newValue) => setCurrentSkill(newValue)}
                                    sx={{ width: '100%' }}
                                    renderInput={(params) => <TextField {...params} label="Skill" variant="outlined" />}
                                />
                                <Button variant="contained" onClick={handleAddSkill}>
                                    Add Skill
                                </Button>
                                {selectedSkills.length > 0 && (
                                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                        {selectedSkills.map((skill, index) => (
                                            <Chip key={index} label={skill} onDelete={handleDeleteSkill(skill)} />
                                        ))}
                                    </Box>
                                )}

                            </>
                        )}

                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                width: '100%',
                                backgroundColor: '#365E32',
                            }}
                            type="submit"
                        >
                            {editIndex !== null ? 'Save Changes' : 'Submit'}
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Container>
    );















                                        };

export default ProfileBox;

import React, { useState, useEffect } from 'react';
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
    Autocomplete,
    Chip,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import getMentorProfileData from '~/API/Campain/getMentorProfile';
import StorageService from '~/components/StorageService/storageService'; // Import the API function
import createMentorProfile from '~/API/Campain/createMentorProfile';
import getSkillsData from '~/API/Campain/getSkill';
const skills = ['Java', 'C#', 'Python']; // List of skills for autocomplete

const ProfileBox = () => {
    const theme = useTheme();

    const [openModal, setOpenModal] = useState(false);
    const [profiles, setProfiles] = useState([]);
    const [newProfileInfo, setNewProfileInfo] = useState({
        id: '',
        createdDate: '',
        modifiedDate: '',
        createdBy: '',
        modifiedBy: '',
        linkedinUrl: '',
        facebookUrl: '',
        googleMeetUrl: '',
        requirement: '',
        description: '',
        shortDescription: '',
        profilePicture: '',
        status: '',
        fullName: '',
        skills: [],
        skillLevel: '',
    });
    const [editIndex, setEditIndex] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedProfileIndex, setSelectedProfileIndex] = useState(null);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isUsernameValid, setIsUsernameValid] = useState(true);
    const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
    const [isIntroduceValid, setIsIntroduceValid] = useState(true);
    const [isReasonApplyValid, setIsReasonApplyValid] = useState(true);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [currentSkill, setCurrentSkill] = useState('');
    const [skillsList, setSkillsList] = useState([]); // State to hold skills fetched from API

    const profilesPerPage = 3;
    const totalPages = Math.ceil(profiles.length / profilesPerPage);

    useEffect(() => {
        // Fetch profiles from the API
        const fetchProfiles = async () => {
            try {
                const mentorId = StorageService.getItem('userInfo').mentorId;
                const profileData = await getMentorProfileData(mentorId);
                setProfiles([profileData]); // Assuming API returns a single profile object
            } catch (error) {
                console.error('Error fetching profiles:', error);
            }
        };

        // Fetch skills list from API
        const fetchSkills = async () => {
            try {
                const skillsList = await getSkillsData;
            } catch (error) {
                console.error('Error fetching skills:', error);
            }
        };

        fetchProfiles();
        fetchSkills();
    }, []);



    const handleOpenModal = (index = null) => {
        if (index !== null) {

            const profileToEdit = profiles[index];
            setNewProfileInfo({
                id: profileToEdit.id,
                createdDate: profileToEdit.createdDate,
                modifiedDate: profileToEdit.modifiedDate,
                createdBy: profileToEdit.createdBy,
                modifiedBy: profileToEdit.modifiedBy,
                linkedinUrl: profileToEdit.linkedinUrl,
                facebookUrl: profileToEdit.facebookUrl,
                googleMeetUrl: profileToEdit.googleMeetUrl,
                requirement: profileToEdit.requirement,
                description: profileToEdit.description,
                shortDescription: profileToEdit.shortDescription,
                profilePicture: profileToEdit.profilePicture,
                status: profileToEdit.status,
                fullName: profileToEdit.fullName,
                skills: profileToEdit.skills,
                skillLevel: profileToEdit.skillLevel,
            });
            setEditIndex(index);
        } else {
            setNewProfileInfo({
                id: '',
                createdDate: '',
                modifiedDate: '',
                createdBy: '',
                modifiedBy: '',
                linkedinUrl: '',
                facebookUrl: '',
                googleMeetUrl: '',
                requirement: '',
                description: '',
                shortDescription: '',
                profilePicture: '',
                status: '',
                fullName: '',
                skills: [],
                skillLevel: '',
            });
            setEditIndex(null);
        }
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleCreateProfile = async () => {
        try {
            if (editIndex !== null) {
                const updatedProfiles = profiles.map((profile, index) =>
                    index === editIndex ? newProfileInfo : profile
                );
                setProfiles(updatedProfiles);
            } else {
                const newProfile = { ...newProfileInfo, status: 'Active' }; // Ensure new profiles start as 'Active'
                const createdProfile = await createMentorProfile(newProfile); // API call to create new profile
                setProfiles([...profiles, createdProfile]);
            }
            setOpenModal(false);
            setNewProfileInfo({
                id: '',
                createdDate: '',
                modifiedDate: '',
                createdBy: '',
                modifiedBy: '',
                linkedinUrl: '',
                facebookUrl: '',
                googleMeetUrl: '',
                requirement: '',
                description: '',
                shortDescription: '',
                profilePicture: '',
                status: '',
                fullName: '',
                skills: [],
                skillLevel: '',
            });
        } catch (error) {
            console.error('Error creating/updating profile:', error);
        }
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        //
        // const email = event.target.email.value;
        // const username = event.target.fullName.value;
        // const phoneNumber = event.target.phoneNumber.value;
        // const introduce = event.target.description.value;
        // const reasonApply = event.target.reasonApply?.value;
        //
        // if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
        //     setIsEmailValid(false);
        // } else {
        //     setIsEmailValid(true);
        // }
        //
        // if (username.length < 5) {
        //     setIsUsernameValid(false);
        // } else {
        //     setIsUsernameValid(true);
        // }
        //
        // if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phoneNumber)) {
        //     setIsPhoneNumberValid(false);
        // } else {
        //     setIsPhoneNumberValid(true);
        // }
        //
        // if (introduce.length < 50) {
        //     setIsIntroduceValid(false);
        // } else {
        //     setIsIntroduceValid(true);
        // }
        //
        // if (reasonApply && reasonApply.length < 50) {
        //     setIsReasonApplyValid(false);
        // } else {
        //     setIsReasonApplyValid(true);
        // }

        const data = new FormData(event.currentTarget);
        console.log(data);

        try {
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
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card>
                                <CardContent>
                                    <Box display="flex" alignItems="center" mb={2}>
                                        <Avatar src={profile.profilePicture} alt={profile.fullName} />
                                        <Box ml={2}>
                                            <Typography variant="h6">{profile.fullName}</Typography>

                                        </Box>
                                        <IconButton onClick={() => handleOpenModal(index)} sx={{ marginLeft: 'auto' }}>
                                            <EditIcon />
                                        </IconButton>
                                    </Box>

                                    <Typography variant="body1" gutterBottom>
                                        {`Description: ${profile.shortDescription}` || 'No Name'}
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary">
                                        {`Created Date: ${profile.createdDate}` || 'None'}
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary">
                                        {`Status: ${profile.status}` || 'None'}
                                    </Typography>

                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
            </Grid>
            <Box mt={2} display="flex" justifyContent="center">
                <Button onClick={handlePrevPage} disabled={currentPage === 0}>
                    Previous
                </Button>
                <Button onClick={handleNextPage} disabled={currentPage >= totalPages - 1}>
                    Next
                </Button>
            </Box>
            <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={() => handleOpenModal()}
                sx={{ mt: 3 }}
            >
                Add Profile
            </Button>
            <Modal open={openModal} onClose={handleCloseModal}>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: { xs: '80%', sm: '60%', md: '40%' },
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                    }}
                >
                    <Typography variant="h6" mb={2}>
                        {editIndex !== null ? 'Edit Profile' : 'Add Profile'}
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'left',
                            alignItems: 'center',
                            gap: 2,
                        }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="fullName"
                            label="Full Name"
                            name="fullName"
                            autoComplete="name"
                            value={newProfileInfo.fullName}
                            onChange={(e) => setNewProfileInfo({ ...newProfileInfo, fullName: e.target.value })}
                            error={!isUsernameValid}
                            helperText={!isUsernameValid && 'Username must be at least 5 characters long'}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            id="shortDescription"
                            label="Short Description"
                            name="shortDescription"
                            value={newProfileInfo.shortDescription}
                            onChange={(e) => setNewProfileInfo({ ...newProfileInfo, shortDescription: e.target.value })}
                        />
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'left',
                            alignItems: 'center',
                            gap: 2,
                        }}
                    >
                        <TextField
                            margin="normal"
                            fullWidth
                            id="googleMeetUrl"
                            label="Google Meet URL"
                            name="googleMeetUrl"
                            autoComplete="url"
                            value={newProfileInfo.googleMeetUrl}
                            onChange={(e) => setNewProfileInfo({ ...newProfileInfo, googleMeetUrl: e.target.value })}
                        />

                        <TextField
                            margin="normal"
                            fullWidth
                            id="linkedinUrl"
                            label="LinkedIn URL"
                            name="linkedinUrl"
                            value={newProfileInfo.linkedinUrl}
                            onChange={(e) => setNewProfileInfo({ ...newProfileInfo, linkedinUrl: e.target.value })}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            id="facebookUrl"
                            label="Facebook URL"
                            name="facebookUrl"
                            value={newProfileInfo.facebookUrl}
                            onChange={(e) => setNewProfileInfo({ ...newProfileInfo, facebookUrl: e.target.value })}
                        />

                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'left',
                            alignItems: 'center',
                            gap: 2,
                        }}
                    >
                        <TextField
                            margin="normal"
                            fullWidth
                            id="requirement"
                            label="Requirement"
                            name="requirement"
                            value={newProfileInfo.requirement}
                            onChange={(e) => setNewProfileInfo({ ...newProfileInfo, requirement: e.target.value })}
                        />

                        <TextField
                            margin="normal"
                            fullWidth
                            id="skillLevel"
                            label="Skill Level"
                            name="skillLevel"
                            value={newProfileInfo.skillLevel}
                            onChange={(e) => setNewProfileInfo({ ...newProfileInfo, skillLevel: e.target.value })}
                        />


                    </Box>


                    <TextField
                        margin="normal"
                        fullWidth
                        multiline
                        minRows={4}
                        maxRows={6}
                        id="description"
                        label="Description"
                        name="description"
                        value={newProfileInfo.description}
                        onChange={(e) => setNewProfileInfo({ ...newProfileInfo, description: e.target.value })}
                    />
                    <Autocomplete
                        multiple
                        id="skills"
                        options={skillsList}
                        freeSolo
                        value={newProfileInfo.skills}
                        onChange={(event, newValue) => setNewProfileInfo({ ...newProfileInfo, skills: newValue })}
                        renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                                <Chip key={index} variant="outlined" label={option.name} {...getTagProps({ index })} />
                            ))
                        }
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                label="Skills"
                                placeholder="Select or type skills"
                            />
                        )}
                    />


                    <TextField
                        margin="normal"
                        fullWidth
                        id="profilePicture"
                        label="Profile Picture URL"
                        name="profilePicture"
                        value={newProfileInfo.profilePicture}
                        onChange={(e) => setNewProfileInfo({ ...newProfileInfo, profilePicture: e.target.value })}
                    />
                    <input
                        type="file"
                        accept="image/*"
                        id="profilePicture"
                        name="profilePicture"
                        onChange={(e) => setNewProfileInfo({ ...newProfileInfo, profilePicture: e.target.files[0] })}
                    />


                    <Box mt={2} display="flex" justifyContent="flex-end">
                        <Button onClick={handleCloseModal} sx={{ mr: 2 }}>
                            Cancel
                        </Button>
                        <Button variant="contained" color="primary" type="submit">
                            {editIndex !== null ? 'Save Changes' : 'Create Profile'}
                        </Button>
                    </Box>
                </Box>
            </Modal>

        </Container>
    );
};

export default ProfileBox;

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
import SkillAPI from '~/API/SkillAPI';

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
    const [mentorSkills, setMentorSkills] = useState([]);

    const [selectedProfileId, setSelectedProfileId] = useState(null);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [currentSkill, setCurrentSkill] = useState('');

    const [skills, setSkills] = useState([]);
    const profilesPerPage = 3;
    const totalPages = Math.ceil(profiles.length / profilesPerPage);

    useEffect(() => {
        // Fetch skills list from API
        const fetchSkills = async () => {
            try {
                const skillData = await SkillAPI.getAll();
                setSkills(skillData);
                console.log(skillData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Fetch profiles from the API
        const fetchProfiles = async () => {
            try {
                const mentorId = StorageService.getItem('userInfo').mentorId;
                const profileData = await getMentorProfileData(mentorId);
                setProfiles([profileData]);
                setMentorSkills(profileData.skills);
            } catch (error) {
                console.error('Error fetching profiles:', error);
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

    // const handleCreateProfile = async () => {
    //     try {
    //         if (editIndex !== null) {
    //             const updatedProfiles = profiles.map((profile, index) =>
    //                 index === editIndex ? newProfileInfo : profile,
    //             );
    //             setProfiles(updatedProfiles);
    //         } else {
    //             const newProfile = { ...newProfileInfo, status: 'Active' }; // Ensure new profiles start as 'Active'
    //             const createdProfile = await createMentorProfile(newProfile); // API call to create new profile
    //             setProfiles([...profiles, createdProfile]);
    //         }
    //         setOpenModal(false);
    //         setNewProfileInfo({
    //             id: '',
    //             createdDate: '',
    //             modifiedDate: '',
    //             createdBy: '',
    //             modifiedBy: '',
    //             linkedinUrl: '',
    //             facebookUrl: '',
    //             googleMeetUrl: '',
    //             requirement: '',
    //             description: '',
    //             shortDescription: '',
    //             profilePicture: '',
    //             status: '',
    //             fullName: '',
    //             skills: [],
    //             skillLevel: '',
    //         });
    //     } catch (error) {
    //         console.error('Error creating/updating profile:', error);
    //     }
    // };
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

        const data = new FormData(event.currentTarget);

        const profileData = {
            createMentorProfileRequest: {
                mentorId: StorageService.getItem('userInfo').mentorId,

                linkedinUrl: data.get('linkedinUrl'),
                requirement: data.get('requirement'),
                description: data.get('description'),
                shortDescription: data.get('shortDescription'),
                facebookUrl: data.get('facebookUrl'),
                googleMeetUrl: data.get('googleMeetUrl'),

                profilePicture: StorageService.getItem('userInfo').profilePicture,
                availablestatus: "ACTIVE",



            },
            skills: selectedSkills,
        };

        const url = editIndex !== null
            ? `https://tortee-463vt.ondigitalocean.app/api/https://tortee-463vt.ondigitalocean.app/api/v1/mentor-profile/update`
            : `https://tortee-463vt.ondigitalocean.app/api/v1/mentor-profile/create-new-mentor-profile-skills`;

        const method = editIndex !== null ? 'PUT' : 'POST';

        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(profileData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Form data submitted successfully:', result);
                handleCloseModal();  // Close the modal on successful submission
            } else {
                console.error('Error submitting form data:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };

    const handleAddSkill = () => {
        if (currentSkill && !selectedSkills.includes(currentSkill)) {
            console.log(currentSkill);
            setSelectedSkills([...selectedSkills, currentSkill]);
            setCurrentSkill('');
        }
    };

    const handleDeleteSkill = (skillToDelete) => () => {
        setSelectedSkills(selectedSkills.filter((skill) => skill !== skillToDelete));
    };

    // const handleProfileClick = async (oldProfileId, newProfileId) => {
    //     setSelectedProfileId(newProfileId);
    //     try {
    //         const response = await fetch(`https://tortee-463vt.ondigitalocean.app/api/v1/campaign-mentor-profile/swap-mentor-profile/${oldProfileId}?campaignId=${campaignId}&newMentorProfile=${newProfileId}`, {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //         });
    //
    //         if (response.ok) {
    //             const result = await response.json();
    //             console.log('Profile swapped successfully:', result);
    //             // Handle success (e.g., update the UI, show a success message)
    //         } else {
    //             console.error('Error swapping profile:', response.statusText);
    //         }
    //     } catch (error) {
    //         console.error('Error swapping profile:', error);
    //     }
    // };

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
                            <Card
                                sx={{
                                    border: selectedProfileId === profile.id ? '2px solid green' : 'none',
                                    cursor: 'pointer',
                                }}
                                // onClick={() => handleProfileClick(
                                //
                                //     profile.id
                                // )}
                            >
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
                                        {`Description: ${profile.shortDescription}` || 'No Description'}
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
                    </Box>

                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'left',
                            gap: 3,
                        }}
                    >
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={skills}
                            getOptionLabel={(option) => option.name}
                            onChange={(event, newValue) => setCurrentSkill(newValue.name)}
                            sx={{ width: '80%' }}
                            renderInput={(params) => <TextField {...params} label="Skill" />}
                        />
                        <Button variant="contained" onClick={handleAddSkill}>
                            Add Skill
                        </Button>
                    </Box>
                    {selectedSkills.length > 0 && (
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                            {selectedSkills.map((skill, index) => (
                                <Chip key={index} label={skill} onDelete={handleDeleteSkill(skill)} />
                            ))}
                        </Box>
                    )}

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
                    </Box>

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

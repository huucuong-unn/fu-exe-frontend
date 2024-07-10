import {
    Container,
    TextField,
    Button,
    Box,
    Typography as TypographyMaterial,
    Autocomplete,
    Chip,
    Avatar,
} from '@mui/material';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SkillAPI from '~/API/SkillAPI';
import AccountAPI from '~/API/AccountAPI';
import storageService from '~/components/StorageService/storageService';

function CreateMentorProfile() {
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [currentSkill, setCurrentSkill] = useState('');

    const [skills, setSkills] = useState([]);

    const [imageError, setImageError] = useState(false);
    const [imageHelperText, setImageHelperText] = useState('');
    const [imagePreview, setImagePreview] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [imageSelected, setImageSelected] = useState(false);

    const handleAddSkill = () => {
        if (currentSkill && !selectedSkills.includes(currentSkill)) {
            setSelectedSkills([...selectedSkills, currentSkill]);
            setCurrentSkill('');
        }
    };

    const handleDeleteSkill = (skillToDelete) => () => {
        setSelectedSkills(selectedSkills.filter((skill) => skill !== skillToDelete));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const skillData = await SkillAPI.getAll();
                setSkills(skillData);
                console.log(skillData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileType = file.type;
            const validImageTypes = ['image/jpeg', 'image/jpg', 'image/png'];
            if (validImageTypes.includes(fileType)) {
                setImageError(false);
                setImageHelperText('');
                const reader = new FileReader();
                reader.onload = () => {
                    setImagePreview(reader.result);
                };
                reader.readAsDataURL(file);
                setImageFile(file);
            } else {
                setImageError(true);
                setImageHelperText('Only JPEG, JPG, and PNG files are allowed.');
                setImagePreview(null);
                setImageFile(null);
            }
        }
    };

    const handleRemoveImage = (setImagePreview, setImageFile, setImageError, setImageHelperText) => {
        setImagePreview(null);
        setImageFile(null);
        setImageError(false);
        setImageHelperText('');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        data.append('roleName', 'mentor');

        // Append `createAccountRequest` fields to FormData
        data.append('createAccountRequest.username', data.get('username'));
        data.append('createAccountRequest.password', data.get('password'));
        data.append('createAccountRequest.email', data.get('email'));
        data.append('createAccountRequest.avatarUrl', data.get('avatarUrl'));
        data.append('createAccountRequest.roleName', data.get('roleName'));

        // Append `requestObject` fields to FormData
        data.append('mentorRequest.mentorProfileRequest.linkedinUrl', data.get('linkedinUrl'));
        data.append('mentorRequest.mentorProfileRequest.requirement', data.get('requirement'));
        data.append('mentorRequest.mentorProfileRequest.description', data.get('description'));
        data.append('mentorRequest.mentorProfileRequest.shortDescription', data.get('shortDescription'));
        data.append('mentorRequest.mentorProfileRequest.facebookUrl', data.get('facebookUrl'));
        data.append('mentorRequest.mentorProfileRequest.googleMeetUrl', data.get('googleMeetUrl'));
        data.append('mentorRequest.companyId', storageService.getItem('userInfo').companyId);
        data.append('mentorRequest.fullName', data.get('fullName'));

        data.append('mentorRequest.skillNames', selectedSkills);

        try {
            const result = await AccountAPI.createAccountForMentor(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Container id="companies" sx={{ py: { xs: 8, sm: 16 }, padding: { lg: 16 } }}>
            <TypographyMaterial variant="h4" sx={{ mb: { xs: 2, sm: 4 } }}>
                Create mentor profile
            </TypographyMaterial>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    justifyContent: 'center',
                    gap: 3,
                    border: '1px solid #ccc',
                    padding: 2,
                    borderRadius: 3,
                }}
            >
                <TextField
                    type="file"
                    id="avatarUrl"
                    name="avatarUrl"
                    style={{ display: 'none' }}
                    onChange={handleImageUpload}
                    accept="image/jpeg, image/jpg, image/png"
                />

                <Avatar
                    alt="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.svgrepo.com%2Fsvg%2F452030%2Favatar-default&psig=AOvVaw2Eepet3Jt6CuwNIc10izZr&ust=1718112366877000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOi0-r2R0YYDFQAAAAAdAAAAABAE"
                    src={imagePreview}
                    sx={{
                        width: 90,
                        height: 90,
                        border: 'solid 2px black',
                        mt: 2,
                        ml: '50%',
                        transform: 'translate(-50%)',
                    }}
                    helperText="Avatar"
                />
                <Button
                    variant="contained"
                    sx={{ mt: 2, ml: '50%', transform: 'translate(-50%)' }}
                    onClick={imageSelected ? handleRemoveImage : () => document.getElementById('avatarUrl').click()}
                >
                    {imageSelected ? 'Remove Avatar' : 'Please Choose Avatar'}
                </Button>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'left',
                        alignItems: 'center',
                        gap: 2,
                        width: '100%',
                    }}
                >
                    <TextField
                        name="username"
                        required
                        id="outlined-required"
                        label="Username"
                        sx={{ width: '100%' }}
                    />
                    <TextField
                        name="phoneNumber"
                        required
                        id="outlined-required"
                        label="Phone number"
                        sx={{ width: '100%' }}
                    />
                </Box>
                <TextField required name="email" id="outlined-required" label="Email" sx={{ width: '100%' }} />

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'left',
                        alignItems: 'center',
                        gap: 2,
                        width: '100%',
                    }}
                >
                    <TextField
                        name="password"
                        required
                        id="outlined-required"
                        label="Password"
                        sx={{ width: '100%' }}
                    />
                    <TextField required id="outlined-required" label="Confirm Password" sx={{ width: '100%' }} />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'left',
                        alignItems: 'center',
                        gap: 2,
                        width: '100%',
                    }}
                >
                    <TextField
                        name="fullName"
                        required
                        id="outlined-required"
                        label="Full Name"
                        sx={{ width: '100%' }}
                    />
                </Box>

                <TextField
                    id="outlined-multiline-static"
                    name="description"
                    label="Description"
                    multiline
                    rows={5}
                    sx={{ width: '100%' }}
                />
                <TextField
                    id="outlined-multiline-static"
                    name="shortDescription"
                    jk
                    label="Short Description"
                    multiline
                    rows={3}
                    sx={{ width: '100%' }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'left',
                        alignItems: 'center',
                        gap: 2,
                        width: '100%',
                    }}
                >
                    <TextField
                        name="linkedinUrl"
                        required
                        id="outlined-required"
                        label="LinkedIn Url"
                        sx={{ width: '100%' }}
                    />
                    <TextField
                        name="facebookUrl"
                        required
                        id="outlined-required"
                        label="Facebook Url"
                        sx={{ width: '100%' }}
                    />
                    <TextField
                        name="googleMeetUrl"
                        required
                        id="outlined-required"
                        label="Google Meet Url"
                        sx={{ width: '100%' }}
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
                <TextField
                    id="outlined-multiline-static"
                    name="requirement"
                    label="Require"
                    multiline
                    rows={3}
                    sx={{ width: '100%' }}
                />
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'right',
                        gap: 3,
                        width: '100%',
                    }}
                >
                    <Link to="/company/create-mentor-profile">
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                backgroundColor: '#365E32',
                                '&:hover': {
                                    backgroundColor: '#508D4E',
                                },
                            }}
                        >
                            Create
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Container>
    );
}

export default CreateMentorProfile;

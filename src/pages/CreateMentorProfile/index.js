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
import { useState } from 'react';

function CreateMentorProfile() {
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [currentSkill, setCurrentSkill] = useState('');

    const skills = ['Java', 'C#', 'Python'];

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
        <Container id="companies" sx={{ py: { xs: 8, sm: 16 }, padding: { lg: 16 } }}>
            <TypographyMaterial variant="h4" sx={{ mb: { xs: 2, sm: 4 } }}>
                Create mentor profile
            </TypographyMaterial>
            <Box
                component="form"
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
                <Box
                    sx={{
                        mt: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                    }}
                >
                    <Avatar
                        alt="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.svgrepo.com%2Fsvg%2F452030%2Favatar-default&psig=AOvVaw2Eepet3Jt6CuwNIc10izZr&ust=1718112366877000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOi0-r2R0YYDFQAAAAAdAAAAABAE"
                        sx={{ width: 90, height: 90, border: 'solid 2px black' }}
                        helperText="Avatar"
                    />
                    <Button variant="contained" sx={{ mt: 2 }}>
                        Please Choose Avatar
                    </Button>
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
                    <TextField required id="outlined-required" label="Username" sx={{ width: '100%' }} />
                    <TextField required id="outlined-required" label="Phone number" sx={{ width: '100%' }} />
                </Box>
                <TextField required id="outlined-required" label="Email" sx={{ width: '100%' }} />

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'left',
                        alignItems: 'center',
                        gap: 2,
                        width: '100%',
                    }}
                >
                    <TextField required id="outlined-required" label="Password" sx={{ width: '100%' }} />
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
                    <TextField required id="outlined-required" label="Full Name" sx={{ width: '100%' }} />
                </Box>

                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={5}
                    sx={{ width: '100%' }}
                />
                <TextField
                    id="outlined-multiline-static"
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
                    <TextField required id="outlined-required" label="LinkedIn Url" sx={{ width: '100%' }} />
                    <TextField required id="outlined-required" label="Facebook Url" sx={{ width: '100%' }} />
                    <TextField required id="outlined-required" label="Google Meet Url" sx={{ width: '100%' }} />
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
                        value={currentSkill}
                        onChange={(event, newValue) => setCurrentSkill(newValue)}
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
                <TextField id="outlined-multiline-static" label="Require" multiline rows={3} sx={{ width: '100%' }} />
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

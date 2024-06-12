import { Container, TextField, Button, Box, Typography as TypographyMaterial, Autocomplete, Chip } from '@mui/material';

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
                }}
            >
                <TextField required id="outlined-required" label="Name" sx={{ width: '50%' }} />
                <TextField required id="outlined-required" label="Linkedin" sx={{ width: '50%' }} />
                <TextField required id="outlined-required" label="Facebook" sx={{ width: '50%' }} />
                <TextField required id="outlined-required" label="Google Meet" sx={{ width: '50%' }} />
                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={5}
                    sx={{ width: '50%' }}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Short Description"
                    multiline
                    rows={3}
                    sx={{ width: '50%' }}
                />
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
                        sx={{ width: 350 }}
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
                <TextField id="outlined-multiline-static" label="Require" multiline rows={3} sx={{ width: '50%' }} />
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'right',
                        gap: 3,
                        width: '50%',
                    }}
                >
                    <Link to="/company/create-mentor-profile">
                        <Button type="submit" variant="contained" sx={{ backgroundColor: '#365E32' }}>
                            Create
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Container>
    );
}

export default CreateMentorProfile;

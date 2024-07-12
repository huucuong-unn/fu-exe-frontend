const getSkillsData = async (page = 1, limit = 10) => {
    try {
        const response = await fetch(
            `https://tortee-463vt.ondigitalocean.app/api/v1/skill?page=${page}&limit=${limit}`
        );
        if (!response.ok) {
            throw new Error('Failed to fetch skills');
        }

        const data = await response.json();

        // Assuming the response contains an array of skills
        const skills = data.map(skill => ({
            id: skill.id,
            createdDate: new Date(skill.createdDate).toLocaleString(),
            modifiedDate: new Date(skill.modifiedDate).toLocaleString(),
            createdBy: skill.createdBy,
            modifiedBy: skill.modifiedBy,
            label: skill.name, // Use 'label' for Autocomplete
            major: skill.major ? {
                id: skill.major.id,
                createdDate: new Date(skill.major.createdDate).toLocaleString(),
                modifiedDate: new Date(skill.major.modifiedDate).toLocaleString(),
                createdBy: skill.major.createdBy,
                modifiedBy: skill.major.modifiedBy,
                name: skill.major.name,
                description: skill.major.description,
                status: skill.major.status,
            } : null,
            status: skill.status,
        }));

        return skills;
    } catch (error) {
        console.error('Error fetching skills:', error);
        throw error;
    }
};

export default getSkillsData;

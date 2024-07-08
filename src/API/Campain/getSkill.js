const getSkillsData = async (page = 1, limit = 10) => {
    try {
        const response = await fetch(
            `https://tortee-463vt.ondigitalocean.app/api/v1/skill?page=${page}&limit=${limit}`
        );
        if (!response.ok) {
            throw new Error('Failed to fetch skills');
        }

        const data = await response.json();

        const skills= {
            id: data.id,
            createdDate: new Date(data.createdDate).toLocaleString(),
            modifiedDate: new Date(data.modifiedDate).toLocaleString(),
            createdBy: data.createdBy,
            modifiedBy: data.modifiedBy,
            name: data.name,
            major: data.major ? {
                id: data.major.id,
                createdDate: new Date(data.major.createdDate).toLocaleString(),
                modifiedDate: new Date(data.major.modifiedDate).toLocaleString(),
                createdBy: data.major.createdBy,
                modifiedBy: data.major.modifiedBy,
                name: data.major.name,
                description: data.major.description,
                status: data.major.status,
            } : null,
            status: data.status,
        };

        return skills;
    } catch (error) {
        console.error('Error fetching skills:', error);
        throw error;
    }
};

export default getSkillsData;

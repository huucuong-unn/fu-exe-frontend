const getMentorProfileData = async (mentorId) => {
    try {
        const response = await fetch(
            `https://tortee-463vt.ondigitalocean.app/api/v1/mentor-profile/mentor/${mentorId}`
        );
        if (!response.ok) {
            throw new Error('Failed to fetch mentor profile');
        }

        const data = await response.json();

        const mentorProfile = {
            id: data.id,
            createdDate: new Date(data.createdDate).toLocaleString(),
            modifiedDate: new Date(data.modifiedDate).toLocaleString(),
            createdBy: data.mentorProfile.createdBy,
            modifiedBy: data.mentorProfile.modifiedBy,
            linkedinUrl: data.mentorProfile.linkedinUrl,
            facebookUrl: data.mentorProfile.facebookUrl,
            googleMeetUrl: data.mentorProfile.googleMeetUrl,
            requirement: data.mentorProfile.requirement,
            description: data.mentorProfile.description,
            shortDescription: data.mentorProfile.shortDescription,
            profilePicture: data.mentorProfile.profilePicture,
            status: data.mentorProfile.status,
            fullName: data.mentorProfile.fullName,
            skills: data.skills.map(skill => ({
                id: skill.id,
                createdDate: new Date(skill.createdDate).toLocaleString(),
                modifiedDate: new Date(skill.modifiedDate).toLocaleString(),
                createdBy: skill.createdBy,
                modifiedBy: skill.modifiedBy,
                name: skill.name,
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
            })),
            skillLevel: data.skillLevel,
        };

        return mentorProfile;
    } catch (error) {
        console.error('Error fetching mentor profile:', error);
        throw error;
    }
};

export default getMentorProfileData;

const getMenteesToApprove = async (mentorId, page = 1, limit = 10) => {
    try {
        const response = await fetch(
            `https://tortee-463vt.ondigitalocean.app/api/v1/application/mentor/${mentorId}?page=${page}&limit=${limit}`
        );
        if (!response.ok) {
            throw new Error('Failed to fetch mentees needing approval');
        }

        const data = await response.json();

        const mentees = data.listResult.map((mentee) => ({
            id: mentee.id,
            createdDate: new Date(mentee.createdDate).toLocaleDateString(),
            modifiedDate: new Date(mentee.modifiedDate).toLocaleDateString(),
            mentorId: mentee.mentor.id,
            mentorCompany: mentee.mentor.company.name,
            mentorCompanyDescription: mentee.mentor.company.description,
            mentorCompanyAvatarUrl: mentee.mentor.company.avatarUrl,
            mentorCompanyWebsiteUrl: mentee.mentor.company.companyWebsiteUrl,
            status: mentee.status,
            firstName: mentee.firstName,
            lastName: mentee.lastName,
            email: mentee.email,
            phone: mentee.phone,
            applicationDate: new Date(mentee.applicationDate).toLocaleDateString(),
        }));

        return {
            mentees: mentees,
            totalPages: data.totalPage,
            currentPage: page,
        };
    } catch (error) {
        console.error('Error fetching mentees needing approval:', error);
        throw error;
    }
};

export default getMenteesToApprove;

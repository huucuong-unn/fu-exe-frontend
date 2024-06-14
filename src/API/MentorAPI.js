import axiosClient from './AxiosClient';

const MentorAPI = {
    addAuthorizationHeader(config, includeAuthorization) {
        if (includeAuthorization) {
            const token = JSON.parse(localStorage.getItem('accessToken'));
            config.headers = {
                Authorization: `Bearer ${token}`,
                ...config.headers,
            };
        }
        return config;
    },

    getAllWithStatusActive(params, includeAuthorization = false) {
        const url = 'v1/mentor/mentor-with-all-information';
        const authorizedConfig = this.addAuthorizationHeader({ params }, includeAuthorization);
        return axiosClient.get(url, authorizedConfig);
    },

    getMentorByMentorProfileId(id, includeAuthorization = false) {
        const url = `v1/mentor/find-by-mentor-profile-id/${id}`;
        const authorizedConfig = this.addAuthorizationHeader({}, includeAuthorization);
        return axiosClient.get(url, authorizedConfig);
    },

    getMentorsByCompanyId(id, includeAuthorization = false) {
        const url = `v1/mentor/find-by-mentors-company-id/${id}`;
        const authorizedConfig = this.addAuthorizationHeader({}, includeAuthorization);
        return axiosClient.get(url, authorizedConfig);
    },
};

export default MentorAPI;

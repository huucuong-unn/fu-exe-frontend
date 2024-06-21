import axiosClient from './AxiosClient';
const ApplicationAPI = {
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

    createApplication(data, includeAuthorization = false) {
        return axiosClient.post('/v1/application/create', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },

    getApplicationByStudentId(studentId, params, includeAuthorization = false) {
        const url = `/v1/application/student/${studentId}`;
        const authorizedConfig = this.addAuthorizationHeader({ params }, includeAuthorization);
        return axiosClient.get(url, authorizedConfig);
    },
};
export default ApplicationAPI;

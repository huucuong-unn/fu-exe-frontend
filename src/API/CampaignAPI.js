import axiosClient from './AxiosClient';

const CampaignAPI = {
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
    getAll(params, includeAuthorization = false) {
        const url = 'v1/campaign';
        const authorizedConfig = this.addAuthorizationHeader({ params }, includeAuthorization);
        return axiosClient.get(url, authorizedConfig);
    },
    getById(id, includeAuthorization = false) {
        const url = `v1/campaign/${id}`;
        const authorizedConfig = this.addAuthorizationHeader({}, includeAuthorization);
        return axiosClient.get(url, authorizedConfig);
    },
    getAllWithoutPaging(includeAuthorization = false) {
        const url = 'v1/campaign/campaign-without-paging';
        const authorizedConfig = this.addAuthorizationHeader(includeAuthorization);
        return axiosClient.get(url, authorizedConfig);
    },

    getAllForAdmin(params, includeAuthorization = false) {
        const url = 'v1/campaign/campaign-for-admin';
        const authorizedConfig = this.addAuthorizationHeader({ params }, includeAuthorization);
        return axiosClient.get(url, authorizedConfig);
    },
};

export default CampaignAPI;

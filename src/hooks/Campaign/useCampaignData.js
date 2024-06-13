import { useState, useEffect } from 'react';
import getCampaignData from '~/API/Campaign/getCampaignData';

const useCampaignData = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getCampaignData();
                setCampaigns(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { campaigns, loading, error };
};

export default useCampaignData;

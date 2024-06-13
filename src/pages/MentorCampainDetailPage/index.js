import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress } from '@mui/material';

const CampaignDetail = () => {
    const { campaignName } = useParams();
    const [campaign, setCampaign] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Mock function to fetch campaign details based on campaignName
        const fetchCampaignDetail = async () => {
            // Replace with actual API call or data fetching logic
            // Mock data
            const mockData = {
                id: 1,
                name: campaignName,
                description: 'Campaign Description',
                startDate: '2024-01-01',
                endDate: '2024-12-31',
                status: 'ACTIVE', // or 'INACTIVE'
            };

            // Simulate API call delay
            await new Promise((resolve) => setTimeout(resolve, 1000));

            setCampaign(mockData);
            setLoading(false);
        };

        fetchCampaignDetail();
    }, [campaignName]);

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    if (!campaign) {
        return (
            <Box sx={{ p: 3 }}>
                <Typography variant="h4" gutterBottom>
                    Campaign Details
                </Typography>
                <Typography variant="body1">
                    Campaign with name "{campaignName}" not found or no details available.
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Campaign Details
            </Typography>
            <Box
                sx={{
                    p: 2,
                    border: '1px solid',
                    borderColor: 'grey.300',
                    borderRadius: 1,
                    boxShadow: 1,
                    textAlign: 'left',
                    maxWidth: '600px',
                }}
            >
                <Typography variant="h6">{campaign.name}</Typography>
                <Typography variant="body2">Description: {campaign.description}</Typography>
                <Typography variant="body2">Start Date: {campaign.startDate}</Typography>
                <Typography variant="body2">End Date: {campaign.endDate}</Typography>
                <Typography variant="body2">
                    Status:{' '}
                    <span style={{ fontWeight: 'bold', color: campaign.status === 'ACTIVE' ? 'green' : 'red' }}>
                        {campaign.status}
                    </span>
                </Typography>
            </Box>
        </Box>
    );
};

export default CampaignDetail;

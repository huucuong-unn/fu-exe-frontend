import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import useCampaignData from '~/API/Campain/getCampainData'; // Ensure the correct import path

const CampaignList = () => {
    const { campaigns, loading, error } = useCampaignData();

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return <Typography variant="body1">Error loading campaigns: {error.message}</Typography>;
    }

    if (!campaigns || campaigns.length === 0) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '80vh', // Adjust the height as needed
                    flexDirection: 'column',
                    p: 3,
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Campaigns
                </Typography>
                <Box
                    sx={{
                        p: 2,
                        border: '1px solid',
                        borderColor: 'grey.300',
                        borderRadius: 1,
                        boxShadow: 1,
                        textAlign: 'center',
                        width: '80%', // Adjust width as needed
                        mx: 'auto', // Center horizontally
                    }}
                >
                    <Typography variant="body1">No campaigns available for now</Typography>
                </Box>
            </Box>
        );
    }

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Campaigns
            </Typography>
            {campaigns.map((campaign) => (
                <Box
                    key={campaign.id}
                    sx={{
                        mb: 2,
                        p: 2,
                        border: '1px solid',
                        borderColor: 'grey.300',
                        borderRadius: 1,
                        boxShadow: 1,
                        '&:hover': { boxShadow: 3 },
                    }}
                >
                    <Typography variant="h6">{campaign.title}</Typography>
                    <Typography variant="body2">{campaign.description}</Typography>
                </Box>
            ))}
        </Box>
    );
};

export default CampaignList;

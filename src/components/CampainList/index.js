import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Pagination from '@mui/material/Pagination';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import useCampaignData from '~/hooks/Campaign/useCampaignData';
import { useNavigate, useLocation } from 'react-router-dom';

const CampaignList = () => {
    const { campaigns, loading, error, page, totalPages, setPage } = useCampaignData();
    const [selectedCampaign, setSelectedCampaign] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const handleCampaignChange = (event) => {
        setSelectedCampaign(event.target.value);
    };

    const navigateToCampaignDetail = (campaignName) => {
        navigate(`/campaign/${encodeURIComponent(campaignName)}`);
    };

    const filteredCampaigns = selectedCampaign
        ? campaigns.filter((campaign) => campaign.id === selectedCampaign)
        : campaigns;

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
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 3,
                width: '100%', // Ensure the inner Box takes full width
                maxWidth: '800px', // Optionally set a max-width for the list
                margin: '0 auto', // Center horizontally
            }}
        >
            <Typography variant="h4" gutterBottom>
                Campaigns
            </Typography>
            <FormControl sx={{ mb: 3, minWidth: 200 }}>
                <InputLabel id="select-campaign-label">Select Campaign</InputLabel>
                <Select
                    labelId="select-campaign-label"
                    id="select-campaign"
                    value={selectedCampaign}
                    label="Select Campaign"
                    onChange={handleCampaignChange}
                >
                    <MenuItem value="">
                        <em>All Campaigns</em>
                    </MenuItem>
                    {campaigns.map((campaign) => (
                        <MenuItem key={campaign.id} value={campaign.id}>
                            {campaign.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            {filteredCampaigns.map((campaign) => (
                <Box
                    key={campaign.id}
                    sx={{
                        mb: 2,
                        p: 2,
                        border: '1px solid',
                        borderColor: 'grey.300',
                        borderRadius: 1,
                        boxShadow: 1,
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: campaign.status === 'INACTIVE' ? 'grey.300' : 'background.paper',
                        '&:hover': { boxShadow: 3 },
                    }}
                >
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" noWrap>
                            {campaign.name}
                        </Typography>
                        <Tooltip title={`Start Date: ${campaign.startDate}`} arrow>
                            <Typography variant="body2" color="textSecondary" noWrap>
                                Start Date: {campaign.startDate}
                            </Typography>
                        </Tooltip>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography
                            variant="body2"
                            sx={{
                                fontWeight: 'bold',
                                color: campaign.status === 'ACTIVE' ? 'green' : 'text.primary',
                                backgroundColor: campaign.status === 'INACTIVE' ? 'error.main' : 'transparent',
                                padding: '4px 8px',
                                borderRadius: '4px',
                            }}
                        >
                            {campaign.status === 'INACTIVE' && 'ENDING'}
                            {campaign.status === 'ACTIVE' && 'PROGRESS'}
                            {!campaign.status && 'SOON'}
                        </Typography>
                        <Button
                            variant="outlined"
                            size="small"
                            onClick={() => navigateToCampaignDetail(campaign.name)}
                            sx={{ ml: 2 }}
                        >
                            View Details
                        </Button>
                    </Box>
                </Box>
            ))}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Pagination count={totalPages} page={page} onChange={handlePageChange} color="primary" />
            </Box>
        </Box>
    );
};

export default CampaignList;

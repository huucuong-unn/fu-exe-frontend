import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import {
    Box,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    Paper,
    IconButton,
    Tooltip,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import MenteeSection from '~/components/CampainDetailMenteeList'; // Importing MenteeSection component

const CampaignDetail = () => {
    // Simulated campaign data
    const campaign = {
        id: 1,
        name: 'Sample Campaign',
        description: 'Campaign Description',
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        status: 'ACTIVE',
        mentees: [
            { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
            { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
            { id: 3, name: 'Alice Brown', email: 'alice@example.com', status: 'Needs Approval' },
            { id: 4, name: 'Bob Johnson', email: 'bob@example.com', status: 'Needs Approval' },
            // Add more mentees as needed
        ],
    };

    const [filterStatus, setFilterStatus] = useState('All');
    const [page, setPage] = useState(1);
    const [menteesPerPage] = useState(5); // Number of mentees per page
    const [showApprovalList, setShowApprovalList] = useState(false);

    // Handler for selecting a mentee
    const handleSelectMentee = (mentee) => {
        console.log('Selected Mentee:', mentee);
        // Implement further logic if needed
    };

    // Handler for changing filter status
    const handleFilterChange = (event) => {
        setFilterStatus(event.target.value);
        setPage(1); // Reset page to 1 when filter changes
    };

    // Handler for changing page
    const handlePageChange = (event, value) => {
        setPage(value);
    };

    // Handler for mentee actions (approve/reject)
    const handleAction = (menteeId, action) => {
        // Implement your action logic here
        console.log(`Action ${action} performed for mentee with ID: ${menteeId}`);
    };

    return (
        <Box sx={{ p: 3 }}>
            <CampaignDetails campaign={campaign} />
            <Box mb={2}>
                <Button
                    variant="contained"
                    color={showApprovalList ? 'secondary' : 'primary'}
                    onClick={() => setShowApprovalList((prev) => !prev)}
                >
                    {showApprovalList ? 'Hide Mentees Needing Approval' : 'Show Mentees Needing Approval'}
                </Button>
            </Box>
            {showApprovalList && (
                <MenteesNeedingApproval
                    mentees={campaign.mentees.filter((mentee) => mentee.status === 'Needs Approval')}
                />
            )}
            <AllMentees
                mentees={campaign.mentees}
                filterStatus={filterStatus}
                currentMentees={campaign.mentees.filter((mentee) => {
                    if (filterStatus === 'All') {
                        return true;
                    }
                    return mentee.status === filterStatus;
                })}
                totalPages={Math.ceil(campaign.mentees.length / menteesPerPage)}
                currentPage={page}
                onPageChange={handlePageChange}
                onFilterChange={handleFilterChange}
                handleAction={handleAction}
                menteesPerPage={menteesPerPage}
            />
        </Box>
    );
};

const CampaignDetails = ({ campaign }) => (
    <Paper sx={{ p: 2, borderRadius: 1, boxShadow: 1, mb: 3 }}>
        <Typography variant="h6">{campaign.name}</Typography>
        <Typography variant="body2" gutterBottom>
            Description: {campaign.description}
        </Typography>
        <Typography variant="body2">Start Date: {campaign.startDate}</Typography>
        <Typography variant="body2">End Date: {campaign.endDate}</Typography>
        <Typography variant="body2" sx={{ fontWeight: 'bold', color: campaign.status === 'ACTIVE' ? 'green' : 'red' }}>
            Status: {campaign.status}
        </Typography>
    </Paper>
);

const MenteesNeedingApproval = ({ mentees }) => (
    <Paper sx={{ p: 2, borderRadius: 1, boxShadow: 1, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
            Mentees Needing Approval
        </Typography>
        {mentees.length > 0 ? (
            <MenteeSection
                mentees={mentees}
                filterStatus="Needs Approval"
                onSelectMentee={() => {}}
                handleAction={() => {}}
            />
        ) : (
            <Typography variant="body2">No mentees need approval at the moment.</Typography>
        )}
    </Paper>
);

const AllMentees = ({
    mentees,
    filterStatus,
    currentMentees,
    totalPages,
    currentPage,
    onPageChange,
    onFilterChange,
    handleAction,
    menteesPerPage,
}) => (
    <Paper sx={{ p: 2, borderRadius: 1, boxShadow: 1 }}>
        <Typography variant="h5" gutterBottom>
            All Mentees
        </Typography>
        <MenteeSection
            mentees={currentMentees}
            filterStatus={filterStatus}
            onSelectMentee={() => {}}
            onFilterChange={onFilterChange}
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={onPageChange}
            handleAction={handleAction}
            menteesPerPage={menteesPerPage}
        />
    </Paper>
);

export default CampaignDetail;

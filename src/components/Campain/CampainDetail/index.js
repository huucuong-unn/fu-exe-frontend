import React, { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    FormControl,
    InputLabel,
    Select,
    Paper,
    MenuItem,
    IconButton,
    Tooltip,
    Modal,
    Grid,
} from '@mui/material';
import Pagination from '@mui/material/Pagination';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import StarIcon from '@mui/icons-material/Star';
import MenteeSection from '~/components/Campain/CampainDetailMenteeList'; // Importing MenteeSection component

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
            { id: 1, name: 'John Doe', status: 'Active', face: '/path/to/john.png', cvLink: '/path/to/john-cv.pdf' },
            {
                id: 2,
                name: 'Jane Smith',
                status: 'Inactive',
                face: '/path/to/jane.png',
                cvLink: '/path/to/jane-cv.pdf',
            },
            {
                id: 2,
                name: 'Jane Smith',
                status: 'Needs Approval',
                face: '/path/to/jane.png',
                cvLink: '/path/to/jane-cv.pdf',
            },
            {
                id: 3,
                name: 'Jane Smith',
                status: 'Needs Approval',
                face: '/path/to/jane.png',
                cvLink: '/path/to/jane-cv.pdf',
            },
            { id: 4, name: 'John Doe', status: 'Active', face: '/path/to/john.png', cvLink: '/path/to/john-cv.pdf' },
            { id: 5, name: 'John Doe', status: 'Active', face: '/path/to/john.png', cvLink: '/path/to/john-cv.pdf' },
            { id: 6, name: 'John Doe', status: 'Active', face: '/path/to/john.png', cvLink: '/path/to/john-cv.pdf' },
            { id: 7, name: 'John Doe', status: 'Active', face: '/path/to/john.png', cvLink: '/path/to/john-cv.pdf' },
            { id: 8, name: 'John Doe', status: 'Active', face: '/path/to/john.png', cvLink: '/path/to/john-cv.pdf' },
            { id: 9, name: 'John Doe', status: 'Active', face: '/path/to/john.png', cvLink: '/path/to/john-cv.pdf' },
            // Add face and cvLink for other mentees as well
            // ...
        ],
    };

    const [filterStatus, setFilterStatus] = useState('All');
    const [page, setPage] = useState(1);
    const [menteesPerPage] = useState(5); // Number of mentees per page
    const [topMenteeIds, setTopMenteeIds] = useState([]);
    const [selectedMentee, setSelectedMentee] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [showApprovalList, setShowApprovalList] = useState(false);

    // Handler for selecting a mentee
    const handleSelectMentee = (mentee) => {
        console.log('Selected Mentee:', mentee);
        setSelectedMentee(mentee);
        setModalOpen(true);
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

    // Handler for moving a mentee to the top of the list
    const handleMoveToTop = (index, menteeId) => {
        const updatedTopMenteeIds = [...topMenteeIds];

        // Check if menteeId is already in the list, remove it; otherwise add it
        const existingIndex = updatedTopMenteeIds.indexOf(menteeId);
        if (existingIndex !== -1) {
            updatedTopMenteeIds.splice(existingIndex, 1);
        } else {
            updatedTopMenteeIds.push(menteeId);
        }

        // Update state with the new list of top mentee IDs
        setTopMenteeIds(updatedTopMenteeIds);
    };

    // Filter and sort mentees based on current filter status and top mentees
    const filteredMentees = campaign.mentees.filter((mentee) => {
        if (filterStatus === 'All') {
            return true;
        }
        return mentee.status === filterStatus;
    });

    // Sort mentees based on topMenteeIds
    const sortedMentees = [...filteredMentees].sort((a, b) => {
        const aIsTop = topMenteeIds.includes(a.id);
        const bIsTop = topMenteeIds.includes(b.id);
        if (aIsTop && !bIsTop) return -1;
        if (!aIsTop && bIsTop) return 1;
        return 0;
    });

    // Paginate mentees
    const startIndex = (page - 1) * menteesPerPage;
    const paginatedMentees = sortedMentees.slice(startIndex, startIndex + menteesPerPage);

    // Calculate total pages for pagination component
    const totalPages = Math.ceil(filteredMentees.length / menteesPerPage);

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
            <Box mb={2}>
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel id="filter-status-label">Filter by Status</InputLabel>
                    <Select
                        labelId="filter-status-label"
                        id="filter-status"
                        value={filterStatus}
                        onChange={handleFilterChange}
                        label="Filter by Status"
                    >
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="Active">Active</MenuItem>
                        <MenuItem value="Inactive">Inactive</MenuItem>
                        <MenuItem value="Needs Approval">Needs Approval</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ border: '1px solid #ccc', borderRadius: 1, overflow: 'hidden' }}>
                {paginatedMentees.map((mentee, index) => (
                    <Box
                        key={mentee.id}
                        sx={{
                            p: 2,
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: index % 2 === 0 ? '#ffffff' : '#f0f0f0',
                            borderBottom: '1px solid #ccc',
                        }}
                    >
                        <Box
                            sx={{
                                minWidth: 40,
                                height: 40,
                                backgroundColor: '#333',
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: 2,
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#fff',
                            }}
                        >
                            {startIndex + index + 1}
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="body1">{mentee.name}</Typography>
                            <Typography variant="body2">Status: {mentee.status}</Typography>
                        </Box>
                        {/* Star Icon for moving mentee to top */}
                        <Tooltip title="Move to Top">
                            <IconButton
                                color={topMenteeIds.includes(mentee.id) ? 'primary' : 'default'}
                                onClick={() => handleMoveToTop(startIndex + index, mentee.id)}
                                sx={{ mr: 1 }}
                            >
                                <StarIcon />
                            </IconButton>
                        </Tooltip>
                        {mentee.status === 'Needs Approval' && (
                            <Tooltip title="Approve">
                                <IconButton
                                    color="primary"
                                    onClick={() => handleAction(mentee.id, 'approve')}
                                    sx={{ mr: 1 }}
                                >
                                    <CheckIcon />
                                </IconButton>
                            </Tooltip>
                        )}
                        {mentee.status === 'Needs Approval' && (
                            <Tooltip title="Reject">
                                <IconButton color="secondary" onClick={() => handleAction(mentee.id, 'reject')}>
                                    <ClearIcon />
                                </IconButton>
                            </Tooltip>
                        )}
                        {/* Show Details Button */}
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => handleSelectMentee(mentee)}
                            sx={{ textTransform: 'none', ml: 1 }}
                        >
                            Show Details
                        </Button>
                    </Box>
                ))}
            </Box>
            {totalPages > 1 && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Pagination count={totalPages} page={page} onChange={handlePageChange} color="primary" />
                </Box>
            )}
            {paginatedMentees.length === 0 && (
                <Typography variant="body2" sx={{ fontStyle: 'italic', mt: 2 }}>
                    No mentees found matching the selected filter criteria.
                </Typography>
            )}

            {/* Modal to display mentee details */}
            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                aria-labelledby="mentee-details-modal"
                aria-describedby="mentee-details-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Typography variant="h6" id="modal-modal-title" sx={{ mb: 2 }}>
                        Mentee Details
                    </Typography>
                    {selectedMentee && (
                        <Grid container spacing={2}>
                            <Grid item>
                                {/* Display mentee's face */}
                                <img
                                    src={selectedMentee.face}
                                    alt="Mentee Face"
                                    style={{ width: 100, borderRadius: '50%' }}
                                />
                            </Grid>
                            <Grid item>
                                {/* Display mentee's name and status */}
                                <Typography variant="body1">{selectedMentee.name}</Typography>
                                <Typography variant="body2">Status: {selectedMentee.status}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                {/* Add a link to mentee's CV */}
                                <Typography variant="body2">
                                    <a href={selectedMentee.cvLink} target="_blank" rel="noopener noreferrer">
                                        View CV
                                    </a>
                                </Typography>
                            </Grid>
                        </Grid>
                    )}
                </Box>
            </Modal>
        </Box>
    );
};

const CampaignDetails = ({ campaign }) => (
    <Box sx={{ p: 2, borderRadius: 1, boxShadow: 1, mb: 3 }}>
        <Typography variant="h6">{campaign.name}</Typography>
        <Typography variant="body2" gutterBottom>
            Description: {campaign.description}
        </Typography>
        <Typography variant="body2">Start Date: {campaign.startDate}</Typography>
        <Typography variant="body2">End Date: {campaign.endDate}</Typography>
        <Typography variant="body2" sx={{ fontWeight: 'bold', color: campaign.status === 'ACTIVE' ? 'green' : 'red' }}>
            Status: {campaign.status}
        </Typography>
    </Box>
);
const MenteesNeedingApproval = ({ mentees }) => (
    <Paper sx={{ p: 2, borderRadius: 1, boxShadow: 1, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
            Mentees Needing Approval
        </Typography>
        {mentees.length > 0 ? (
            <MenteeSection
                mentees={mentees}
                filterStatus="Needs Approval" // Hardcode the filter status here
                onSelectMentee={() => {}}
                handleAction={() => {}}
                hideFilter
            />
        ) : (
            <Typography variant="body2">No mentees need approval at the moment.</Typography>
        )}
    </Paper>
);

export default CampaignDetail;

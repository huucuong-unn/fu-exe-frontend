import React from 'react';
import { Box, Typography, FormControl, InputLabel, Select, MenuItem, IconButton, Tooltip } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import StarIcon from '@mui/icons-material/Star'; // Import Star icon

const MenteeSection = ({
    mentees,
    filterStatus,
    onSelectMentee,
    onFilterChange,
    totalPages,
    currentPage,
    onPageChange,
    handleAction,
    menteesPerPage,
}) => {
    // Handler for moving a mentee to the top of the list
    const handleMoveToTop = (index) => {
        const updatedMentees = [...mentees];
        const selectedMentee = updatedMentees[index];
        updatedMentees.splice(index, 1); // Remove from current position
        updatedMentees.unshift(selectedMentee); // Add at the beginning
        // Update state or trigger further action if needed
        console.log('Moved to top:', selectedMentee);
    };

    return (
        <>
            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="filter-status-label">Filter by Status</InputLabel>
                <Select
                    labelId="filter-status-label"
                    id="filter-status"
                    value={filterStatus}
                    onChange={onFilterChange}
                    label="Filter by Status"
                >
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Active">Active</MenuItem>
                    <MenuItem value="Inactive">Inactive</MenuItem>
                    <MenuItem value="Needs Approval">Needs Approval</MenuItem>
                </Select>
            </FormControl>
            {mentees.length > 0 ? (
                <>
                    <Box sx={{ border: '1px solid #ccc', borderRadius: 1, overflow: 'hidden' }}>
                        {mentees.map((mentee, index) => (
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
                                    {index + 1}
                                </Box>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Typography variant="body1">{mentee.name}</Typography>
                                    <Typography variant="body2">Status: {mentee.status}</Typography>
                                </Box>
                                {/* Star Icon for moving mentee to top */}
                                <Tooltip title="Move to Top">
                                    <IconButton color="primary" onClick={() => handleMoveToTop(index)} sx={{ mr: 1 }}>
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
                            </Box>
                        ))}
                    </Box>
                    {totalPages > 1 && (
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                            <Pagination count={totalPages} page={currentPage} onChange={onPageChange} color="primary" />
                        </Box>
                    )}
                </>
            ) : (
                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                    No mentees found matching the selected filter criteria.
                </Typography>
            )}
        </>
    );
};

export default MenteeSection;

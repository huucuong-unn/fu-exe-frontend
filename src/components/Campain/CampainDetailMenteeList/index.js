import React, { useState } from 'react';
import { Box, Typography, IconButton, Tooltip, Modal, Button, Grid } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import StarIcon from '@mui/icons-material/Star';

const MenteeSection = ({ mentees, onSelectMentee, handleAction, totalPages, currentPage, onPageChange }) => {
    const [selectedMentee, setSelectedMentee] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    // Handler for opening modal and setting selected mentee
    const handleShowDetails = (mentee) => {
        setSelectedMentee(mentee);
        setModalOpen(true);
    };

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
                                {/* Show Details Button */}
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    onClick={() => handleShowDetails(mentee)}
                                    sx={{ textTransform: 'none', ml: 1 }}
                                >
                                    Show Details
                                </Button>
                                {mentee.status === 'Needs Approval' && (
                                    <>
                                        <Tooltip title="Approve">
                                            <IconButton
                                                color="primary"
                                                onClick={() => handleAction(mentee.id, 'approve')}
                                                sx={{ ml: 1 }}
                                            >
                                                <CheckIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Reject">
                                            <IconButton
                                                color="secondary"
                                                onClick={() => handleAction(mentee.id, 'reject')}
                                            >
                                                <ClearIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </>
                                )}
                            </Box>
                        ))}
                    </Box>
                    {totalPages > 1 && (
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                            <Pagination count={totalPages} page={currentPage} onChange={onPageChange} color="primary" />
                        </Box>
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
                                        <Box
                                            sx={{
                                                width: 80,
                                                height: 80,
                                                backgroundColor: '#ccc',
                                                borderRadius: '50%',
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={8}>
                                        {/* Display mentee's details */}
                                        <Typography variant="body1">{selectedMentee.name}</Typography>
                                        <Typography variant="body2">Status: {selectedMentee.status}</Typography>
                                        {/* Link to mentee's CV */}
                                        <Typography variant="body2">
                                            <a href={selectedMentee.cvLink} target="_blank" rel="noopener noreferrer">
                                                CV
                                            </a>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            )}
                        </Box>
                    </Modal>
                </>
            ) : (
                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                    No mentees found.
                </Typography>
            )}
        </>
    );
};

export default MenteeSection;

import React, { useState, useEffect } from 'react';
import {
    Grid,
    Box,
    Typography,
    IconButton,
    Tooltip,
    Button,
    Modal,
    TextField,
    Avatar,
    Chip,
    Pagination,
    PaginationItem,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import CloseIcon from '@mui/icons-material/Close';
import getMenteesToApprove from '~/API/Campain/getMenteesToApprove';
import StorageService from '~/components/StorageService/storageService';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Adjust the import path as necessary
import ApplicationAPI from '~/API/ApplicationAPI';

const MenteeSection = ({ campaignId, fetchMentees, handleAction }) => {
    const [mentees, setMentees] = useState([]);
    const [selectedMentee, setSelectedMentee] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [actionType, setActionType] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1); // Current page state
    const [totalPages, setTotalPages] = useState(1); // Total pages state

    useEffect(() => {
        fetchMenteesAp();
        fetchMentees();
    }, [page]);
    const fetchMenteesAp = async () => {
        setLoading(true);
        try {
            const mentorId = StorageService.getItem('userInfo').mentorId;
            if (!mentorId) {
                throw new Error('MentorId not found in storage.');
            }

            const menteesData = await getMenteesToApprove(mentorId, page); // Pass page number to API call
            setMentees(menteesData.mentees);
            setTotalPages(menteesData.totalPages); // Assuming your API response includes total pages
            setLoading(false);
            console.log(mentees);
        } catch (error) {
            console.error('Error fetching mentees:', error);
            setLoading(false);
        }
    };
    const handlePageChange = (event, value) => {
        setPage(value); // Update page state when pagination changes
    };

    const handleShowDetails = (mentee) => {
        setSelectedMentee(mentee);
        setModalOpen(true);
    };

    const approveMentee = async (applicationId) => {
        try {
            console.log(selectedMentee);
            const response = await ApplicationAPI.applicationApprove(selectedMentee.id);
            if (response.ok) {
                console.log('Mentee approved successfully');
                // Optionally, update the mentees list or show a success message
                fetchMenteesAp();
                fetchMentees();
            } else {
                console.error('Error approving mentee');
            }
        } catch (error) {
            console.error('Error approving mentee:', error);
        }
        fetchMenteesAp();
        fetchMentees();
    };

    const rejectMentee = async (applicationId, message) => {
        try {
            console.log(selectedMentee);
            const response = await ApplicationAPI.applicationReject(selectedMentee.id, message);
            if (response.ok) {
                console.log('Mentee approved successfully');
                // Optionally, update the mentees list or show a success message
                fetchMenteesAp();
                fetchMentees();
            } else {
                console.error('Error approving mentee');
            }
        } catch (error) {
            console.error('Error approving mentee:', error);
        }
        fetchMenteesAp();
        fetchMentees();
    };

    const handleConfirm = async () => {
        if (actionType === 'approve') {
             approveMentee(selectedMentee.id);
        } else {
            rejectMentee(selectedMentee.id, message);
        }
        await fetchMentees();
        await fetchMenteesAp();
        handleClose();
    };

    const handleOpen = (mentee, action) => {
        setSelectedMentee(mentee);
        setActionType(action);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setMessage('');
    };

    if (loading) {
        return <div>Loading...</div>;
    }

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
                                    <Typography variant="body1">{mentee.fullName}</Typography>
                                </Box>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    onClick={() => handleShowDetails(mentee)}
                                    sx={{ textTransform: 'none', ml: 1 }}
                                >
                                    Show Details
                                </Button>

                                <>
                                    <Tooltip title="Approve">
                                        <IconButton
                                            color="primary"
                                            onClick={() => handleOpen(mentee, 'approve')}
                                            sx={{ ml: 1 }}
                                        >
                                            <CheckIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Reject">
                                        <IconButton color="secondary" onClick={() => handleOpen(mentee, 'reject')}>
                                            <ClearIcon />
                                        </IconButton>
                                    </Tooltip>
                                </>
                            </Box>
                        ))}
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                            <Pagination
                                count={totalPages}
                                page={page}
                                onChange={handlePageChange}
                                renderItem={(item) => (
                                    <PaginationItem
                                        slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                                        {...item}
                                    />
                                )}
                                color="primary"
                            />
                        </Box>
                    </Box>
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
                                width: '80%',
                                maxWidth: 600,
                                bgcolor: 'background.paper',
                                boxShadow: 24,
                                p: 4,
                                borderRadius: 8,
                            }}
                        >
                            <IconButton
                                aria-label="close"
                                onClick={() => setModalOpen(false)}
                                sx={{
                                    position: 'absolute',
                                    top: 10,
                                    right: 10,
                                    color: 'text.secondary',
                                }}
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="h6" id="modal-modal-title" sx={{ mb: 2 }}>
                                Mentee Details
                            </Typography>
                            {selectedMentee && (
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item>
                                        <Avatar
                                            src={selectedMentee.student.account.avatarUrl}
                                            alt={selectedMentee.fullName}
                                            sx={{ width: 120, height: 120, borderBottom: '3px solid #007bff' }}
                                        />
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                                            {selectedMentee.fullName}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="body1">
                                            {' '}
                                            Email: {selectedMentee.student.account.email}
                                        </Typography>
                                        <Typography variant="body1">
                                            {' '}
                                            University: {selectedMentee.student.university.name}
                                        </Typography>
                                    </Grid>


                                    <Grid item xs={12} sx={{ textAlign: 'center', pt: 2 }}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            component="a"
                                            href={`https://tortee-image-upload.s3.ap-southeast-1.amazonaws.com/${selectedMentee.cvFile}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                textDecoration: 'none',
                                                color: 'white',
                                                textTransform: 'none',
                                                py: 2,
                                                px: 4,
                                                fontSize: '1.2rem',
                                            }}
                                        >
                                            View CV
                                        </Button>
                                    </Grid>

                                </Grid>
                            )}
                        </Box>
                    </Modal>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-title"
                        aria-describedby="modal-description"
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: 400,
                                bgcolor: 'background.paper',
                                border: '2px solid #000',
                                boxShadow: 24,
                                p: 4,
                            }}
                        >
                            <Typography id="modal-title" variant="h6" component="h2">
                                {actionType === 'approve' ? 'Approve Mentee' : 'Reject Mentee'}
                            </Typography>
                            {actionType !== 'approve' && (
                                <>
                                    <Typography id="modal-description" sx={{ mt: 2 }}>
                                        What do you want to tell {selectedMentee?.fullName}?
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={4}
                                        variant="outlined"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        sx={{ mt: 2 }}
                                    />
                                </>
                            )}

                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                                <Button onClick={handleClose} sx={{ mr: 2 }}>
                                    Cancel
                                </Button>
                                <Button variant="contained" color="primary" onClick={handleConfirm}>
                                    Confirm
                                </Button>
                            </Box>
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

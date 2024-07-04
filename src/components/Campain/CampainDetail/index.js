import { useState, useEffect } from 'react';
import {
    Grid,
    Box,
    Typography,
    Avatar,
    Card,
    CardContent,
    Stepper,
    Step,
    StepLabel,
    Pagination,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Tooltip,
    IconButton,
    Modal,
    Paper,
    Container
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import StarIcon from '@mui/icons-material/Star';
import MenteeSection from '~/components/Campain/CampainDetailMenteeList'; // Adjust the import path as necessary
import { useNavigate, useParams } from 'react-router-dom';
import getCampaignDetail from '~/API/Campain/getCampaignDetail'; // Adjust the import path as necessary
import getMenteesToApprove from '~/API/Campain/getMenteesToApprove';
import StorageService from '~/components/StorageService/storageService'; // Adjust the import path as necessary

const CampaignDetail = () => {
    const { campaignId } = useParams();
    const [campaign, setCampaign] = useState({});
    const [filterStatus, setFilterStatus] = useState('All');
    const [mentees, setMentees] = useState([]); // State for mentees


    const [page, setPage] = useState(1);
    const [menteesPerPage] = useState(5); // Number of mentees per page
    const [topMenteeIds, setTopMenteeIds] = useState([]);
    const [selectedMentee, setSelectedMentee] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [showApprovalList, setShowApprovalList] = useState(false);

    const steps = ['Company Application', 'Mentee Application', 'Training', 'Completion'];
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const [value, setValue] = useState(0);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchCampaign = async () => {
            try {
                const campaignData = await getCampaignDetail(campaignId);
                setCampaign(campaignData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCampaign();
    }, [campaignId]);

    useEffect(() => {
        const fetchMentees = async () => {
            try {
                // Assuming mentorId is stored in session storage
                const mentorId = StorageService.getItem('userInfo').mentorId;

                if (!mentorId) {
                    throw new Error('MentorId not found in storage hihi.');
                }

                const menteesData = await getMenteesToApprove(mentorId, page, menteesPerPage);
                setMentees(menteesData.mentees);
            } catch (error) {
                console.log('Error fetching mentees needing approval:', error);
            }
        };

        fetchMentees();
    }, [page, menteesPerPage]);


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

    // If campaign or mentees haven't been fetched yet, return null or a loading state
    if (!campaign.id || !mentees.length) {
        return null; // or loading state component
    }

    // Filter and sort mentees based on current filter status and top mentees
    const filteredMentees = mentees.filter((mentee) => {
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

    const handleItemClick = (index, mentorId) => {
        setSelectedItemIndex(index);
        navigate(`/mentor/${mentorId}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCreateMentor = () => {
        navigate('/company/create-mentor-account');
        window.scrollTo(0, 0);
    };





    const handleRowClick = (mentor) => {
        setSelectedMentee(mentor);
    };

    const handleCloseModal = () => {
        setSelectedMentee(null);
    };
    return (
        <Container id="mentors" sx={{ py: { xs: 8, sm: 16 }, padding: { lg: 16 } }}>
            <Grid container spacing={6}>
                <Grid item xs={12} md={12}>
                    <Card
                        variant="outlined"
                        sx={{
                            p: 3,
                            height: 'fit-content',
                            width: '100%',
                            background: 'none',
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                textAlign: 'left',
                                flexDirection: { xs: 'column', md: 'row' },
                                alignItems: { md: 'center' },
                                gap: 2.5,
                            }}
                        >
                            <Box>
                                <Avatar alt="avatar image" src={campaign?.img} sx={{ width: 150, height: 150 }} />
                            </Box>
                            <Box sx={{ textTransform: 'none' }}>
                                <Typography color="text.primary" variant="body1" fontWeight="bold" fontSize={'24px'}>
                                    Spring Campaign 2024
                                </Typography>
                                <Typography color="text.secondary" variant="body2" sx={{ my: 1 }} fontSize={'16px'}>
                                    1/1/2024 - 1/7/2024
                                </Typography>
                                <CardContent></CardContent>
                            </Box>
                        </Box>
                        <Box sx={{ width: '100%', marginTop: 2 }}>
                            <Stepper activeStep={2} alternativeLabel sx={{ transform: 'scale(1.1)' }}>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
            <Box sx={{ width: '100%', marginTop: 2 }}>
                <Card
                    variant="outlined"
                    sx={{
                        p: 3,
                        height: 'fit-content',
                        width: '100%',
                        background: 'none',
                        paddingLeft: 0,
                        paddingRight: 0,
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            textAlign: 'left',
                            flexDirection: 'column',
                            alignItems: { md: 'left' },
                            gap: 2.5,
                        }}
                    >
                        <Box
                            sx={{
                                marginLeft: 2,
                                marginRight: 2,
                                paddingBottom: 2,
                                borderBottom: '1px dashed #e0e0e0',
                            }}
                        >
                            <Typography color="text.primary" variant="body1" fontWeight="bold" fontSize={'24px'}>
                                General information
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3, 1fr)', // Tạo 3 cột với kích thước bằng nhau
                                gap: 2, // Khoảng cách giữa các ô
                                marginLeft: 2,
                                marginRight: 2,
                                paddingBottom: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    textAlign: 'left',
                                    flexDirection: 'column',
                                    alignItems: { md: 'start' },
                                    justifyContent: 'left',
                                }}
                            >
                                <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: 1 }}>
                                    <Typography color="gray" variant="h7">
                                        Number of session
                                    </Typography>
                                </Box>
                                <Typography color="black" variant="h6" fontWeight="bold">
                                    10 sessions
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    textAlign: 'left',
                                    flexDirection: 'column',
                                    alignItems: { md: 'start' },
                                    justifyContent: 'left',
                                }}
                            >
                                <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: 1 }}>
                                    <Typography color="gray" variant="h7">
                                        Number of online session
                                    </Typography>
                                </Box>
                                <Typography color="black" variant="h6" fontWeight="bold">
                                    10 sessions
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    textAlign: 'left',
                                    flexDirection: 'column',
                                    alignItems: { md: 'start' },
                                    justifyContent: 'left',
                                }}
                            >
                                <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: 1 }}>
                                    <Typography color="gray" variant="h7">
                                        Number of offline session
                                    </Typography>
                                </Box>
                                <Typography color="black" variant="h6" fontWeight="bold">
                                    10 sessions
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    textAlign: 'left',
                                    flexDirection: 'column',
                                    alignItems: { md: 'start' },
                                    justifyContent: 'left',
                                }}
                            >
                                <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: 1 }}>
                                    <Typography color="gray" variant="h7">
                                        Min duration of session
                                    </Typography>
                                </Box>
                                <Typography color="black" variant="h6" fontWeight="bold">
                                    1 hour
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    textAlign: 'left',
                                    flexDirection: 'column',
                                    alignItems: { md: 'start' },
                                    justifyContent: 'left',
                                }}
                            >
                                <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: 1 }}>
                                    <Typography color="gray" variant="h7">
                                        Company apply date
                                    </Typography>
                                </Box>
                                <Typography color="black" variant="h6" fontWeight="bold">
                                    {new Date(campaign?.companyApplyStartDate).toLocaleDateString('en-GB', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: 'numeric',
                                    })}
                                    -{' '}
                                    {new Date(campaign?.companyApplyEndDate).toLocaleDateString('en-GB', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: 'numeric',
                                    })}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    textAlign: 'left',
                                    flexDirection: 'column',
                                    alignItems: { md: 'start' },
                                    justifyContent: 'left',
                                }}
                            >
                                <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: 1 }}>
                                    <Typography color="gray" variant="h7">
                                        Student apply date
                                    </Typography>
                                </Box>
                                <Typography color="black" variant="h6" fontWeight="bold">
                                    {new Date(campaign?.menteeApplyStartDate).toLocaleDateString('en-GB', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: 'numeric',
                                    })}
                                    -{' '}
                                    {new Date(campaign?.menteeApplyEndDate).toLocaleDateString('en-GB', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: 'numeric',
                                    })}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    textAlign: 'left',
                                    flexDirection: 'column',
                                    alignItems: { md: 'start' },
                                    justifyContent: 'left',
                                }}
                            >
                                <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: 1 }}>
                                    <Typography color="gray" variant="h7">
                                        Tranning
                                    </Typography>
                                </Box>
                                <Typography color="black" variant="h6" fontWeight="bold">
                                    {new Date(campaign?.trainingStartDate).toLocaleDateString('en-GB', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: 'numeric',
                                    })}
                                    -{' '}
                                    {new Date(campaign?.trainingEndDate).toLocaleDateString('en-GB', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: 'numeric',
                                    })}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Card>
            </Box>
            <Box sx={{ width: '100%', marginTop: 2 }}>
                <Card
                    variant="outlined"
                    sx={{
                        p: 3,
                        height: 'fit-content',
                        width: '100%',
                        background: 'none',
                        paddingLeft: 0,
                        paddingRight: 0,
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            textAlign: 'left',
                            flexDirection: 'column',
                            alignItems: { md: 'left' },
                            gap: 2.5,
                        }}
                    >
                        <Box
                            sx={{
                                marginLeft: 2,
                                marginRight: 2,
                                paddingBottom: 2,
                                borderBottom: '1px dashed #e0e0e0',

                            }}
                        >
                            <Typography color="text.primary" variant="body1" fontWeight="bold" fontSize={'24px'}>
                                Campaign Overview
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                marginLeft: 2,
                                marginRight: 2,
                                paddingBottom: 2,
                                borderBottom: '1px dashed #e0e0e0',
                            }}
                        >
                            <Typography color="text.primary">{campaign?.description}</Typography>
                        </Box>
                    </Box>
                </Card>
            </Box>

            <Box mb={2}
                 sx={{
                     marginLeft: 2,
                     marginRight: 2,
                     marginTop: 1

                 }}>
                <Button
                    variant="contained"
                    color={showApprovalList ? 'secondary' : 'primary'}
                    onClick={() => setShowApprovalList((prev) => !prev)}
                >
                    {showApprovalList ? 'Hide Student Needing Approval' : 'Show Student Needing Approval'}
                </Button>
            </Box>
            {showApprovalList && (
                <MenteesNeedingApproval


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
                            <Typography variant="body1">{mentee.email}</Typography>
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
                                <Typography variant="body1">{selectedMentee.email}</Typography>
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
        </Container>
    );
};




const MenteesNeedingApproval = ({ mentees }) => (
    <Paper sx={{ p: 2, borderRadius: 1, boxShadow: 1, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
            Mentees Needing Approval
        </Typography>
       (
            <MenteeSection
                mentees={mentees}
                onSelectMentee={() => {}}
                handleAction={() => {}}
                hideFilter
            />
        ) : (
            <Typography variant="body2">No mentees need approval at the moment.</Typography>
        )
    </Paper>
);

export default CampaignDetail;

import { Box, Container, Divider } from '@mui/material';
import { MentorAbout } from '~/components/MentorAbout';
import { MentorFeedback } from '~/components/MentorFeedback';
import { MentorSkill } from '~/components/MentorSkill';
import { ShortMentorInfo } from '~/components/ShortMentorInfo';
import SimilarMentor from '~/components/SimilarMentors';

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MentorAPI from '~/API/MentorAPI';

export const MentorProfile = () => {
    const { mentorId } = useParams();
    const [mentor, setMentor] = useState({});

    useEffect(() => {
        const getMentorByMentorProfileId = async () => {
            const mentorData = await MentorAPI.getMentorByMentorProfileId(mentorId);
            setMentor(mentorData);
        };

        getMentorByMentorProfileId();
    }, [mentorId]);

    useEffect(() => {
        console.log(mentor);
    }, [mentor]);

    return (
        <Container sx={{ pt: 14 }}>
            <Box>
                <ShortMentorInfo
                    username={mentor?.mentorProfile?.mentorDTO?.account?.username}
                    profilePicture={mentor?.mentorProfile?.profilePicture}
                    shortDescription={mentor?.mentorProfile?.shortDescription}
                    linkedinURL={mentor?.mentorProfile?.linkedinUrl}
                    facebookURL={mentor?.mentorProfile?.facebookUrl}
                    googleMeetURL={mentor?.mentorProfile?.googleMeetUrl}
                    requirement={mentor?.mentorProfile?.requirement}
                />
                <MentorAbout description={mentor?.mentorProfile?.description} />
                <Divider />
                <MentorFeedback />
                <Divider />
                <MentorSkill skills={mentor.skills} />
                <Divider />
                <SimilarMentor companyId={mentor?.mentorProfile?.mentorDTO?.company?.id} />
            </Box>
        </Container>
    );
};

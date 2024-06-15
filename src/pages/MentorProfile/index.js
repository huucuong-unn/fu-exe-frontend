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
    const [similarMentor, setSimilarMentor] = useState([]);
    const [filteredSimilarMentor, setFilteredSimilarMentor] = useState([]);

    useEffect(() => {
        const getMentorByMentorProfileId = async () => {
            try {
                const mentorData = await MentorAPI.getMentorByMentorProfileId(mentorId);
                setMentor(mentorData);
            } catch (error) {
                console.log(error);
            }
        };

        getMentorByMentorProfileId();
    }, [mentorId]);

    useEffect(() => {
        const getMentorsByCompanyId = async () => {
            try {
                const mentorData = await MentorAPI.getMentorsByCompanyId(mentor?.mentorProfile?.mentorDTO?.company?.id);
                setSimilarMentor(mentorData);
            } catch (error) {
                console.log(error);
            }
        };

        getMentorsByCompanyId();
    }, [mentor]);

    useEffect(() => {
        try {
            if (similarMentor.length > 0) {
                const filteredMentors = similarMentor.filter((item) => item.mentorProfile.id !== mentorId);
                setFilteredSimilarMentor(filteredMentors);
            }
        } catch (error) {
            console.log(error);
        }
    }, [similarMentor, mentorId]);

    useEffect(() => {
        console.log(mentor);
    }, [mentor]);

    return (
        <Container sx={{ pt: 14 }}>
            <Box>
                {mentor && (
                    <ShortMentorInfo
                        username={mentor?.mentorProfile?.mentorDTO?.account?.username}
                        profilePicture={mentor?.mentorProfile?.profilePicture}
                        shortDescription={mentor?.mentorProfile?.shortDescription}
                        linkedinURL={mentor?.mentorProfile?.linkedinUrl}
                        facebookURL={mentor?.mentorProfile?.facebookUrl}
                        googleMeetURL={mentor?.mentorProfile?.googleMeetUrl}
                        requirement={mentor?.mentorProfile?.requirement}
                    />
                )}
                {mentor && <MentorAbout description={mentor?.mentorProfile?.description} />}
                <Divider />
                <MentorFeedback />
                <Divider />
                {mentor && <MentorSkill skills={mentor?.skills} />}
                <Divider />
                <SimilarMentor similarMentor={filteredSimilarMentor} />
            </Box>
        </Container>
    );
};

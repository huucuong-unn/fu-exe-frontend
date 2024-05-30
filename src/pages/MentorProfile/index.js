import { Box, Container, Divider } from '@mui/material';
import React from 'react';
import { MentorAbout } from '~/components/MentorAbout';
import { MentorFeedback } from '~/components/MentorFeedback';
import { MentorSkill } from '~/components/MentorSkill';
import { ShortMentorInfo } from '~/components/ShortMentorInfo';

export const MentorProfile = () => {
    return (
        <Container sx={{ pt: 14 }}>
            <Box>
                <ShortMentorInfo />
                <Divider />
                <MentorAbout />
                <Divider />
                <MentorSkill />
                <Divider />
                <MentorFeedback />
            </Box>
        </Container>
    );
};

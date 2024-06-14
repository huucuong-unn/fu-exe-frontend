import { Box, Button, Container, TextareaAutosize as BaseTextareaAutosize, Typography } from '@mui/material';
import React, { useState } from 'react';
import { styled } from '@mui/system';

const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    width: 70%;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${grey[900]};
    background: #fff;
    border: 2px solid ${grey[300]};
    box-shadow: 0px 2px 2px ${grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }

    &:focus-visible {
      outline: 0;
    }
  `,
);

export const Application = () => {
    const [text, setText] = useState('');

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleCheckMinText = (event) => {
        if (text.length < 50) {
            window.alert('Message length must exceed 50 characters');
        }
    };

    return (
        <Container sx={{ py: 20 }}>
            <Typography variant="h5" component="h3" sx={{ mb: 3 }}>
                Apply to Tortee
            </Typography>
            <Box sx={{ border: '1px solid #ccc', borderRadius: 5 }}>
                <Box sx={{ p: 3 }}>
                    <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                        {text.length}/50 min character
                    </Typography>
                    <Textarea
                        aria-label="minimum height"
                        minRows={10}
                        placeholder="Write a message to Tortee"
                        value={text}
                        onChange={handleTextChange}
                        minLength={50}
                    />
                    <br />
                    <Box>
                        <Typography>What to include in your message</Typography>
                        <Typography>
                            <b>1. Introduce yourself:</b> Describe your background and professional journey
                        </Typography>
                        <Typography>
                            <b>2. State your goal:</b> Share your aspirations and the steps you’ve taken so far
                        </Typography>
                        <Typography>
                            <b>3. Express your needs:</b> Tell Scott about the challenges in pursuing your goal and the
                            kind of help you’re looking for
                        </Typography>
                    </Box>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ width: { lg: '15%', md: '20%', xs: '80%' }, my: 4 }}
                        onClick={handleCheckMinText}
                    >
                        Apply
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

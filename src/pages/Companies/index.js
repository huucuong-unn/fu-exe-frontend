import { Container, Grid, TextField, Button, Typography as TypographyMaterial, Autocomplete } from '@mui/material';
import { AspectRatio, Avatar, Box, Card, IconButton, Typography, Link } from '@mui/joy';
import { Link as RouterLink } from 'react-router-dom';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

import { useState } from 'react';

function Companies() {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const locations = [
        'An Giang',
        'Ba Ria - Vung Tau',
        'Bac Giang',
        'Bac Kan',
        'Bac Lieu',
        'Bac Ninh',
        'Ben Tre',
        'Binh Dinh',
        'Binh Duong',
        'Binh Phuoc',
        'Binh Thuan',
        'Ca Mau',
        'Can Tho',
        'Cao Bang',
        'Da Nang',
        'Dak Lak',
        'Dak Nong',
        'Dien Bien',
        'Dong Nai',
        'Dong Thap',
        'Gia Lai',
        'Ha Giang',
        'Ha Nam',
        'Ha Noi',
        'Ha Tinh',
        'Hai Duong',
        'Hai Phong',
        'Hau Giang',
        'Hoa Binh',
        'Hung Yen',
        'Khanh Hoa',
        'Kien Giang',
        'Kon Tum',
        'Lai Chau',
        'Lam Dong',
        'Lang Son',
        'Lao Cai',
        'Long An',
        'Nam Dinh',
        'Nghe An',
        'Ninh Binh',
        'Ninh Thuan',
        'Phu Tho',
        'Phu Yen',
        'Quang Binh',
        'Quang Nam',
        'Quang Ngai',
        'Quang Ninh',
        'Quang Tri',
        'Soc Trang',
        'Son La',
        'Tay Ninh',
        'Thai Binh',
        'Thai Nguyen',
        'Thanh Hoa',
        'Thua Thien Hue',
        'Tien Giang',
        'TP Ho Chi Minh',
        'Tra Vinh',
        'Tuyen Quang',
        'Vinh Long',
        'Vinh Phuc',
        'Yen Bai',
    ];

    const companies = [
        {
            name: 'FPT Software',
            img: 'https://upload.wikimedia.org/wikipedia/commons/2/29/FPT_Software_Logo.png',
            NumberOfCampaignsParticipated: 5,
        },
        {
            name: 'Samsung',
            img: 'https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/300_186_2.png?$568_N_PNG$',
            NumberOfCampaignsParticipated: 10,
        },
        {
            name: 'Apple',
            img: 'https://pngimg.com/d/apple_logo_PNG19688.png',
            NumberOfCampaignsParticipated: 20,
        },
    ];

    return (
        <Container id="companies" sx={{ py: { xs: 8, sm: 16 }, padding: { lg: 16 } }}>
            <TypographyMaterial variant="h4" sx={{ mb: { xs: 2, sm: 4 } }}>
                3920 Companies in Total
            </TypographyMaterial>
            <Grid container spacing={6}>
                <Grid
                    item
                    xs={12}
                    md={12}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2,
                    }}
                >
                    <TextField
                        id="outlined-basic"
                        hiddenLabel
                        size="medium"
                        variant="outlined"
                        placeholder="Search by company"
                        inputProps={{
                            autoComplete: 'off',
                            'aria-label': 'Search by company',
                        }}
                        sx={{ width: { xs: '100%', sm: 'auto' }, flexGrow: 1 }}
                    />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={locations}
                        sx={{ minWidth: 180, width: { xs: '100%', sm: 'auto' } }}
                        renderInput={(params) => <TextField {...params} label="Locations" />}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            width: { xs: '100%', sm: 'auto' },
                            flexGrow: { xs: 1, sm: 0 },
                            height: '100%',
                            backgroundColor: '#365E32',
                        }}
                    >
                        Find Company
                    </Button>
                </Grid>
            </Grid>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: 4 }}>
                {companies.length > 0 &&
                    companies?.map((company, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box sx={{ minHeight: 350 }}>
                                <RouterLink to={'/company/id'} style={{ textDecoration: 'none' }}>
                                    <Card
                                        variant="outlined"
                                        sx={(theme) => ({
                                            width: 300,
                                            gridColumn: 'span 2',
                                            flexDirection: 'row',
                                            flexWrap: 'wrap',
                                            overflow: 'hidden',
                                            gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
                                            transition: 'transform 0.3s, border 0.3s',
                                            '&:hover': {
                                                borderColor: theme.vars.palette.primary.outlinedHoverBorder,
                                                transform: 'translateY(-2px)',
                                            },
                                            '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' },
                                        })}
                                    >
                                        <AspectRatio
                                            variant="soft"
                                            sx={{
                                                flexGrow: 1,
                                                display: 'contents',
                                                '--AspectRatio-paddingBottom':
                                                    'clamp(0px, (100% - 360px) * 999, min(calc(100% / (16 / 9)), 300px))',
                                            }}
                                        >
                                            <img
                                                src="https://images.unsplash.com/photo-1492305175278-3b3afaa2f31f?auto=format&fit=crop&w=2000"
                                                loading="lazy"
                                                alt=""
                                            />
                                        </AspectRatio>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: 2,
                                                maxWidth: 200,
                                            }}
                                        >
                                            <Box sx={{ display: 'flex' }}>
                                                <div>
                                                    <Typography level="title-lg">
                                                        <Link
                                                            href="#container-responsive"
                                                            overlay
                                                            underline="none"
                                                            sx={{
                                                                color: 'text.primary',
                                                                '&.Mui-focusVisible:after': { outlineOffset: '-4px' },
                                                            }}
                                                        >
                                                            {company.name}
                                                        </Link>
                                                    </Typography>
                                                    <Typography level="body-sm">F-Town 1, Ho Chi Minh</Typography>
                                                </div>
                                                <IconButton
                                                    size="sm"
                                                    variant="plain"
                                                    color="neutral"
                                                    sx={{ ml: 'auto', alignSelf: 'flex-start' }}
                                                >
                                                    <FavoriteBorderRoundedIcon color="danger" />
                                                </IconButton>
                                            </Box>
                                            <AspectRatio
                                                variant="soft"
                                                sx={{
                                                    '--AspectRatio-paddingBottom':
                                                        'clamp(0px, (100% - 200px) * 999, 200px)',
                                                    pointerEvents: 'none',
                                                }}
                                            >
                                                <img alt="" src={company.img} />
                                            </AspectRatio>
                                            <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>
                                                <div>
                                                    <Typography level="body-xs">
                                                        Participated in {company.NumberOfCampaignsParticipated}{' '}
                                                        campaigns
                                                    </Typography>
                                                </div>
                                            </Box>
                                        </Box>
                                    </Card>
                                </RouterLink>
                            </Box>
                        </Grid>
                    ))}
            </Grid>
        </Container>
    );
}

export default Companies;

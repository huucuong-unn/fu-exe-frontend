import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';

import { BarChart, LineChart, axisClasses } from '@mui/x-charts';

function AdDashboard() {
    const chartSettingForBarChart = {
        xAxis: [
            {
                label: 'application',
            },
        ],
        width: 600,
        height: 400,
    };
    const datasetForBarChar = [
        {
            london: 59,
            paris: 57,
            newYork: 86,
            seoul: 21,
            month: 'Jan',
        },
        {
            london: 50,
            paris: 52,
            newYork: 78,
            seoul: 28,
            month: 'Fev',
        },
        {
            london: 47,
            paris: 53,
            newYork: 106,
            seoul: 41,
            month: 'Mar',
        },
        {
            london: 54,
            paris: 56,
            newYork: 92,
            seoul: 73,
            month: 'Apr',
        },
        {
            london: 57,
            paris: 69,
            newYork: 92,
            seoul: 99,
            month: 'May',
        },
        {
            london: 60,
            paris: 63,
            newYork: 103,
            seoul: 144,
            month: 'June',
        },
        {
            london: 59,
            paris: 60,
            newYork: 105,
            seoul: 319,
            month: 'July',
        },
        {
            london: 65,
            paris: 60,
            newYork: 106,
            seoul: 249,
            month: 'Aug',
        },
        {
            london: 51,
            paris: 51,
            newYork: 95,
            seoul: 131,
            month: 'Sept',
        },
        {
            london: 60,
            paris: 65,
            newYork: 97,
            seoul: 55,
            month: 'Oct',
        },
        {
            london: 67,
            paris: 64,
            newYork: 76,
            seoul: 48,
            month: 'Nov',
        },
        {
            london: 61,
            paris: 70,
            newYork: 103,
            seoul: 25,
            month: 'Dec',
        },
    ];

    const chartSetting = {
        yAxis: [
            {
                label: '',
            },
        ],
        width: 600,
        height: 400,
        sx: {
            [`.${axisClasses.left} .${axisClasses.label}`]: {
                transform: 'translate(-20px, 0)',
            },
        },
    };
    const dataset = [
        {
            london: 59,
            paris: 57,
            newYork: 86,
            seoul: 21,
            month: 'Spring 2024',
        },
        {
            london: 50,
            paris: 52,
            newYork: 78,
            seoul: 28,
            month: 'Summer 2024',
        },
        {
            london: 47,
            paris: 53,
            newYork: 106,
            seoul: 41,
            month: 'Autumn 2024',
        },
    ];

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData(1, 159, 6.0, 24, 4.0),
        createData(2, 237, 9.0, 37, 4.3),
        createData(3, 262, 16.0, 24, 6.0),
        createData(4, 305, 3.7, 67, 4.3),
        createData(5, 356, 16.0, 49, 3.9),
    ];

    const valueFormatter = (value) => `${value}`;

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                gap: 4,
                width: '800px',
                minHeight: '600px',
            }}
        >
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                <Box
                    sx={{
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                        width: 'fit-content',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1,
                    }}
                >
                    <BarChart
                        dataset={dataset}
                        xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                        series={[
                            { dataKey: 'london', label: 'Mentee', valueFormatter },
                            { dataKey: 'paris', label: 'Mentor', valueFormatter },
                            { dataKey: 'newYork', label: 'Company', valueFormatter },
                        ]}
                        {...chartSetting}
                    />
                    <Box sx={{ padding: 1 }}>
                        <Typography variant="h5">Mentorship Campaign Participation - Quarterly Breakdown</Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                        width: 'fit-content',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1,
                    }}
                >
                    <LineChart
                        xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }]}
                        series={[
                            {
                                data: [11, 5.5, 2, 8.5, 1.5, 5, 11, 5.5, 2, 8.5, 1.5, 5],
                            },
                        ]}
                        width={600}
                        height={400}
                    />
                    <Box sx={{ padding: 1 }}>
                        <Typography variant="h5">Monthly Revenue - [2024]</Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                        width: 'fit-content',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1,
                    }}
                >
                    <BarChart
                        dataset={datasetForBarChar}
                        yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                        series={[{ dataKey: 'seoul', label: 'Application', valueFormatter }]}
                        layout="horizontal"
                        grid={{ vertical: true }}
                        {...chartSettingForBarChart}
                    />
                    <Box sx={{ padding: 1 }}>
                        <Typography variant="h5">Student Applications by Month</Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                        width: '600px',
                        height: '500px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1,
                        gap: 2,
                    }}
                >
                    <Typography variant="h6">TOP 5 COMPANIES WITH THE MOST APPLICATIONS</Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 550 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                        No
                                    </TableCell>
                                    <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                        Company
                                    </TableCell>
                                    <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                        Number of applications
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="left">{row.calories}</TableCell>
                                        <TableCell align="left">{row.fat}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Box>
    );
}

export default AdDashboard;

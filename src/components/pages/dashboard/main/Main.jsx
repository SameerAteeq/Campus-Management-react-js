import { BarChart, Group } from '@mui/icons-material'
import { Box, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'

const Main = ({ setSelectedLink, link }) => {
    useEffect(() => {
        setSelectedLink(link)
    }, [])
    return (
        <>
            <Typography variant='h6' sx={{ mb: "20px" }}>
                Welcome, company Name
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={5} lg={5}>
                    <Stack direction="row" justifyContent="center" alignItems="center" gap={2} sx={{ height: "120px", backgroundColor: "#ffff", padding: "5px" }}>
                        <BarChart sx={{ fontSize: { xs: "60px", md: "70px", lg: "90px" }, color: "#00bfa5" }} />
                        <Box>
                            <Typography variant='h5' sx={{ color: "#444", fontWeight: "bold" }}>Total Posts</Typography>
                            <Typography align='center' sx={{ color: "#333333", fontWeight: "bold" }} >2</Typography>
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={5} lg={5}>
                    <Stack direction="row" justifyContent="center" alignItems="center" gap={2} sx={{ height: "120px", backgroundColor: "#ffff", padding: "5px" }}>
                        <Group sx={{ fontSize: { xs: "60px", md: "70px", lg: "90px" }, color: "#00bfa5" }} />
                        <Box>
                            <Typography variant='h5' sx={{ color: "#444", fontWeight: "bold" }}>Total Applicants</Typography>
                            <Typography align='center' sx={{ color: "#333333", fontWeight: "bold" }} >4</Typography>
                        </Box>
                    </Stack>
                </Grid>

            </Grid>
        </>
    )
}

export default Main
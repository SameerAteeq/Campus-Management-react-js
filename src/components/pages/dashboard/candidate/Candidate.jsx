import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const Candidate = () => {
    return (
        <Box sx={{ backgroundColor: "#fff", padding: { xs: "5px", sm: "10px", lg: "20px" } }}>
            <Typography variant='h4' sx={{ mb: "10px", color: '#333' }}>
                Candidates List
            </Typography>
            <Divider flexItem sx={{ borderWidth: 1, color: "#00bfa5", mb: 2 }} />
            <Grid container>
                <Grid item xs={12} lg={12}>
                    <Stack direction="row" gap={2} flexWrap="wrap" justifyContent="space-between" alignItems="center" sx={{ backgroundColor: "#fcf6f6dd", padding: "15px" }}>
                        <Stack direction="row" justifyContent="center" gap={2} flexWrap="wrap" >
                            <img src='/candidate.jpg' height={150} />
                            <Stack direction="column" justifyContent="center" alignItems="center" gap={1}>
                                <Typography variant='h6'>Muhammad Shariq</Typography>
                                <Stack direction="row" gap={1} >
                                    <Typography variant='p' sx={{ backgroundColor: "#e9e5e5", padding: "6px", borderRadius: "6px", color: "gray" }}>Node js</Typography>
                                    <Typography variant='p' sx={{ backgroundColor: "#e9e5e5", padding: "6px", borderRadius: "6px", color: "gray" }}>Express js</Typography>
                                </Stack>
                                <Button variant='text'>View Profile</Button>
                            </Stack>
                        </Stack>
                        <Stack direction="column" >
                        </Stack>
                        <Stack direction="row" gap={1} alignItems="center" justifyContent="center">
                            <Button variant='contained' size="small" color='success'>Accept</Button>
                            <Button variant='contained' size="small" color='error'>Reject</Button>
                        </Stack>
                    </Stack>

                </Grid>
                <Divider />

            </Grid>
        </Box>
    )
}

export default Candidate;
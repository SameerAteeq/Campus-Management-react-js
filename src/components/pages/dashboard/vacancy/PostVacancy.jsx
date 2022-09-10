import { Box, Button, Divider, Grid, InputLabel, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'

const PostVacancy = ({ setSelectedLink, link }) => {
    useEffect(() => {
        setSelectedLink(link)
    }, [])
    return (
        <Box sx={{ backgroundColor: "#fff", padding: { xs: "5px", sm: "10px", lg: "20px" } }}>
            <Typography variant='h5' sx={{ mb: "10px", color: '#333' }}>Job Information</Typography>
            <Divider flexItem sx={{ borderWidth: 1, color: "#00bfa5", mb: 2 }} />
            <form>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <InputLabel>Job Title</InputLabel>
                        <TextField
                            fullWidth
                            size='small'
                            type="text"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputLabel>Monthly Salary</InputLabel>
                        <TextField
                            size='small'
                            fullWidth
                            type="text"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputLabel>Job Description</InputLabel>
                        <TextField
                            size='small'
                            fullWidth
                            type="text"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputLabel>Job Location</InputLabel>
                        <TextField
                            size='small'
                            fullWidth
                            type="text"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InputLabel>No of Opening</InputLabel>
                        <TextField
                            size='small'
                            fullWidth
                            type="text"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputLabel>Apply date</InputLabel>
                        <TextField
                            size='small'
                            id="date"
                            type="date"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputLabel>Last Date</InputLabel>
                        <TextField
                            size='small'
                            id="date"
                            type="date"
                            fullWidth
                        />
                    </Grid>
                    <Grid item>
                        <Button variant='contained'>Submit</Button>
                    </Grid>
                </Grid>
            </form>
        </Box >
    )
}

export default PostVacancy;
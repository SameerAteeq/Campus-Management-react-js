import { Box, Button, Divider, Grid, InputLabel, TextareaAutosize, TextField, Typography } from '@mui/material'
import { DesktopDatePicker } from '@mui/x-date-pickers'
import React, { useEffect, useState } from 'react'
import DateFnsAdapter from "@date-io/date-fns";
const PostVacancy = ({ setSelectedLink, link }) => {
    const [value, setValue] = useState(null);
    const defaultValue = value ? value : new Date();

    const handleChange = (newValue) => {
        setValue(newValue);
    };
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
                            type="text"
                            multiline
                            size="small"
                            fullWidth
                        // style={{ width: "100%" }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputLabel>Job Type</InputLabel>
                        <TextField
                            type="text"
                            size="small"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputLabel>No of Opening</InputLabel>
                        <TextField
                            size='small'
                            fullWidth
                            type="number"
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
                    <Grid item xs={12} md={6}>
                        <InputLabel>Job Location</InputLabel>
                        <TextField
                            size='small'
                            fullWidth
                            type="text"
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <InputLabel>Last Date</InputLabel>
                        <DesktopDatePicker
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField fullWidth size='small' {...params} />}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button variant='contained'>Submit</Button>
                    </Grid>
                </Grid>
            </form>
        </Box >
    )
}

export default PostVacancy;
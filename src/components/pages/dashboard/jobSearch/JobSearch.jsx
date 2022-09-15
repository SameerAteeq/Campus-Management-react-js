import { Search } from '@mui/icons-material'
import { Box, Divider, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'

const JobSearch = () => {
    const rows = [
        {
            id: 1,
            title: "Php developer",
            salary: 45000,
            Openings: 20,
        },
        {
            id: 2,
            title: "React developer",
            salary: 50000,
            Openings: 25,
        },
        {
            id: 3,
            title: "Python developer",
            salary: 40000,
            Openings: 22,
        },
        {
            id: 4,
            title: "Node developer",
            salary: 70000,
            Openings: 30,
        },
    ]
    return (
        <>
            <Box sx={{ backgroundColor: "#fff", padding: { xs: "5px", sm: "10px", lg: "20px" } }}>
                <Typography variant='h4' sx={{ mb: "10px", color: '#333' }}>
                    All Jobs
                </Typography>
                <Divider color="#00bfa5" flexItem sx={{ borderWidth: 1, color: "#00bfa5", mb: 2 }} />
                <TextField type="text" size='small' placeholder='Search Job' InputProps={{
                    endAdornment:
                        <InputAdornment position="end">
                            <IconButton>
                                <Search />
                            </IconButton>
                        </InputAdornment>
                }} />


            </Box>
        </>
    )
}

export default JobSearch
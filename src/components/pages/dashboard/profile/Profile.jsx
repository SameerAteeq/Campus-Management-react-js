import { Box, Button, Divider, Grid, InputLabel, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const Profile = () => {
    return (
        <Box sx={{ backgroundColor: "#fff", padding: { xs: "5px", sm: "10px", lg: "20px" } }}>
            <Typography variant='h4' sx={{ mb: "10px", color: '#333' }}>Your Profile</Typography>
            <Divider flexItem sx={{ borderWidth: 1, color: "#00bfa5", mb: 2 }} />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Stack direction="row" alignItems="center" gap={2}>
                        <img src='/profileimg.jpg' alt='profile' width="100px" height="100px" style={{ borderRadius: "50%" }} />
                        <Typography variant="h6"> Company Name</Typography>
                    </Stack>
                    <Button variant="text">Edit profile</Button>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2} rowSpacing={4}>
                        <Grid item xs={12} md={6}>
                            <InputLabel> Name</InputLabel>
                            <TextField fullWidth placeholder='company name' type="text" size='small' />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <InputLabel> Email</InputLabel>
                            <TextField fullWidth placeholder='company email' type="email" size='small' />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <InputLabel> Address</InputLabel>
                            <TextField fullWidth placeholder='company address' type="text" size='small' />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <InputLabel>Registaration Date</InputLabel>
                            <TextField fullWidth placeholder='company registration' type="text" size='small' />
                        </Grid>
                        <Grid item>
                            <Button variant='contained'>Update</Button>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Box>
    )
}

export default Profile
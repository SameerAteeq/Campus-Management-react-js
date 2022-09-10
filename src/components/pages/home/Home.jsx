import { Typography, Box, Grid, Button } from '@mui/material'
import React from 'react'

const Home = () => {
    return (
        <Box >
            <Grid container justifyContent="center" alignItems="center" padding={2} spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Grid container spacing={1}>
                        <Grid item>
                            <Typography variant='h3' sx={{ color: "#444", fontWeight: "bold" }}>Campus Management</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variaint="body2" color="grey">Security Management is about protection of a building and other assets of the building. Security management is encompasses a field of management related to asset management, physical security and human resource safety functions.</Typography>
                        </Grid>
                        <Grid item>
                            <Button variant='contained' >Learn More...</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src='images/home.png' width="100%" height="100%" />
                </Grid>

            </Grid>
        </Box>


    )
}

export default Home
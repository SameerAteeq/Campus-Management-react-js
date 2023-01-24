import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <div id='contact' sx={{minHeight:"100vh"}} >
        <Box sx={{textAlign:"center", display:"flex", justifyContent:"center"}}>
            <Typography variant='h3' align='center'  sx={{ fontWeight: "bold", color: "#444",  textAlign:"center",borderBottom:"3px solid #00bfa5"}}>ABOUT US</Typography>
        </Box>
        <Grid container  alignItems="center"  spacing={1}>
            <Grid item xs={12} sm={6}>
                 <img src='images/about.png' width="100%" height="100%" />
            </Grid>
            <Grid item xs={12} sm={5}>
                <Typography sx={{color:"#333"}} variant='h6'>We give job searchers and IT experts the chance to track down ideal a profession that guarantees long term development and learning.</Typography>
                <br></br>
                <Typography sx={{color:"#333"}} variant='h6'>We adapt to the our clients changing needs as well changes into the market to make sure growth of the business, success and happiness.
                 </Typography>
            </Grid>
        </Grid>
        
    </div>
  )
}

export default About

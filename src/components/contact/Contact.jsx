import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import Footer from '../footer/Footer'

const Contact = () => {
  return (
    <Box sx={{p:"10px"}}>
      <Box sx={{textAlign:"center", display:"flex", justifyContent:"center",}}>
            <Typography variant='h3' align='center' sx={{ fontWeight: "bold", color: "#444",  textAlign:"center",borderBottom:"3px solid #00bfa5"}}>GET IN TOUCH</Typography>
        </Box>
        <Grid container justifyContent="center" alignItems="center"  spacing={1}>
            <Grid item xs={12} sm={6}>
               <form>
                <Stack gap={2}>

                    <TextField
                    label="Name"
                    type="text"
                    name='Name'
                    fullWidth
                    />
                <TextField
                label="Email"
                type="email"
                name='Name'
                fullWidth
                />
                <TextField
                label="Message"
                type="text"
                name='Name'
                fullWidth
                multiline
                minRows={5}
                />
                <Button sx={{color:"#ffff"}} variant='contained' fullWidth>Send</Button>
                </Stack>
               </form>
            </Grid>
            <Grid item xs={12} sm={6} sx={{width:{xs:"100%", lg:"70%"}}}>
                 <img src='images/contact.png' width="100%" height="20%" style={{backgroundPosition:"center", objectFit:"cover"}} />
            </Grid>
        </Grid>
    </Box>
  )
}

export default Contact

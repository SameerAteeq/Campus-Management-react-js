import { LocationCity, LocationOn } from '@mui/icons-material'
import { Box, Button, Divider, Grid, List, ListItem, ListItemText, Menu, MenuItem, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { allCandidates } from '../../../../api'
import { UserContext } from '../../../../context/Context'

const Candidate = () => {
    const navigate = useNavigate();
    const [candidateUser, setCandidateUser] = useState([]);
    const { currentUser } = useContext(UserContext);
    useEffect(() => {
        const getCandidatelist = async () => {
            const candidateList = await allCandidates("candidate");
            setCandidateUser(candidateList);
        }
        getCandidatelist()
    }, [])
    return (
        <Box sx={{ backgroundColor: "#fff", padding: { xs: "5px", sm: "10px", lg: "20px" } }}>
            <Typography variant='h4' sx={{ mb: "10px", color: '#333' }}>
                Candidates List
            </Typography>
            <Divider color="#00bfa5" flexItem sx={{ borderWidth: 1, color: "#00bfa5", mb: 2 }} />
            <Grid container>
                {candidateUser.map((item) => (
                    <Grid item xs={12} lg={12}>
                        <Stack direction="row" gap={2} flexWrap="wrap" alignItems="center" sx={{ backgroundColor: "#fcf6f6dd", padding: "15px" }}>
                            <Stack direction="row" gap={3} flexWrap="wrap" >
                                <Box sx={{ width: "120px", height: "120px" }}>
                                    <img src={item.imgUrl} alt="user Image" height="100%" width="100%" />
                                </Box>
                                <Stack direction="column" justifyContent="center" gap={1}>
                                    <Typography variant='h6' component={Link} to="/candidate" sx={{ color: "#333" }}>{item.name}</Typography>
                                    <List >
                                        <ListItem>
                                            <ListItemText>

                                                <Typography variant='p' sx={{ backgroundColor: "#e9e5e5", padding: "6px", borderRadius: "6px", color: "gray" }}>{item.skills}</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        {/* <Typography variant='p' sx={{ backgroundColor: "#e9e5e5", padding: "6px", borderRadius: "6px", color: "gray" }}>Express js</Typography> */}
                                    </List>
                                    <Stack direction="row" alignItems="center">
                                        <LocationOn sx={{ color: "#00bfa5" }} />
                                        <Typography variant='p' >{item.address}</Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>

                        <Divider />
                    </Grid>
                ))}
                <Divider />

            </Grid>
        </Box >
    )
}

export default Candidate;
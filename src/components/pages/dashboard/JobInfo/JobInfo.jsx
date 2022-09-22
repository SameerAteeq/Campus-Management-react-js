import { ArrowBack, ArrowRightAlt, Work } from '@mui/icons-material'
import { Box, Button, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Stack, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const JobInfo = () => {
    const navigate = useNavigate()
    return (
        <>
            <Box sx={{ backgroundColor: "aliceblue", padding: { xs: "5px", sm: "10px", lg: "20px" }, width: "100%", height: "100vh" }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant='h4' sx={{ mb: "10px", color: '#333', xs: { fontVariant: "10px" } }}>
                        Job Information
                    </Typography>
                    <Tooltip title="back to Dashboard">
                        <IconButton size="small" onClick={() => navigate(-1)}><ArrowBack /></IconButton>
                    </Tooltip>
                </Stack>
                <Divider color="#00bfa5" flexItem sx={{ borderWidth: 1, color: "#00bfa5", mb: 2 }} />
                <Stack direction="column" gap={2} padding={1}>
                    <Stack direction="column" gap={1}>
                        <Typography variant='h4' sx={{ color: "#292727", fontWeight: "bold" }}>Php Developer</Typography>
                        <Stack direction="row" gap={1}>
                            <Work sx={{ fontSize: "16px", color: "#333" }} />
                            <Typography variant="p" sx={{ color: "#333" }} >Full Time</Typography>
                        </Stack>
                        <Typography component={Link} to="/jobs/application_form" sx={{ color: "#00bfa5" }}>Apply Now</Typography>
                    </Stack>
                    <Divider />
                    <Box>
                        <Typography variant='h5' sx={{ color: "#3d3b3b", fontWeight: "bold" }}>Required</Typography>
                        <List>
                            <ListItem>
                                <ArrowRightAlt />
                                <ListItemText>
                                    Ability to write code – HTML & CSS (SCSS flavor of SASS preferred when writing CSS).
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ArrowRightAlt />
                                <ListItemText>
                                    Proficient in Photoshop, Illustrator, bonus points for familiarity with Sketch (Sketch is our preferred concepting tool).
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ArrowRightAlt />
                                <ListItemText>
                                    Minimun three year experience
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Box>
                    <Divider />
                    <Box>
                        <Typography variant='h5' sx={{ color: "#3d3b3b", fontWeight: "bold" }}>Education + Experience</Typography>
                        <List>
                            <ListItem>
                                <ArrowRightAlt />
                                <ListItemText>
                                    Advanced degree or equivalent experience in Back-End.
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ArrowRightAlt />
                                <ListItemText>
                                    3 or more years of professional Back-End experience.
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ArrowRightAlt />
                                <ListItemText>
                                    Familiarity with mobile and web apps preferred.
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Box>
                </Stack>

            </Box>
        </>
    )
}

export default JobInfo
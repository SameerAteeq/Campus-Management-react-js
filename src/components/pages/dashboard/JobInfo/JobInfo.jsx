import { ArrowBack, ArrowRightAlt, Work } from '@mui/icons-material'
import { Box, Button, CircularProgress, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Stack, Tooltip, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getJob } from '../../../../api'
import NewLoader from '../../../common/loading/NewLoader'
const JobInfo = () => {
    const navigate = useNavigate()
    const { jobId } = useParams();
    console.log("pa", jobId);
    const [loader, setloader] = useState(false);
    const [jobData, setjobData] = useState(null);

    useEffect(() => {
        const getJobDetails = async () => {
            try {
                setloader(true);
                const data = await getJob(jobId);
                setjobData(data);
                setloader(false);
            } catch (error) {
                console.log("job", error)
            }
        }
        getJobDetails()
    }, [jobId])

    console.log("jobData", jobData)

    if (loader) {
        return <NewLoader />;
    }

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
                        <Typography variant='h4' sx={{ color: "#292727", fontWeight: "bold" }}>{jobData?.title}</Typography>
                        <Stack direction="row" gap={1}>
                            <Work sx={{ fontSize: "16px", color: "#333" }} />
                            <Typography variant="p" sx={{ color: "#333" }} >{jobData?.jobtype}</Typography>
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
                                    {jobData?.description}
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
import { Key } from '@mui/icons-material'
import { Box, Button, Grid, styled, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AllPostedJobs } from '../../../api'
import { JobContext, UserContext } from '../../../context/Context'

const Jobs = () => {
    const navigate = useNavigate();
    const { currentUser } = useContext(UserContext);
    const { allJobdata, setAllJobData } = useContext(JobContext);
    useEffect(() => {
        const getAllJobs = async () => {
            const allCompanyJobs = await AllPostedJobs();
            setAllJobData(allCompanyJobs);
        }
        getAllJobs();
    }, [])
    const StyleBox = styled(Box)({
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        backgroundColor: "aliceblue",
        minWidth: "100px",
        padding: "20px",
        cursor: "pointer",
        transition: "transform .5s ease",
        "&:hover": {
            transform: "scale(1.1)"
        }
    })
    return (
        <Box>
            <Typography variant='h3' align='center' sx={{ fontWeight: "bold", color: "#444", margin: "10px" }}>ALL JOBS</Typography>
            <Grid container spacing={2} padding={1} >
                {allJobdata.map((item) => (
                    <Grid key={item.id} item xs={12} sm={6} md={5} lg={4} >
                        <StyleBox onClick={() => navigate(`/job_info/${item?.id}`)} >
                            <Typography align="center" variant='h5' sx={{ fontWeight: "bold", color: "#333" }}>{item.title}</Typography>
                            <Typography variant="p"><span style={{ color: "gray", fontWeight: "bold" }}>Description :</span> {item.description}</Typography>
                            <Typography variant="p"><span style={{ color: "gray", fontWeight: "bold" }}>Job Type :</span> {item.jobtype}</Typography>
                            <Typography variant="p"><span style={{ color: "gray", fontWeight: "bold" }}>Openings :</span> {item.opening}</Typography>
                            <Typography variant="p"><span style={{ color: "gray", fontWeight: "bold" }}>Location :</span> {item.location}</Typography>
                            <Typography variant="p"><span style={{ color: "gray", fontWeight: "bold" }}>Last Date to Apply :</span> {item.lastDate}</Typography>
                            {/* <Button variant='contained' size="small" sx={{ width: "50px", textAlign: "center" }} onClick={() => navigate(currentUser ? "/jobs/application_form" : "/login")} >Apply</Button> */}
                        </StyleBox>
                    </Grid>

                ))}
            </Grid>
        </Box>
    )
}

export default Jobs
import { Key } from '@mui/icons-material'
import { Box, Button, CircularProgress, Grid, Link, Stack, styled, Typography } from '@mui/material'
import { borderBottom } from '@mui/system'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AllPostedJobs } from '../../../api'
import { JobContext, UserContext } from '../../../context/Context'
import Footer from '../../footer/Footer'

const Jobs = () => {
    const navigate = useNavigate();
    const[visible,setVisible]= useState(false);
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
        position:"relative",
        display: "flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center",
        gap: "10px",
        backgroundColor: "#9ee9e7c2",
        minWidth: "100px",
        height:"220px",
        cursor: "pointer",
        borderRadius:"10px",
        transition: "transform .5s ease",
        padding:"12px",
        overflow:"hidden",
    })
    return (
        <Box  sx={{minHeight:"100vh"}} >
            <Box sx={{textAlign:"center", display:"flex", justifyContent:"center"}}>
            <Typography variant='h3' align='center'  sx={{ fontWeight: "bold", color: "#444", margin: "10px", textAlign:"center",borderBottom:"3px solid #00bfa5"}}>HIRING</Typography>
            </Box>
            <Typography sx={{color:"#333",mb:"20px"}} align='center' variant='h6'>All jobs are posted with their deadline</Typography>
                {allJobdata.length >0 ? 
            <Grid container spacing={2} padding={1} sx={{display:"flex", justifyContent:"center"}}>
                {allJobdata?.slice(0,visible? allJobdata.lengt: 6)?.map((item) => (
                    <Grid key={item.id} item xs={12} sm={6} md={5} lg={4} >
                        <StyleBox className='container' >
                            <Typography align="center" variant='h5' sx={{ fontWeight: "bold", color: "#333" }}>{item.title}</Typography>
                            <Box className='content' >
                            <Typography variant="p"><span style={{  fontWeight: "bold" }}>Deadline :</span> {item.lastDate}</Typography>
                            <Typography variant="p"><span style={{  fontWeight: "bold" }}>Job Type :</span> {item.jobtype}</Typography>
                            <Typography variant="p"><span style={{  fontWeight: "bold" }}>Openings :</span> {item.opening}</Typography>
                            <Typography variant="p"><span style={{  fontWeight: "bold" }}>Location :</span> {item.location}</Typography>
                            <Button sx={{backgroundColor:"#3aded6"}} onClick={() => navigate(`${currentUser?`/job_info/${item?.id}` :`/login` }`)} variant='contained'>View</Button>
                             </Box>
                        </StyleBox>
                    </Grid>
                ))}
            </Grid>
            :
             <Stack direction={"row"} alignItems={"center"} justifyContent={"center"}>
                <Typography variant='h6'>Please wait....</Typography>
                </Stack>
             
             }
             {allJobdata?.length >6 &&
             <div style={{textAlign:"center",textDecorationColor:"black"}}>
             <Link sx={{textAlign:"center",cursor:"pointer",width:"100%",color:"#333",textDecorationColor:"black"}}  onClick={()=>setVisible(!visible)}>{visible? "Show less":"Show more"}</Link>
             </div>
             }
             
        </Box>
    )
}

export default Jobs
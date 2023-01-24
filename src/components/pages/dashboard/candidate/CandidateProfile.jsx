import { ArrowBack, Work } from '@mui/icons-material';
import { Box, Button, Divider, IconButton, LinearProgress, Stack, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getCandidate } from '../../../../api';
import NewLoader from '../../../common/loading/NewLoader';

const CandidateProfile = () => {
    const { candidateId } = useParams();
    const [loader, setLoader] = useState(false);
    const [candidateData, setCandidateData] = useState(null)
    const [level, setLevel] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setInterval(() => {
            setLevel((newLevel) => newLevel >= 100 ? 0 : newLevel + 100)
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, [])
    useEffect(() => {
        const getCandidateDetails = async () => {
            try {
                setLoader(true);
                const data = await getCandidate(candidateId);
                setCandidateData(data);
                setLoader(false);
            } catch (error) {
                console.log(error);
            }
        }
        getCandidateDetails()
    }, [candidateId])
    if (loader) {
        return <NewLoader />
    }
    return (
        <Box sx={{ backgroundColor: "aliceblue", padding: { xs: "5px", sm: "10px", lg: "20px" } }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography variant='h4' sx={{ mb: "10px", color: '#333', xs: { fontVariant: "10px" } }}>
                    Candidate Profile
                </Typography>
                <Tooltip title="back to Dashboard">
                    <IconButton size="small" onClick={() => navigate(-1)}><ArrowBack /></IconButton>
                </Tooltip>
            </Stack>
            <Divider color="#00bfa5" flexItem sx={{ borderWidth: 1, color: "#00bfa5", mb: 2 }} />
            <Stack direction="column" gap={2}>

                <Stack direction="row" alignItems="center" gap={2} sx={{ padding: "15px" }} flexWrap="wrap">
                    <img src={candidateData?.imgUrl} alt='candidate profile' width={150} height={150} />
                    <Stack direction="column" alignItems="center" >
                        <Typography variant='h6' >{candidateData?.name}</Typography>
                        <Stack direction="row" alignItems="center" gap={1}>
                            <Work sx={{ fontSize: "16px" }} />
                            <Typography variant='p'>Full Stack Developer</Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Divider />
                <Box sx={{ border: "1px solid gray" }}>
                    <Typography variant="h5" sx={{ padding: "5px", color: "#333", mb: "10px", borderBottom: '1px solid gray', backgroundColor: "#00bfa5", fontWeight: "bold" }}>ABOUT ME</Typography>
                    <Box sx={{ padding: "10px", color: "gray" }}>
                        <Typography variant="p" >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, explicabo expedita aspernatur rerum id et ut distinctio atque voluptatem dolor provident excepturi sint odit numquam magni impedit odio eos facilis aperiam doloribus praesentium tempora officiis doloremque? Totam vitae qui dolorem?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus possimus sapiente, recusandae tempore quidem temporibus voluptas suscipit, aperiam quae minima eius totam, nostrum officiis harum itaque rerum odit at consequatur exercitationem accusamus quisquam architecto. Laudantium quas incidunt perspiciatis consectetur facere repellat illum reiciendis velit officiis, doloremque itaque, modi labore.
                        </Typography>
                    </Box>
                </Box>
                <Divider />
                <Box sx={{ border: "1px solid gray" }}>
                    <Typography variant="h5" sx={{ padding: "5px", color: "#444", mb: "10px", borderBottom: '1px solid gray', backgroundColor: "#00bfa5", fontWeight: "bold" }}>SKILLS</Typography>
                    <Box sx={{ padding: "15px" }}>

                        <Typography variant='p'>Node js</Typography>
                        <Box sx={{ width: '70%', m: { xs: "10px", } }}>
                            <LinearProgress variant='determinate' value={55} />
                        </Box>
                        <Typography variant='p'>Express js</Typography>
                        <Box sx={{ width: '70%', m: { xs: "10px", } }}>
                            <LinearProgress variant='determinate' value={89} />
                        </Box>
                        <Typography variant='p'>React js</Typography>
                        <Box sx={{ width: '70%', m: { xs: "10px", } }}>
                            <LinearProgress variant='determinate' value={70} />
                        </Box>
                    </Box>
                </Box>
            </Stack>
        </Box>
    )
}

export default CandidateProfile

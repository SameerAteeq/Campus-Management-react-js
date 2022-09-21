import { SentimentVeryDissatisfied } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Empty = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", color: "gray" }}>
            <SentimentVeryDissatisfied sx={{ fontSize: "50px" }} />
            <Typography variant='h2' sx={{ fontWeight: "bold" }} >Empty</Typography>
        </Box>
    )
}

export default Empty
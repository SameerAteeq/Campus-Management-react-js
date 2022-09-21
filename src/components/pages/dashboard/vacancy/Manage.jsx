import { Delete, Edit } from '@mui/icons-material'
import { Box, Button, Divider, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postedJobs } from '../../../../api'
import { JobContext, UserContext } from '../../../../context/Context'
import CommonDialog from '../../../common/dialog/CommonDialog'
import Empty from '../../../common/empty/Empty'



const Manage = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const { jobdata, setJobData } = useContext(JobContext);
    const navigate = useNavigate();
    const { currentUser } = useContext(UserContext);
    useEffect(() => {
        const getData = async () => {
            const companyJobs = await postedJobs(currentUser.id);
            setJobData(companyJobs);
        }
        getData();
    }, [])
    return (
        <Box sx={{ backgroundColor: "#fff", padding: { xs: "5px", sm: "10px", lg: "20px" }, width: "100%", height: "100vh" }}>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", padding: "10px" }}>
                <Typography variant='h4' sx={{ color: '#333' }}>POSTED JOBS</Typography>
                <Button variant="contained" onClick={() => navigate("/Dashboard/Vacancy")} >Post Jobs</Button>
            </Box>
            <Divider color="#00bfa5" flexItem sx={{ borderWidth: 1, mb: 2 }} />
            {jobdata.length ?
                <Box sx={{ marginTop: "30px" }}>
                    <TableContainer component={Paper} >
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead sx={{ backgroundColor: "#ddd" }} >
                                <TableRow >
                                    <TableCell  >Job Title</TableCell>
                                    <TableCell align='right'>Salary</TableCell>
                                    <TableCell align='right'>Job Type</TableCell>
                                    <TableCell align='right'>Action</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {jobdata.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        hover
                                    >
                                        <TableCell onClick={() => navigate("/dashboard/Vacancy")}
                                            sx={{ fontWeight: "bold", color: "GrayText", cursor: "pointer" }}
                                        >
                                            {row.title}
                                        </TableCell>
                                        <TableCell align='right'>${row.salary}</TableCell>
                                        <TableCell align='right'>{row.jobtype}</TableCell>
                                        <TableCell align='right' >
                                            <Tooltip title="Edit Job">
                                                <IconButton>
                                                    <Edit />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Delete Job">
                                                <IconButton onClick={() => setOpenDialog(true)} >
                                                    <Delete />
                                                </IconButton>
                                            </Tooltip>
                                        </TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                            {/* <TableFooter>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 15]}
                                count={data.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </TableFooter> */}
                        </Table>
                    </TableContainer>
                    <CommonDialog {...{ openDialog, setOpenDialog }} />
                </Box> : <Empty />}
        </Box>
    )
}

export default Manage
import { Delete, Edit, Search } from '@mui/icons-material'
import { Box, Divider, IconButton, InputAdornment, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, TextField, Tooltip, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AllPostedJobs } from '../../../../api'
import { JobContext } from '../../../../context/Context'


const JobSearch = () => {
    const { allJobdata, setAllJobData } = useContext(JobContext);
    const navigate = useNavigate()
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(0);
    const [searchField, setSearchField] = useState("");
    const [filterData, setFilterData] = useState(allJobdata);
    useEffect(() => {
        const NewFilter = allJobdata.filter((data) => {
            return data.title.toLowerCase().includes(searchField)
        });
        setFilterData(NewFilter)
    }, [allJobdata, searchField])
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    useEffect(() => {
        const getAllJobs = async () => {
            const allCompanyJobs = await AllPostedJobs();
            setAllJobData(allCompanyJobs);
        }
        getAllJobs();
    }, [])

    return (
        <>
            <Box sx={{ backgroundColor: "#fff", padding: { xs: "5px", sm: "10px", lg: "20px" } }}>
                <Typography variant='h4' sx={{ mb: "10px", color: '#333' }}>
                    All Jobs
                </Typography>
                <Divider color="#00bfa5" flexItem sx={{ borderWidth: 1, color: "#00bfa5", mb: 2 }} />
                <TextField value={searchField} onChange={(e) => setSearchField(e.target.value)} type="text" size='small' placeholder='Search Job' InputProps={{
                    endAdornment:
                        <InputAdornment position="end">
                            <IconButton>
                                <Search />
                            </IconButton>
                        </InputAdornment>
                }} />
                <Box sx={{ marginTop: "30px" }}>
                    <TableContainer component={Paper} >
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead sx={{ backgroundColor: "#ddd" }} >
                                <TableRow >
                                    <TableCell  >Job Title</TableCell>
                                    <TableCell align='center'>Location</TableCell>
                                    <TableCell align='center'>Job Type</TableCell>
                                    <TableCell align='center'>Vacancy</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {filterData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                    <TableRow
                                        key={row.id}
                                        hover
                                    >
                                        <TableCell onClick={() => navigate("/job_info")}
                                            sx={{ fontWeight: "bold", color: "GrayText", cursor: "pointer" }}
                                        >
                                            {row.title}
                                        </TableCell>
                                        <TableCell align='center'>{row.location}</TableCell>
                                        <TableCell align='center'>{row.jobtype}</TableCell>
                                        <TableCell align='center' >
                                            {row.opening}
                                        </TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 15]}
                                    count={allJobdata.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                />
                            </TableFooter>
                        </Table>
                    </TableContainer>
                </Box>

            </Box>
        </>
    )
}

export default JobSearch
import { Delete, Edit, Search } from '@mui/icons-material'
import { Box, Divider, IconButton, InputAdornment, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const rows = [
    {
        id: 1,
        title: "Php developer",
        location: "Lawrence, KS, USA",
        jobType: "Part time",
        vacancy: 4
    },
    {
        id: 2,
        title: "React developer",
        location: "East Palo Alto, California",
        jobType: "Full time",
        vacancy: 5
    },
    {
        id: 3,
        title: "Python developer",
        location: "Platte City, Missouri",
        jobType: "Part time",
        vacancy: 7
    },
    {
        id: 4,
        title: "Node developer",
        location: "San Francisco",
        jobType: "Full time",
        vacancy: 3
    },
    {
        id: 5,
        title: "Express Js developer",
        location: "Leavenworth, Kansas",
        jobType: "Full time",
        vacancy: 8
    },
    {
        id: 6,
        title: "Wordpress developer",
        location: "Platte City, Missouri",
        jobType: "Part time",
        vacancy: 6
    },
    {
        id: 7,
        title: "MERN developer",
        location: "San Francisco",
        jobType: "Full time",
        vacancy: 13
    },
]
const JobSearch = () => {
    const navigate = useNavigate()
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(0);
    const [searchField, setSearchField] = useState("");
    const [filterData, setFilterData] = useState(rows);
    useEffect(() => {
        const NewFilter = rows.filter((data) => {
            return data.title.toLowerCase().includes(searchField)
        });
        setFilterData(NewFilter)
    }, [rows, searchField])
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

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
                                        <TableCell align='center'>{row.jobType}</TableCell>
                                        <TableCell align='center' >
                                            {row.vacancy}
                                        </TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 15]}
                                    count={rows.length}
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
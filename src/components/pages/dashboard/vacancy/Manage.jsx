import { Delete, Edit } from '@mui/icons-material'
import { Box, Divider, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const rows = [
    {
        id: 1,
        title: "Php developer",
        salary: 45000,
        jobType: "Part time",
    },
    {
        id: 2,
        title: "React developer",
        salary: 50000,
        jobType: "Full time",
    },
    {
        id: 3,
        title: "Python developer",
        salary: 40000,
        jobType: "Part time",
    },
    {
        id: 4,
        title: "Node developer",
        salary: 70000,
        jobType: "Full time",
    },
]

const Manage = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ backgroundColor: "#fff", padding: { xs: "5px", sm: "10px", lg: "20px" }, width: "100%", height: "100vh" }}>
            <Typography variant='h4' sx={{ mb: "10px", color: '#333' }}>POSTED JOBS</Typography>
            <Divider color="#00bfa5" flexItem sx={{ borderWidth: 1, mb: 2 }} />
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
                            {rows.map((row) => (
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
                                    <TableCell align='right'>{row.jobType}</TableCell>
                                    <TableCell align='right' >
                                        <Tooltip title="Edit Job">
                                            <IconButton>
                                                <Edit />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Delete Job">
                                            <IconButton  >
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
            </Box>
        </Box>
    )
}

export default Manage
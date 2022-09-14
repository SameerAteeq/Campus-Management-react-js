import { Delete, Edit } from '@mui/icons-material'
import { Box, Divider, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from '@mui/material'
import React from 'react'

const rows = [
    {
        id: 1,
        title: "Php developer",
        salary: 45000,
        Openings: 20,
    },
    {
        id: 2,
        title: "React developer",
        salary: 50000,
        Openings: 25,
    },
    {
        id: 3,
        title: "Python developer",
        salary: 40000,
        Openings: 22,
    },
    {
        id: 4,
        title: "Node developer",
        salary: 70000,
        Openings: 30,
    },
]

const Manage = () => {
    return (
        <Box sx={{ backgroundColor: "#fff", padding: { xs: "5px", sm: "10px", lg: "20px" } }}>
            <Typography variant='h4' sx={{ mb: "10px", color: '#333' }}>POSTED JOBS</Typography>
            <Divider color="#00bfa5" flexItem sx={{ borderWidth: 1, mb: 2 }} />
            <Box sx={{ marginTop: "30px" }}>
                <TableContainer component={Paper} >
                    <Table sx={{ minWidth: 350 }} aria-label="simple table">
                        <TableHead sx={{ backgroundColor: "#ddd" }} >
                            <TableRow >
                                <TableCell  >Job Title</TableCell>
                                <TableCell align='right'>Salary</TableCell>
                                <TableCell align='right'>Openeing</TableCell>
                                <TableCell align='right'>Action</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    hover
                                >
                                    <TableCell component="th" scope="row"
                                    >
                                        {row.title}
                                    </TableCell>
                                    <TableCell align='right'>${row.salary}</TableCell>
                                    <TableCell align='right'>{row.Openings}</TableCell>
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